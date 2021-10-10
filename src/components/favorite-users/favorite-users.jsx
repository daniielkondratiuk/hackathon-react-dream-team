import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import UsersList from '../users-list'

import './favorite-users.css'

const FavoriteUsers = ({ handleToggleFavorite }) => {
	const usersRaw = localStorage.getItem('usersFavorite')
	const users = JSON.parse(usersRaw)

	const history = useHistory()
	const handleClick = (id) => {
		history.push(id)
	}

	return (
		<UsersList
			users={users}
			handleClick={handleClick}
			handleToggleFavorite={handleToggleFavorite}
		/>
	)
}
FavoriteUsers.propTypes = {
	handleToggleFavorite: PropTypes.func.isRequired
}
export default FavoriteUsers
