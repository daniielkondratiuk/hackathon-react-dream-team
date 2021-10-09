import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './breadcrumbs.css'

const Breadcrumbs = () => {
	const { pathname } = useLocation()

	const pathnames = pathname.split('/').filter((x) => x)

	if (pathname === '/') return null
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb ms-2 mt-2">
				<li className="breadcrumb-item">
					<Link to="/">Главная</Link>
				</li>
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
					const isLast = index === pathnames.length - 1
					if (name === 'favorite-users') name = 'Избранные'
					return (
						<li key={index} className="breadcrumb-item word text-nowrap">
							{isLast ? <p>{name}</p> : <Link to={routeTo}>{name}</Link>}
						</li>
					)
				})}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
