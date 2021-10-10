const GITHUB_URL = 'https://github.com/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/'
const FACEBOOK = 'https://www.facebook.com/'

const role = {
	teamLead: {
		_id: '1',
		content: 'Тимлид',
		color: 'danger'
	},
	frontend: {
		_id: '2',
		content: 'Front-end разработчик',
		color: 'success'
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
		avatar: 'https://picsum.photos/200/200',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'daniielkondratiuk' },
			{ name: 'linkedin', url: LINKEDIN_URL + 'daniel-kondratiuk-5b51551a2/' },
			{ name: 'facebook', url: FACEBOOK + 'danielkondratiuk95' }
		],
		skills: [
			{ name: 'HTML', percent: 95 },
			{ name: 'CSS', percent: 30 },
			{ name: 'JavaScript', percent: 49 },
			{ name: 'ReactJS', percent: 75 },
			{ name: 'NodeJS', percent: 10 }
		],
		favorite: false
	},
	{
		_id: '2',
		firstName: 'Natalia',
		lastName: 'Schermann',
		about: 'Lorem ipsum',
		age: 16,
		role: role.frontend,
		avatar: 'https://picsum.photos/200/200',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'natella2902/' },
			{ name: 'linkedin', url: LINKEDIN_URL + 'natalia-zhelonkina-8242421b2/' },
			{ name: 'facebook', url: FACEBOOK + 'denis.saberov.37' }
		],
		skills: [
			{ name: 'HTML', percent: 95 },
			{ name: 'CSS', percent: 30 },
			{ name: 'JavaScript', percent: 49 },
			{ name: 'ReactJS', percent: 75 },
			{ name: 'NodeJS', percent: 10 }
		],
		favorite: false
	},
	{
		_id: '3',
		firstName: 'Denis',
		lastName: 'Saberov',
		about:
			'Hello, my name is Denis, Im a JavaScript developer. I have knowledge of such technologies as HTML&CSS/JavaScript/React/Redux/Webpack and some basic knowledge of Node.js.Every day I do my best to improve my skills.',
		age: 26,
		role: role.frontend,
		avatar: '../assets/targaev/denisSaberov.jpg',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'SetRedEyes' },
			{ name: 'linkedin', url: LINKEDIN_URL + 'setredeyes/' },
			{ name: 'facebook', url: FACEBOOK + 'denis.saberov.37' }
		],
		skills: [
			{ name: 'HTML', percent: 95 },
			{ name: 'CSS', percent: 30 },
			{ name: 'JavaScript', percent: 49 },
			{ name: 'ReactJS', percent: 75 },
			{ name: 'NodeJS', percent: 10 }
		],
		favorite: false
	},
	{
		_id: '4',
		firstName: 'Alex',
		lastName: 'Defo',
		about: 'Lorem ipsum',
		age: 69,
		role: role.frontend,
		avatar: 'https://picsum.photos/200/200',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'SetRedEyes' },
			{ name: 'linkedin', url: LINKEDIN_URL + 'aleksey-tukarev/' }
		],
		skills: [
			{ name: 'HTML', percent: 95 },
			{ name: 'CSS', percent: 30 },
			{ name: 'JavaScript', percent: 49 },
			{ name: 'ReactJS', percent: 75 },
			{ name: 'NodeJS', percent: 10 }
		],
		favorite: false
	},
	{
		_id: '5',
		firstName: 'Ilya',
		lastName: 'Targaev',
		about:
			'Целеустремленный, активный, ответственный, коммуникабельный, исполнительный, стрессоустойчивый, доброжелательный. Владею грамотной речью и умею работать в команде.',
		age: 26,
		role: role.frontend,
		avatar: '../assets/targaev/photo-1.jpeg',
		socials: [
			{
				name: 'github',
				url: GITHUB_URL + 'ilya1910'
			}
		],
		skills: [
			{ name: 'HTML', percent: 95 },
			{ name: 'CSS', percent: 30 },
			{ name: 'JavaScript', percent: 49 },
			{ name: 'ReactJS', percent: 75 },
			{ name: 'NodeJS', percent: 10 }
		],
		favorite: false
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
