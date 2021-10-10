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
					<Badge color={user.role.color} content={user.role.content} />
					<div className={style.itemImg}>
						<img
							className={style.itemPic}
							src={user.avatar}
							alt={`Foto ${user.firstName}`}
						/>
					</div>
					<ul className={style.socialList}>
						<li className={style.socialItem}>Git</li>
						<li className={style.socialItem}>VK</li>
						<li className={style.socialItem}>Facebook</li>
						<li className={style.socialItem}>Insta</li>
					</ul>
				</div>
				<div className={style.itemSec}>
					<h2 className={style.color}>
						My name is {user.firstName} {user.lastName}
					</h2>
					<p>I am {user.age} years old</p>
					<h3>{user.about}</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
						assumenda deserunt dignissimos doloremque eos ipsam laboriosam
						laborum, magni, mollitia nisi quibusdam, quo repellendus sequi totam
						voluptate. Ipsa nisi pariatur quia.
					</p>
					<h3>I wanna tell you about my skills</h3>
					<ul className={style.elements}>
						{user.skills.map((skill) => (
							<li key={skill.name} className={style.element}>
								<Progress {...skill} />
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
