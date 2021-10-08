import React from 'react'

const User = ({users, match}) => {
	const userId = match.params.userId
	const getUsersById = (id) => users.find(user=>user._id===id)
	return <h1>{getUsersById(userId)?.firstName}</h1>
}

export default User
