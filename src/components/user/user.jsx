import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../api'
import Badge from '../badge'

const User = ({ users, match }) => {
	const [user, setUser] = useState(null)
	// const user = (id) => users.find((user) => user._id === id) // Старый вариант без повторного запроса на сервер
	const userId = match.params.userId

	useEffect(() => {
		api.getUserById(userId).then(setUser)
	}, [user])
	if (!user) return null
	return		<>
		<h1>{user.firstName}</h1>
		<Badge color={user.role.color} content={user.role.content} />
	</>
}

User.propTypes = {
	users: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired
}

export default User
