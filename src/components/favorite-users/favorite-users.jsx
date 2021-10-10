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
	if (users.length === 0) return <h1 className="ms-2">Нет избранных</h1>
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
