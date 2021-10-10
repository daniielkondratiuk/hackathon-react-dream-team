import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import api from '../../api';
import UserPage from "../user-page/user-page";

const User = ({ users, match }) => {
	const [user, setUser] = useState(null)
	// const user = (id) => users.find((user) => user._id === id) // Старый вариант без повторного запроса на сервер
	const userId = match.params.userId

	useEffect(() => {
		api.getUserById(userId).then(setUser)
	}, [user])
	if (!user) return null
	return <>
		{ user ? <UserPage user={user} /> : <h2>User not found</h2> }
	</>
}

User.propTypes = {
	users: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired
}

export default User
