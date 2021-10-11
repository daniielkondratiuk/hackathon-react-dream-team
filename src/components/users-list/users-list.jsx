import React from 'react'
import { PropTypes } from 'prop-types'
import { useHistory } from 'react-router-dom'

import './users-list.css'
import Button from '../button'
import Badge from '../badge'
import Welcome from '../welcome/welcome'

const UsersList = ({ users, handleToggleFavorite }) => {
	const history = useHistory()
	const handleClick = (id) => {
		history.push(id)
	}

	return (
		<div className="user-list mx-auto bg-light ">
			<Welcome/>
			<div className="col-10 mx-auto d-flex justify-content-around flex-wrap">
				<View
					users={users}
					handleClick={handleClick}
					handleToggleFavorite={handleToggleFavorite}
				/>
			</div>

		</div>
	)
}

const View = ({ users, handleClick, handleToggleFavorite }) =>
	users.map((user) => {
		return (
			<div key={user._id} className="user-list__card card my-2 position-relative">
				<img className="card-img-top" src={user.avatar} alt="Card ok cap" />
				<Button
					color={'warning'}
					name={user.favorite ? <i className="bi bi-star-fill" /> : <i className="bi bi-star" />}
					handleClick={() => handleToggleFavorite(user._id)}
					classes={'position-absolute end-0'}
				/>
				<div className="card-body">
					<h5 className="card-title">
						{user.firstName} {user.lastName}
					</h5>
					<div className="col-12">{user.roles.map(role => <Badge key={role._id} color={role.color} content={role.content} />)}</div>
				</div>
				<Button
					color={'primary'}
					name={'View Profile'}
					handleClick={() => handleClick(user._id)}
					classes="d-block w-100"
				/>
			</div>
		)
	})

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
	handleToggleFavorite: PropTypes.func.isRequired
}

export default UsersList
