import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ color, handleClick, name, type }) => {
	return <button>button</button>
}

Button.propTypes = {
	color: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string
}

export default Button
