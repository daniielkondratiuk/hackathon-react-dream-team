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
				link: '',
			}
		],
			skills: [
        		{ name: 'HTML', percent: 75},
        		{ name: 'CSS', percent: 100},
        		{ name: 'JavaScript', percent: 49},
        		{ name: 'ReactJS', percent: 60},
        		{ name: 'NodeJS', percent: 90}
        		],
	},
	{
		_id: '2',
		firstName: 'Natalia',
		lastName: 'Schermann',
		about: 'Lorem ipsum',
		age: 16,
		avatar: 'https://picsum.photos/300/300',
		socials: [
			{
				name: 'GitHub',
				link: '',
			}
		],
		skills: [
                    { name: 'HTML', percent: 95},
                    { name: 'CSS', percent: 75},
                    { name: 'JavaScript', percent: 80},
                    { name: 'ReactJS', percent: 75},
                    { name: 'NodeJS', percent: 20}
            	],
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
				link: '',
			}
		],
			skills: [
                		{ name: 'HTML', percent: 75},
                		{ name: 'CSS', percent: 100},
                		{ name: 'JavaScript', percent: 49},
                		{ name: 'ReactJS', percent: 60},
                		{ name: 'NodeJS', percent: 90}
                    ],
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
				link: '',
			}
		],
            skills: [
                        { name: 'HTML', percent: 75},
                        { name: 'CSS', percent: 100},
                        { name: 'JavaScript', percent: 49},
                        { name: 'ReactJS', percent: 60},
                        { name: 'NodeJS', percent: 90}
                    ],
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
				link: '',
			}
		],
        skills: [
                    { name: 'HTML', percent: 95},
                    { name: 'CSS', percent: 30},
                    { name: 'JavaScript', percent: 49},
                    { name: 'ReactJS', percent: 75},
                    { name: 'NodeJS', percent: 10}
                ],
	},
]

const fetchAll = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve(users), 300)
	})

export default fetchAll