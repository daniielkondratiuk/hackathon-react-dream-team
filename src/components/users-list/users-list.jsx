import React from 'react'
import { PropTypes } from 'prop-types'
import { useHistory } from 'react-router-dom'

import './users-list.css'
import Button from '../button'

const UsersList = ({ users, handleToggleFavorite }) => {
	const history = useHistory()
	const handleClick = (id) => {
		history.push(id)
	}

	return (
		<div className="d-flex justify-content-around flex-wrap">
			<View
				users={users}
				handleClick={handleClick}
				handleToggleFavorite={handleToggleFavorite}
			/>
		</div>
	)
}

const View = ({ users, handleClick, handleToggleFavorite }) =>
	users.map((user) => {
		return (
			<div key={user._id} className="card my-2 position-relative">
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
				</div>
				<Button
					color={'primary'}
					name={'View Profile'}
					handleClick={() => handleClick(user._id)}
					classes="d-block w-100"
				/>
				<div className="d-flex justify-content-around">
					<ol>
						{user.skills.map((skill) => (
							<li key={skill.name}>{skill.name}</li>
						))}
					</ol>
					<ul>
						{user.socials.map((social) => (
							<li key={social.name}>{social.name}</li>
						))}
					</ul>
				</div>
			</div>
		)
	})

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
	handleToggleFavorite: PropTypes.func.isRequired
}

export default UsersList
