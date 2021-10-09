import React from 'react'
import PropTypes from 'prop-types'

import './favorite-users.css'

const FavoriteUsers = ({ handleFavorite }) => {
	return <h1>Favorite Users</h1>
}
FavoriteUsers.propTypes = {
	handleFavorite: PropTypes.func.isRequired
}
export default FavoriteUsers
