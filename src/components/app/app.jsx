import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import api from '../../api'
import UsersList from '../users-list'
import Navbar from '../navbar'
import FavoriteUsers from '../favorite-users'
import User from '../user'
import Breadcrumbs from '../breadcrumbs'

import './app.css'

const App = () => {
	const [users, setUsers] = useState(null)

	useEffect(() => {
		api.getAllUsers().then(setUsers)
	}, [users])

	if (!localStorage.getItem('usersFavorite')) {
		localStorage.setItem('usersFavorite', JSON.stringify([]))
	}
	const handleToggleFavorite = (id) => {
		setUsers(
			users.filter((user) => {
				if (user._id === id) {
					user.favorite = !user.favorite
				}
				return user
			})
		)
		localStorage.setItem('usersFavorite', JSON.stringify([]))
		let usersFavorite = []
		users.map((user) => {
			if (user.favorite === true) {
				if (usersFavorite === []) {
					usersFavorite = [user]
				} else {
					usersFavorite = [...usersFavorite, user]
				}
			}
			return usersFavorite
		})
		if (usersFavorite) {
			usersFavorite = usersFavorite.filter((user) => user.favorite !== false)
		}
		return localStorage.setItem('usersFavorite', JSON.stringify(usersFavorite))
	}
	if (!users) return null
	return (
		<>
			<Router>
				<Navbar />
				<Breadcrumbs />
				<Switch>
					<Route
						path="/"
						exact
						render={() => (
							<UsersList
								users={users}
								handleToggleFavorite={handleToggleFavorite}
							/>
						)}
					/>
					<Route
						path="/favorite-users"
						exact
						render={() => (
							<FavoriteUsers handleToggleFavorite={handleToggleFavorite} />
						)}
					/>
					<Route
						path="/:userId"
						exact
						render={(props) => <User users={users} {...props} />}
					/>
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	)
}

export default App
