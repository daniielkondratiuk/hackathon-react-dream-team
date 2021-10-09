const users = [
	{
		_id: '1',
		firstName: 'Daniiel',
		lastName: 'Kondratiuk',
		about: 'Lorem ipsum',
		age: 26,
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
		lastName: 'Mendeleev',
		about: 'Lorem ipsum',
		age: 43,
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
