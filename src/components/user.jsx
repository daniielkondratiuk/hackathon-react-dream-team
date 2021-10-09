import React from 'react'
import UserPage from "./user-page";

const User = ({users, match}) => {
	const userId = match.params.userId
	const getUsersById = (id) => users.find(user=>user._id===id)
	return <>
		{ getUsersById(userId) ? <UserPage user={getUsersById(userId)} /> : <h2>User not found</h2> }
	</>
}

export default User
