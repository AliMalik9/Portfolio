import { InlineCode } from "@/once-ui/components";
import { PiFramerLogo } from "react-icons/pi";

const person = {
    firstName: 'Ali',
    lastName:  'Malik',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'UI / UX Designer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Urdu']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ali-malik-',
    },
    {
        name: 'Behance',
        icon: 'behance',
        link: 'https://www.behance.net/alimalik0',
    },
    {
        name: 'Figma',
        icon: 'figma',
        link: 'https://www.figma.com/@alimalik1',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:alijanmalik942@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>UI/UX Designer and No-code Developer</>,
    subline: <>I'm Ali, a UX / UI Designer at <InlineCode>INFOSTSTACK</InlineCode>, where I craft intuitive<br/> user experiences. Outside of work, I focus on creating personal design projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/euler'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Ali is a Lahore-based UI/UX designer with a passion for crafting intuitive and user-friendly experiences. With expertise in transforming complex challenges into simple, elegant solutions, Ali's work spans digital interfaces, interactive experiences, and the seamless integration of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'InfoStack Tech',
                timeframe: 'July 2023 - Present',
                role: 'UI / UX Designer',
                achievements: [
                    <>Applied user-centered design principles to create impactful digital experiences.</>,
                    <>Leveraged expertise in user behavior, front-end technologies, and design tools to lead successful projects.</>,
                    <>Thrived in fast-paced environments, solving complex challenges with creativity and innovation.</>,
                    <>Collaborated with cross-functional teams to develop and deliver cutting-edge products.</>,
                    <>Enhanced user engagement and satisfaction through thoughtful design and execution.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'My Studio',
                timeframe: '2021 - Present',
                role: 'Freelacer Designer & No-Code Developer',
                achievements: [
                    <>Designed professional and engaging thumbnails that boosted client engagement and click-through rates.</>,
                    <>Delivered intuitive UI/UX designs for web and mobile applications, enhancing user satisfaction and usability.</>,
                    <>Developed no-code solutions using tools like Webflow and Bubble, streamlining development for clients.</>,
                    <>Crafted memorable and impactful logo designs that strengthened brand identity for businesses.</>,
                    <>Collaborated with diverse clients to deliver a wide range of design projects, meeting tight deadlines with precision.</>
                ],
                images: [ ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'NCBA&E',
                description: <>Bachelors in Computer Sciences.</>,
            },
            {
                name: 'Punjab College',
                description: <>Intermediate in Computer Sciences.</>,
            },
            {
                name: 'Excel School',
                description: <>Matriculation in Computer Sciences.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Proficient in designing intuitive user interfaces, creating design systems, and collaborating seamlessly with Figma</>, 
                images: []
            },
            {
                title: 'Framer',
                description: <>Skilled in building interactive prototypes and responsive designs using Framer</>, 
                images: []
            },
            {
                title: 'Photoshop',
                description: <>Skilled in editing, retouching, and creating visual assets using Photoshop</>, 
                images: []
            },
            {
                title: 'Notion',
                description: <>Efficient in organizing tasks, managing projects, and creating knowledge bases with Notion</>, 
                images: []
            },
            {
                title: 'FigJam',
                description: <>Proficient in brainstorming and collaborating visually with FigJam</>, 
                images: []
            },
            {
                title: 'Figma Slides',
                description: <>Experienced in designing engaging presentations with Figma Slides</>, 
                images: []
            },
            {
                title: 'Illustrator',
                description: <>Expert in creating vector graphics, illustrations, and logo designs with Illustrator</>, 
                images: []
            },
            {
                title: 'ClickUp',
                description: <>Skilled in managing tasks, workflows, and projects efficiently using ClickUp</>, 
                images: []
            }            
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
    images: [
        { 
            src: '/images/projects/designhaven-interior-website/full.webp', 
            alt: 'image',
            width: 16,
            height: 77
        }
    ]
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };