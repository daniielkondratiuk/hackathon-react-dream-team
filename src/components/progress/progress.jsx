import React from 'react'
import PropTypes from 'prop-types'

import './progress.css'

const Progress = ({ percent, name, color, type }) => {
	return <div>Progress</div>
}

Progress.propTypes = {
	percent: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}

export default Progress
