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

import './app.css'

const App = () => {
	const [users, setUsers] = useState(null)
	useEffect(() => {
		api.getAllUsers().then(setUsers)
	}, [users])
	if (!users) return null
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact render={() => <UsersList users={users} />} />
					<Route path="/favorite-users" exact component={FavoriteUsers} />
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
