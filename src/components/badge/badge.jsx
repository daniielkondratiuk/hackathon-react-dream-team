import React from 'react'
import PropTypes from 'prop-types'

import './badge.css'

const Badge = ({ color, content }) => {
	return <h3>Badge</h3>
}

Badge.propTypes = {
	color: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Badge
