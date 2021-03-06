import React from 'react'
import PropTypes from 'prop-types'

import './badge.css'

const Badge = ({ color, content }) => (
	<span className={`badge badge-margin me-2 bg-${color}`}>{content}</span>
)

Badge.propTypes = {
	color: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Badge
