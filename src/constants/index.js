import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  jobportal,
  crick,
  tripguide,
  threejs,
  gift,
  momcare,
  pf,
  pm,
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Project",
  },
  {
    id: "highlights",
    title: "Highlights",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Code::Blocks",
    icon: figma,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Jounior Software Engineer",
    company_name: "PearlMatrix Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2023 -May 2024",
    points: [
      "Under the guidance of senior developers, I designed and developed multiple responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap, delivering tailored solutions for various clients at PearlMatrix Solutions.",],

  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jobportal",
    description:
      "This project proposes an AI-powered CV Creation and Ranking Web Application designed to enhance and streamline the hiring process. ",
    paragraphs: [
      "The recruitment process is often ineffective and time-consuming, requiring employers to manually review a large volume of applications to identify suitable candidates. At the same time, many applicants miss valuable opportunities due to poorly structured resumes that do not align with job requirements. The lack of structured feedback further limits candidates’ ability to improve and succeed in future applications.",
      "To address these challenges, this project proposes an AI-powered CV Creation and Ranking Web Application designed to enhance and streamline the hiring process. The platform supports intelligent resume creation, automated candidate ranking, and systematic career guidance, creating value for both job seekers and employers.",
      "system Capabilities:Role-specific dashboards for job seekers, employers, counselors, and administrators , AI-assisted CV builder enabling users to create, edit, and download professional resume , Automated CV ranking and structured application tracking , Centralized job posting and candidate shortlisting workflow , Real-time messaging system enabling secure communication between users , Secure profile management with Role-Based Access Control (RBAC)"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:jobportal,
    source_code_link: "https://github.com/uthum7/jobportal",
    linkedin_link: "https://www.linkedin.com/posts/dinusha-herath-0541b92a7_ai-powered-cv-content-creation-recruitment-activity-7409019355658657792-UKJ8?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnj9AABZO40KT-Neke0YwWUDktZFg-mcPE&utm_campaign=copy_link",
    live_link: "#"
  },
  {
    name: "CrickMate",
    description:
      "Earlier, organizing cricket matches was easy, but today busy lifestyles make it difficult to find players, teams, and grounds. CrickMate is a mobile app that connects players, teams, and ground owners in one platform.",
    paragraphs: [
      "Earlier, especially in villages, it was easy to gather players and form two full cricket teams. Cricket was a natural part of everyday life.Today, with busy schedules and modern lifestyles, finding available players, connecting with nearby teams, and even locating suitable grounds has become a real challenge. Although the passion for cricket remains strong, organizing a match is no longer simple.",
      "To address this problem, I created CrickMate  a mobile application designed to connect players, teams, and ground owners through a structured, location-based digital platform.",
    ],
    tags: [
      {
        name: "React Native (Expo), TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js, Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: crick,
    source_code_link: "https://github.com/DinushaHerath/crickmate-app",
    linkedin_link: "https://www.linkedin.com/posts/dinusha-herath-0541b92a7_crickmate-reactnative-expo-activity-7409429111284281345-fMBb?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEnj9AABZO40KT-Neke0YwWUDktZFg-mcPE&utm_campaign=copy_link",
  },
  {
    name: "MommyCare",
    description:
      "Smart maternity and baby care platform with role-based access for users like mothers and doctors.",
    paragraphs: [
      " Building a smart maternity and baby care platform designed to support mothers and healthcare professionals through a digital, data-driven experience. The system features secure login and role-based access for mothers, doctors, and administrators. It includes AI-powered predictions for health insights, real-time dashboards for progress tracking, and a digital vaccination book to manage immunization records conveniently. This platform enhances accessibility, improves communication, and modernizes baby care and health record-keeping through an integrated digital ecosystem.",
    ],
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js + Express",
        color: "pink-text-gradient",
      },
    ],
    image:momcare,
   
    source_code_link: "https://github.com/Pramudi02/MommyCare",
  },
  {
    name: "Giftee",
    description:
      "Developed a personalized gift e-commerce web app using Laravel with features like product listing, user authentication, cart, and order management",
    paragraphs: [
      "Giftee is a full-featured e-commerce platform specializing in personalized gifts for all occasions. The platform allows customers to browse through a diverse catalog of customizable products, from personalized mugs and photo frames to custom-designed clothing and accessories.",
      "Built using Laravel framework and PHP, the application provides robust user authentication, secure payment processing, and comprehensive order management. Customers can create accounts, save favorite items, manage shopping carts, and track their orders in real-time. The admin panel offers complete control over product listings, inventory management, and customer order fulfillment.",
      "The platform features a responsive design that works seamlessly across all devices, an intuitive product search and filtering system, and a streamlined checkout process. With MySQL database integration, the system efficiently handles large product catalogs while maintaining fast performance and reliable data management."
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: gift,
    
    source_code_link: "https://github.com/DinushaHerath/ecomweb",
  },
  {
    name: "PortFolio",
    description:
      "Not just a portfolio - a reflection of my journey, skills, and vision. Built with purpose, detail, and a love for great experiences.",
    paragraphs: [
      "This portfolio represents more than just a collection of projects; it's a carefully crafted digital experience that showcases my technical capabilities, creative vision, and attention to detail. Every element has been thoughtfully designed to create an engaging, memorable user experience.",
      "Built with cutting-edge technologies including React.js for dynamic interactivity, Tailwind CSS for modern styling, and Three.js for stunning 3D graphics and animations, the portfolio demonstrates proficiency in contemporary web development practices. The responsive design ensures a seamless experience across all devices and screen sizes.",
      "The project features smooth animations powered by Framer Motion, interactive 3D elements that respond to user interactions, and a carefully curated color scheme that balances professionalism with creativity. Each section is optimized for performance while maintaining visual appeal, reflecting a deep understanding of both technical excellence and user experience design."
    ],
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    
    image: pf,
    source_code_link: "https://github.com/DinushaHerath/portfolio",
  },
   {
    name: "Client Website Development – PMS",
    description:
      "As a Frontend Developer under senior guidance, I developed multiple responsive and interactive websites using HTML, CSS, JavaScript, and Bootstrap. These sites were tailored for different clients served by Pearl Matrix Solutions.",
    paragraphs: [
      "During my internship at Pearl Matrix Solutions, I had the opportunity to work on real-world client projects, developing custom websites from concept to deployment. Each project required understanding unique client requirements, translating business needs into functional web interfaces, and delivering pixel-perfect designs.",
      "Working under the mentorship of senior developers, I gained hands-on experience with industry-standard tools and best practices. The projects involved creating responsive layouts using Bootstrap framework, implementing interactive features with vanilla JavaScript, and ensuring cross-browser compatibility. I learned to write clean, maintainable code while adhering to project timelines and client specifications.",
      "This experience significantly enhanced my practical skills in frontend development, including debugging, version control with Git, and collaborative development workflows. The exposure to diverse client projects taught me adaptability, professional communication, and the importance of user-centered design in delivering successful web solutions."
    ],
    tags: [
      {
        name: "HTML, CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pm,
  
  }
];

export { services, technologies, experiences, testimonials, projects };