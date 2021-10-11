import React from 'react'

import './welcome.css'

const Welcome = () => {
	return (
		<div className='welcome bg-light'>
			<h2>Hackathon 2 - Group 9</h2>
			<h1>Welcome to our Website</h1>
			<p>
				We are junior front-end developers who have united into one team to participate in the hackathon organized by <a className='nav-link d-inline p-0' target='_blank' href="https://vladilen.ru/" rel="noreferrer">Vladilen Minin</a> and his team.
			</p>
			<p>We have been working hard over the weekend to create this website</p>
			<p>Below you can get to know each member of our team and contact</p>
			<p>Each of us is open to job offers.</p>
		</div>)
}

export default Welcome
