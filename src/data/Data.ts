interface User {
    name: string
    nameWithoutSuffix: string
    role: string
    nickname: string
    ed: string
    about: string
    orgs: Organization[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    experience: Experience[]
    contact_links: ContactLink[]
}

interface Organization {
    name: string
    role: string
    logo: string
    href: string
}

interface Education {
    name: string
    href: string
    school: string
    timespan: string
}

interface Skill {
    name: string
    icon: string
    site: string
}

interface Experience {
    role: string
    timespan: string
    href: string
    external_links: ExternalLink[]
    description: string
}

interface Project {
    role: string
    timespan: string
    href: string
    short_description: string
    external_links: ExternalLink[]
    tags: string[]
    description: string
}

interface ExternalLink {
    label: string
    url: string
}

interface ContactLink {
    title: string
    text: string
    href: string
    ctaText: string
    icon: string
}

let baseIconsURL = 'https://cdn.simpleicons.org';


export let user: User = {
    name: "Jeya Murugan L ",
    nameWithoutSuffix: "Jeya Murugan",
    role: "Full-Stack Developer, Technologist & Community Enthusiast",
    nickname: "Ajay",
    ed: "Technologist, Full Stack Developer, Community Enthusiast",
    about: "Hey there! 👋 I'm a Full-stack web developer, passionate about innovation and build real-time solutions, and exploring the ethical dimensions of technology. With experience at Alphabit Technologies as Full Stack Developer Intern and now exploring and building open source web applications, I also serve as the Chapter Leader for U&I Trust in India, driving impactful change in child education. I'm always ready for new adventures, whether it's tech, food, cars, or travel. 🍵💻",
    orgs: [],
    education: [
        {
            name: "Bachelor of Engineering (Computer Science)",
            href: "https://cahcet.in/",
            school: "C Abdul Hakeem College  of Engineering & Technology",
            timespan: "2020 - 2024"
        },
    ],
    skills: [
        {
            name: 'Python',
            icon: `${baseIconsURL}/python`,
            site: 'https://python.org'
        },
        {
            name: 'Svelte',
            icon: `${baseIconsURL}/svelte`,
            site: 'https://svelte.dev'
        },
        {
            name: 'Java',
            icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
            site: 'https://www.java.com'
        },
        {
            name: 'Javascript',
            icon: `${baseIconsURL}/javascript`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'Django',
            icon: `${baseIconsURL}/django`,
            site: 'https://www.djangoproject.com'
        },
        {
            name: 'MySQL',
            icon: `${baseIconsURL}/mysql`,
            site: 'https://www.mysql.com'
        },
        {
            name: 'React',
            icon: `${baseIconsURL}/react`,
            site: 'https://www.react.dev'
        },
        {
            name: 'Version Control (Git)',
            icon: `${baseIconsURL}/git`,
            site: 'https://git-scm.com/'
        },
        {
            name: 'GCP',
            icon: `${baseIconsURL}/googlecloud`,
            site: 'https://www.cloud.google.com'
        },
        {
            name: 'Node',
            icon: `${baseIconsURL}/npm`,
            site: 'https://www.npmjs.com/'
        },
        {
            name: 'HTML5',
            icon: `${baseIconsURL}/html5`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
            name: 'CSS',
            icon: `${baseIconsURL}/css3`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },

    ],
    projects: [
        {
            role: "Developer",
            href: "https://github.com/sgc-cahcet/revibe-2024",
            timespan: "April 2024",
            short_description: "Svelte Web Applications for Community Event Management",
            external_links: [
                {
                    url: 'https://github.com/sgc-cahcet/revibe-2024',
                    label: 'Repo Link'
                },
                {
                    url: 'https://revibe24.pages.dev/',
                    label: 'Revibe 2024'
                }
            ],
            tags: ['Svelte', 'Tailwindcss', 'UI Design', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
            description: "Created a Complete Event Management web applications links named <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://revibe.in.net'>Revibe Event</a> for a College Event with efficient web client and server optimization using several frameworks packages",
        },

        {
            role: "Developer",
            href: "https://github.com/codewithmejeya/VirtualMouseForPhysicallyChallengedPerson",
            timespan: "March 2024",
            short_description: "Virtual Mouse for Physically Challenged Person",
            external_links: [
                {
                    url: 'https://github.com/codewithmejeya/VirtualMouseForPhysicallyChallengedPerson',
                    label: 'Repo Link'
                },
                {
                    url: 'https://github.com/codewithmejeya/VirtualMouseForPhysicallyChallengedPerson',
                    label: 'Virtual Mouse'
                }
            ],
            tags: ['Python', 'Media pipe', 'Open CV', 'PyAutoGUI', ],
            description: "The virtual mouse is a python-based project that uses the MediaPipe library to detect hand gestures and control the mouse cursor. The project is designed to help physically challenged people who have difficulty using a physical mouse. The project uses the MediaPipe library to detect hand gestures and control the mouse cursor. The project is designed to help physically challenged people who have difficulty using a physical mouse. The project uses the MediaPipe library to detect hand gestures and control the mouse cursor.",
        },
        {
            role: "Developer",
            href: "https://github.com/codewithmejeya/OnlineBloodBank",
            timespan: "January 2024",
            short_description: "Online Blood Bank Management System",
            external_links: [
                {
                    url: 'https://github.com/codewithmejeya/OnlineBloodBank',
                    label: 'Repo Link'
                },
                {
                    url: 'https://github.com/codewithmejeya/OnlineBloodBank',
                    label: 'Online Blood Bank'
                }
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'XAMPP', 'PHP', 'MySQL'],
            description: "The Online Blood Bank Management System is a web-based application that is designed to store, process, retrieve, and analyze information concerned with the administrative and inventory management within a blood bank. The system is designed to help blood banks manage their inventory and provide a platform for donors to register and donate blood. The system is designed to help blood banks manage their inventory and provide a platform for donors to register and donate blood. The system is designed to help blood banks manage their inventory and provide a platform for donors to register and donate blood.",
        },
    ],
    experience: [
                {
            role: "Full-Stack Developer Intern @Alphabit Technologies",
            href: "https://alphabittechnologies.com/",
            timespan: " Jan. 2024 - March 2024",
            external_links: [
                {
                    url: 'https://alphabittechnologies.com/',
                    label: 'Website'
                },
            ],
            description: `
                • Designed and developed responsive web applications using ReactJS and TailwindCSS, ensuring a seamless user experience across various devices and browsers. Focused on delivering high-quality, accessible designs.  <br > <br >
                • Debugged and optimized front-end code, resolving issues to enhance application performance, usability, and overall user experience. `
        },

    ],
    contact_links: [
        {
            title: "Mail",
            text: "lsjeyamurugan@gmail.com",
            href: "mailto:lsjeyamurugan@gmail.com",
            ctaText: "Contact",
            icon: "<svg class='h-11 w-11 text-gray-900 dark:text-gray-300' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' stroke-linecap='round' stroke-linejoin='round' /> </svg>"
        },

        {
            title: "LinkedIn",
            text: "linkedin.com/in/jeyamuruganl/",
            href: "https://www.linkedin.com/in/jeyamuruganl/",
            ctaText: "Connect!",
            icon: "<i class='text-5xl fa-brands fa-linkedin text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Instagram",
            text: "instagram.com/mr_a_j__a_y",
            href: "https://www.instagram.com/mr_a_j__a_y/",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-instagram text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "GitHub",
            text: "github.com/codewithmejeya",
            href: "https://github.com/codewithmejeya",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        },

    ]

}
