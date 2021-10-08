import React from 'react'
import {useHistory} from 'react-router-dom'
const UsersList = ({users}) => {
	const history = useHistory()
	const handleClick = (id) => {
		history.push(id)
	}

	return (
		<div className='d-flex justify-content-around flex-wrap'>
			<View users={users} handleClick={handleClick}/>
		</div>
	)
}

export default UsersList

const View = ({users, handleClick}) => users.map(user=> {
		return (
			<div key={user._id} className="card my-2" >
				<img className="card-img-top" src={user.avatar} alt="Card ok cap"/>
				<div className="card-body">
					<h5 className="card-title">{user.firstName} {user.lastName}</h5>
				</div>
				<button onClick={()=>handleClick(user._id)} className="btn btn-primary d-block w-100">View Profile</button>
				<div className='d-flex justify-content-around'>
					<ol>
						{user.skills.map(skill=><li key={skill}>{skill}</li>)}
					</ol>
					<ul>
						{user.socials.map(social=><li key={social.name}>{social.name}</li>)}
					</ul>
				</div>
			</div>
		)
	})