import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ color, handleClick, name, type, classes }) => {
	const btnType = type === 'rounded' ? '' : 'rounded-0'
	return (
		<button
			onClick={ () => handleClick()}
			className={`btn btn-${color} ${btnType} ${classes}`}
		>
			{name}
		</button>
	)
}

Button.propTypes = {
	color: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	type: PropTypes.string,
	classes: PropTypes.string
}

export default Button
