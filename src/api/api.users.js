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
		about: 'Currently I am training as a web developer at WebForse3 School in Strasbourg. During my studies, I mastered the work of HTML, CSS, Javascript, PHP, SQL. I met with WordPress, Ionic and Angular. Studied Symfony more fundamentally. Moreover, I am currently studying React on my own. I wish to find my first job as a web developer. I am dynamic, curious, Id like to get a new piece of knowledge. Sociable and easy-going. I quickly integrate into the team. I like what I am doingn my own.',
		age: 26,
		role: role.teamLead,
		avatar: '../assets/daniel/daniel.png',
		socials: [
			{
				name: 'GitHub',
				link: ''
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
	},
	{
		_id: '2',
		firstName: 'Natalia',
		lastName: 'Zhelonkina',
		about: 'I have been studying web development for about 2 years and have a strong desire to work and develop in this field.Im looking for a creative hard-skill team to work with and together get better',
		age: 16,
		role: role.frontend,
		avatar: '../assets/natalia/nat.png',
		socials: [
			{
				name: 'GitHub',
				link: ''
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
	},
	{
		_id: '3',
		firstName: 'Denis',
		lastName: 'Monet',
		about: 'Lorem ipsum',
		age: 36,
		role: role.frontend,
		avatar: 'https://picsum.photos/200/200',
		socials: [
			{
				name: 'GitHub',
				link: ''
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
	},
	{
		_id: '4',
		firstName: 'Alex',
		lastName: 'Tukarev',
		about: 'Hello. I am a Front-end developer with experience in creating a SPA with React/Redux/TypeScript/HTML/CSS. In my free time, I solve problems oncodewars, delve into familiar ones and study new technologies,study C++. , I plan to study Node.js and learning English. Inthe future, I see myself as a Full-stack Developer. I am ready to consider proposals for full-time or project employment. ' ,
		age: 30,
		role: role.frontend,
		avatar: '../assets/alex/alex.png',
		socials: [
			{
				name: 'GitHub',
				link: ''
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
	},
	{
		_id: '5',
		firstName: 'Ilya',
		lastName: 'Targaev',
		about: 'Purposeful, active, responsible, sociable, executive, stress-resistant, friendly. I have a competent speech and know how to work in a team.',
		age: 26,
		role: role.frontend,
		avatar: '../assets/targaev/Iliya.png',
		socials: [
			{
				name: 'GitHub',
				link: 'https://github.com/ilya1910'
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
