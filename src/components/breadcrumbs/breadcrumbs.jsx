import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

import './breadcrumbs.css'

const Breadcrumbs = ({ users }) => {
	const { pathname } = useLocation()

	const pathnames = pathname.split('/').filter((x) => x)

	const renderCrumb = (pathName) => {
		if (pathName === 'favorite-users') return 'Избранные'
		if (!isNaN(pathName)) {
			return users.find((user) => user._id === pathName).firstName
		}
	}

	if (pathname === '/') return null
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb ms-2 mt-2">
				<li className="breadcrumb-item">
					<i className="bi bi-house-door me-1" />
					<Link to="/">Главная</Link>
				</li>
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice().join('/')}`
					const isLast = index === pathnames.length - 1
					return (
						<li key={index} className="breadcrumb-item word text-nowrap">
							{isLast ? <p>{renderCrumb(name)}</p> : <Link to={routeTo}>{renderCrumb(name)}</Link> }
						</li>
					)
				})}
			</ol>
		</nav>
	)
}

Breadcrumbs.propTypes = {
	users: PropTypes.array.isRequired
}

export default Breadcrumbs
