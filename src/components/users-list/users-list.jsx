import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { useHistory } from 'react-router-dom'

import './users-list.css'

const UsersList = ({ users }) => {
	const [favorite, setFavorite] = useState(false)
	const history = useHistory()
	const handleClick = (id) => {
		history.push(id)
	}

	return (
		<div className="d-flex justify-content-around flex-wrap">
			<View
				users={users}
				handleClick={handleClick}
				favorite={favorite}
				setFavorite={setFavorite}
			/>
		</div>
	)
}

const View = ({ users, handleClick, favorite, setFavorite }) =>
	users.map((user) => {
		return (
			<div key={user._id} className="card my-2 position-relative">
				<img className="card-img-top" src={user.avatar} alt="Card ok cap" />
				<button
					onClick={() => setFavorite(!favorite)}
					className="btn btn-warning position-absolute end-0"
				>
					{favorite ? <i className="bi bi-star-fill" /> : <i className="bi bi-star" />}
				</button>
				<div className="card-body">
					<h5 className="card-title">
						{user.firstName} {user.lastName}
					</h5>
				</div>
				<button
					onClick={() => handleClick(user._id)}
					className="btn btn-primary d-block w-100"
				>
					View Profile
				</button>
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
	users: PropTypes.array.isRequired
}

export default UsersList
