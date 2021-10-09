import React from 'react'
import PropTypes from 'prop-types'

import './badge.css'

const Badge = ({ role }) => (
	<span key={role._id} className={`badge badge-margin bg-${role.color}`}>
		{role.name}
	</span>
)

Badge.propTypes = {
	role: PropTypes.object.isRequired
}

export default Badge
