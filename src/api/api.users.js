const role = {
	teamLead: {
		_id: '1',
		name: 'Тимлид',
		color: 'danger'
	},
	frontend: {
		_id: '2',
		name: 'Front-end разработчик',
		color: 'primary'
	}
}

const users = [
	{
		_id: '1',
		firstName: 'Daniiel',
		lastName: 'Kondratiuk',
		about: 'Lorem ipsum',
		age: 26,
		role: role.teamLead,
		avatar: 'https://picsum.photos/250/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
			}
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
	},
	{
		_id: '2',
		firstName: 'Natalia',
		lastName: 'Schermann',
		about: 'Lorem ipsum',
		age: 16,
		role: role.frontend,
		avatar: 'https://picsum.photos/250/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
			}
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
	},
	{
		_id: '3',
		firstName: 'Denis',
		lastName: 'Monet',
		about: 'Lorem ipsum',
		age: 36,
		role: role.frontend,
		avatar: 'https://picsum.photos/250/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
			}
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
	},
	{
		_id: '4',
		firstName: 'Alex',
		lastName: 'Defo',
		about: 'Lorem ipsum',
		age: 69,
		role: role.frontend,
		avatar: 'https://picsum.photos/250/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
			}
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
	},
	{
		_id: '5',
		firstName: 'Ilya',
		lastName: 'Targaev',
		about: 'Lorem ipsum',
		age: 26,
		role: role.frontend,
		avatar: 'https://picsum.photos/250/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
			}
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
	}
]

const getAllUsers = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve(users), 300)
	})
const getUserById = (id) =>
	new Promise((resolve) => {
		setTimeout(() => resolve(users.find((user) => user._id === id)), 300)
	})

export { getAllUsers, getUserById }
