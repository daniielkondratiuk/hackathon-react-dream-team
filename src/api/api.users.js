const GITHUB_URL = 'https://github.com/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/'
const FACEBOOK = 'https://www.facebook.com/'

const role = {
	teamLead: {
		_id: '1',
		content: 'Team Leader',
		color: 'danger'
	},
	frontend: {
		_id: '2',
		content: 'Front-end Developer',
		color: 'success'
	}
}

const users = [
	{
		_id: '1',
		firstName: 'Daniiel',
		lastName: 'Kondratiuk',
		about:
			'Currently I am training as a web developer at WebForse3 School in Strasbourg. During my studies, I mastered the work of HTML, CSS, Javascript, PHP, SQL. I met with WordPress, Ionic and Angular. Studied Symfony more fundamentally. Moreover, I am currently studying React on my own. I wish to find my first job as a web developer. I am dynamic, curious, Id like to get a new piece of knowledge. Sociable and easy-going. I quickly integrate into the team. I like what I am doingn my own.',
		age: 26,
		roles: [role.teamLead, role.frontend],
		avatar: '../assets/daniel/daniel.png',
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
		lastName: 'Zhelonkina',
		about:
			'I have been studying web development for about 2 years and have a strong desire to work and develop in this field.Im looking for a creative hard-skill team to work with and together get better',
		age: 16,
		roles: [role.frontend],
		avatar: '../assets/natalia/nat.png',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'natella2902/' },
			{ name: 'linkedin', url: LINKEDIN_URL + 'natalia-zhelonkina-8242421b2/' }
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
		roles: [role.frontend],
		avatar: '../assets/denis/denis.jpg',
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
		lastName: 'Tukarev',
		about:
			'Hello. I am a Front-end developer with experience in creating a SPA with React/Redux/TypeScript/HTML/CSS. In my free time, I solve problems oncodewars, delve into familiar ones and study new technologies,study C++. , I plan to study Node.js and learning English. Inthe future, I see myself as a Full-stack Developer. I am ready to consider proposals for full-time or project employment. ',
		age: 30,
		roles: [role.frontend],
		avatar: '../assets/alex/alex.png',
		socials: [
			{ name: 'github', url: GITHUB_URL + 'Oreda-Z' },
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
			'Purposeful, active, responsible, sociable, executive, stress-resistant, friendly. I have a competent speech and know how to work in a team.',
		age: 26,
		roles: [role.frontend],
		avatar: '../assets/iliya/iliya.png',
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
