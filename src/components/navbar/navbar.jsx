import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Главная
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/favorite-users">
							Избранные
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
