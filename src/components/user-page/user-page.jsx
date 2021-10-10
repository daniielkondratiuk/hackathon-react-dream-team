import React from 'react'
import PropTypes from 'prop-types'
import style from './user-page.module.css'
import Progress from '../progress/progress'
import Badge from '../badge'

const UserPage = ({ user }) => {
	return (
		<>
			<div className={style.item}>
				<div className={style.itemFirst}>
					<div className={style.itemImg}>
						<img
							className={style.itemPic}
							src={user.avatar}
							alt={`Foto ${user.firstName}`}
						/>
					</div>
					<ul className={style.socialList}>
						{user.socials.map((social) => (
							<li key={social.name} className="me-2 ">
								<a href={social.url} className="text-decoration-none">
									<i className={`bi bi-${social.name} me-1 `} />
									<span>{social.name}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className={style.itemSec}>
					<h2 className={style.color}>
						My name is {user.firstName} {user.lastName}
					</h2>
					<div>{user.roles.map(role => <Badge key={role._id} color={role.color} content={role.content} />)}</div>

					<p>I am {user.age} years old</p>
					<h3>About me</h3>
					<p>{user.about}</p>
					<h3>I wanna tell you about my skills</h3>
					<ul className={style.elements}>
						{user.skills.map((skill) => (
							<li key={skill.name} className={style.element}>
								<Progress {...skill} type="circle" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

UserPage.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserPage
