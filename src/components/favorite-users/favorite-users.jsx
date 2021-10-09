import React from 'react'
import PropTypes from 'prop-types'

import './favorite-users.css'
import { useHistory } from 'react-router-dom'
import { View } from '../users-list/users-list'

const FavoriteUsers = ({ handleToggleFavorite }) => {
	const usersRaw = localStorage.getItem('usersFavorite')
	const users = JSON.parse(usersRaw)

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
FavoriteUsers.propTypes = {
	handleToggleFavorite: PropTypes.func.isRequired
}
export default FavoriteUsers
