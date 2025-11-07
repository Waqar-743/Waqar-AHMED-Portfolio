import React from 'react';
import type { Experience, Project, Testimonial, Skill, Education, Certificate } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Waqar-743',
  linkedin: 'https://www.linkedin.com/in/waqar-ahmed-821947389/',
  twitter: 'https://twitter.com/waqarahmed',
  instagram: 'https://www.instagram.com/waqaru_ahmed/',
  codepen: 'https://codepen.io/waqarahmed',
};

export const EMAIL = 'contactwithwaqarahmed@gmail.com';

export const SKILLS = [
  'AI Engineering',
  'WordPress Design',
  'Front-end Development',
  'HTML, CSS & JavaScript',
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Responsive Design',
];

// FIX: Moved icon definitions before their usage to prevent block-scoped variable errors.
// Icons for Skills
export const LayoutIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <title>Layout</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);

export const CodeIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <title>Code</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const PenToolIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <title>Pen Tool</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" />
    </svg>
);

export const MegaphoneIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <title>Megaphone</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.104 9.168-5.182C17.927 1.01 17.022 0 16.002 0H11a1 1 0 00-1 1v.882z" />
    </svg>
);

export const ChartBarIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <title>Chart Bar</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export const SKILLS_TABS_DATA: Skill[] = [
  {
    name: 'WordPress Designing',
    description: 'Designing high-converting WordPress landing pages that meet with your business goals.',
    score: 90,
    icon: <LayoutIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
  {
    name: 'WordPress Development',
    description: 'I develop custom features and functionalities to enhance your website’s performance.',
    score: 81,
    icon: <CodeIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
  {
    name: 'Graphics Designing',
    description: 'I create eye-catching logos, engaging thumbnails, and vibrant social media post designs.',
    score: 80,
    icon: <PenToolIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
  {
    name: 'Digital Marketing',
    description: 'I implement smart strategies to grow your online presence with effective marketing tactics and targeted marketing campaigns.',
    score: 50,
    icon: <MegaphoneIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
  {
    name: 'Technical SEO',
    description: 'Helping your site perform better by improving structure, speed, and visibility in search engines.',
    score: 85,
    icon: <ChartBarIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
  {
    name: 'Custom Coding',
    description: 'I write website content that grabs attention, conveys your message effectively, and drives higher engagement and conversions.',
    score: 83,
    icon: <CodeIcon className="w-8 h-8 mb-4 text-light-accent dark:text-brand-accent" />,
  },
];


export const EXPERIENCE_DATA: Experience[] = [
  {
    company: 'Freelancer',
    role: 'WordPress Designer',
    duration: 'Aug 2023 - Present',
    duties: [
      'Design and develop custom WordPress websites for clients on platforms like Fiverr, Upwork, and LinkedIn.',
      'Create fast, responsive, and easy-to-use websites that match each brand\'s identity and goals.',
      'Implement on-page and technical SEO strategies to improve website visibility and search engine rankings.',
    ],
  },
  {
    company: 'The Freelance Bubble',
    role: 'WordPress Design & SEO Intern',
    duration: 'Jun 2023 - Aug 2023',
    duties: [
      'Assisted in the development and maintenance of various client websites using WordPress and its page builders.',
      'Conducted keyword research and helped implement on-page SEO content updates.',
      'Collaborated with the team to ensure websites were responsive, functional, and met client requirements.',
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
    {
        institution: 'National University of Technology (NUTECH)',
        degree: 'Bachelor of Science in Artificial Intelligence',
        duration: '2025 - Present',
        details: [
            'Relevant coursework in Data Structures, Algorithms, Machine Learning, and Web Development.',
            'Engaged in various projects combining AI concepts with practical web applications.',
            'Maintained a strong academic record while freelancing.'
        ]
    },
    {
        institution: 'Punjab Group of Colleges',
        degree: 'Intermediate in Pre-Engineering',
        duration: '2022 - 2024',
        details: [
            'Developed a strong foundation in mathematics, physics, and chemistry.',
            'Participated in science fairs and coding competitions.'
        ]
    }
];

export const CERTIFICATE_DATA: Certificate[] = [
    {
        name: 'Certified WordPress Designer',
        issuer: 'IDM Pakistan',
        date: 'Issued May 2025',
        link: '#'
    },
    {
        name: 'HTML, CSS, and Javascript for Web Developers',
        issuer: 'University of Michigan (Coursera)',
        date: 'Issued Feb 2025',
        link: 'https://coursera.org/share/b93f681172fee474b812e088cf2db2e8'
    },
    {
        name: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: 'Issued May 2023',
        link: 'https://www.freecodecamp.org/certification/waqar-ahmed/responsive-web-design'
    },
    {
        name: 'Search Engine Optimization (SEO)',
        issuer: 'IDM Pakistan',
        date: 'Issued May 2025',
        link: '#'
    },
    {
        name: 'Digital Marketing',
        issuer: 'IDM Pakistan',
        date: 'Issued May 2025',
        link: '#'
    },
    {
        name: 'AI Engineer',
        issuer: 'IBM',
        date: 'Coming Soon 2025'
    }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Financial Landing Page',
    description: 'A professional and trustworthy landing page for a financial consulting firm. The design focuses on clarity, building user trust, and converting visitors into clients. It includes sections for services, expert testimonials, and a secure contact form. Built using WordPress, it is fully responsive and SEO-friendly.',
    tags: ['WordPress', 'Landing Page', 'Finance', 'Corporate Design', 'Lead Generation'],
    images: [
        'https://lh3.googleusercontent.com/d/1XFd0pCSMCVkwuOFokNiXrrsp-QATm5Fd'
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'GYM Landing Page',
    description: 'A high-energy, responsive landing page for a fitness center, designed to boost memberships. It features a clean, modern layout, compelling call-to-action buttons, class schedules, and trainer profiles. Built with WordPress and optimized for lead generation.',
    tags: ['WordPress', 'Landing Page', 'Fitness', 'Lead Generation', 'Responsive Design'],
    images: [
        'https://lh3.googleusercontent.com/d/1F6wNKvT3i5RCW0NSujfPdDC4feusDKha'
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'Ecommerce Store',
    description: 'A fully functional e-commerce store built with modern technologies. It features product listings, a shopping cart, secure checkout, and an admin panel for managing products and orders. The design is clean, user-friendly, and fully responsive.',
    tags: ['WordPress', 'WooCommerce', 'E-commerce', 'Payment Gateway', 'UI/UX'],
    images: [
        'https://lh3.googleusercontent.com/d/145VDL0JmgU9Ugp6SWu91nwBqgBP8kJzM'
    ],
    github: 'https://waqar-743.github.io/Skardu-Organic-Store/',
    live: 'https://waqar-743.github.io/Skardu-Organic-Store/',
  },
  {
    title: 'Portfolio',
    description: 'A clean, modern, and fully responsive personal portfolio website (the one you are currently viewing) built to showcase skills, projects, and professional experience. It features a dynamic theme switcher, smooth animations, and an interactive UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [
        'https://lh3.googleusercontent.com/d/1IcQ9jsQifyFlyz40g-Znjc8NKcg0DzYb'
    ],
    github: 'https://github.com/Waqar-743',
    live: '/',
  },
  {
    title: 'Personal Portfolio v1',
    description: 'My first portfolio website built with simple HTML, CSS, and JavaScript. It showcases my early projects and skills as I was starting my journey in web development. A nostalgic look at where it all began!',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    images: ['https://lh3.googleusercontent.com/d/1uXyprL_Ao7MjPM1pUyejc2Rf9BHsMJwG'],
    github: 'https://github.com/bismaraza/v1',
    live: '',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: 'Waqar is a true professional. His technical skills and dedication to our project were outstanding. He delivered a high-quality product on time and was a pleasure to work with.',
    name: 'John Doe',
    title: 'CEO',
    company: 'Tech Solutions Inc.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    quote: 'Working with Waqar was a game-changer for our web presence. His expertise in frontend development and eye for design resulted in a website that exceeded all our expectations.',
    name: 'Jane Smith',
    title: 'Marketing Director',
    company: 'Innovate Co.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: 'The communication throughout the project was excellent. Waqar was always responsive and proactive in suggesting improvements. I highly recommend him.',
    name: 'Samuel Lee',
    title: 'Project Manager',
    company: 'Creative Minds',
    image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
  {
    quote: "I was impressed by Waqar's ability to quickly grasp complex requirements and translate them into a functional and elegant user interface. An exceptional developer.",
    name: 'Emily White',
    title: 'Lead Designer',
    company: 'Design First',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
  },
   {
    quote: 'Waqar not only has strong technical abilities but also a great attitude. He integrated seamlessly with our team and contributed significantly to our success.',
    name: 'Michael Brown',
    title: 'CTO',
    company: 'Future Forward',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
  },
];

export const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
export const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
export const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
export const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
export const CodepenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><line x1="2" y1="15.5" x2="12" y2="8.5"></line><line x1="22" y1="15.5" x2="12" y2="8.5"></line></svg>
);
export const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <title>Download</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// Icons for Experience Tabs
// FIX: Changed return type from JSX.Element to React.ReactElement to fix "Cannot find namespace 'JSX'" error.
export const PaletteIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5.67-1.5 1.5S5.67 15 6.5 15s1.5-.67 1.5-1.5S7.33 12 6.5 12zm3-4c-.83 0-1.5.67-1.5 1.5S8.67 11 9.5 11s1.5-.67 1.5-1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3-4c-.83 0-1.5.67-1.5 1.5S16.67 7 17.5 7s1.5-.67 1.5-1.5S18.33 4 17.5 4z"/></svg>
);

// FIX: Changed return type from JSX.Element to React.ReactElement to fix "Cannot find namespace 'JSX'" error.
export const ServerIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path></svg>
);

// FIX: Changed return type from JSX.Element to React.ReactElement to fix "Cannot find namespace 'JSX'" error.
export const GraduationCapIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"></path></svg>
);

// FIX: Changed return type from JSX.Element to React.ReactElement to fix "Cannot find namespace 'JSX'" error.
export const CertificateIcon = ({ className }: {className?: string}): React.ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.3l-9 4.34V11c0 5.25 3.6 10.13 8.53 11.58.47.14.97.14 1.44 0C17.4 21.13 21 16.25 21 11V5.64L12 1.3zm-1.01 15.1l-3.54-3.54 1.41-1.41 2.12 2.12 4.95-4.95 1.41 1.41-6.36 6.37z"></path></svg>
);