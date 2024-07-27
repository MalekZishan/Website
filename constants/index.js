import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import { Barber, home, jeynit, pinstop, Whinlyess } from "@/public";

const navLinks = [
   {
      id: "about",
      title: "About",
   },
   {
      id: "work",
      title: "Work",
   },
   {
      id: "skills",
      title: "Skills",
   },
   {
      id: "projects",
      title: "Projects",
   },
   {
      id: "contact",
      title: "Contact",
   },
];

const services = [
   // {
   // 	title: "Full Stack Developer",
   // 	icon: web
   // },
   {
      title: "Frontend Developer",
      icon: <FrontendIcon />,
   },
   {
      title: "Leadership",
      icon: <LeaderShipIcon />,
   },
   {
      title: "Problem Solving",
      icon: <ProblemSolvingIcon />,
   },
   {
      title: "Freelancer",
      icon: <FreelancerIcon />,
   },
   // {
   // 	title: "Backend Developer",
   // 	icon: backend
   // }
   // {
];

const technologies = {
   languages: [
      {
         name: "HTML5",
         icon: "/assets/tech/html5.svg",
         link: "https://html.spec.whatwg.org/multipage/",
      },
      {
         name: "CSS3",
         icon: "/assets/tech/css3.svg",
         link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      {
         name: "JavaScript",
         icon: "/assets/tech/javascript.svg",
         link: "https://262.ecma-international.org/",
      },
      {
         name: "TypeScript",
         icon: "/assets/tech/typescript.svg",
         link: "https://www.typescriptlang.org/",
      },
      {
         name: "C",
         icon: "/assets/tech/c.svg",
         link: "https://en.cppreference.com/w/c",
      },
      {
         name: "Java",
         icon: "/assets/tech/java.svg",
         link: "https://www.java.com/en/",
      },
      {
         name: "Python",
         icon: "/assets/tech/python.svg",
         link: "https://www.python.org/",
      },
      {
         name: "PHP",
         icon: "/assets/tech/php.png",
         link: "https://www.php.net/",
      },
   ],
   frameworks: [
      {
         name: "Next.js",
         icon: "/assets/tech/nextjs.svg",
         link: "https://nextjs.org/",
      },
      {
         name: "TailwindCSS",
         icon: "/assets/tech/tailwindcss.svg",
         link: "https://tailwindcss.com/",
      },

      {
         name: "Flutter",
         icon: "/assets/tech/flutter.svg",
         link: "https://flutter.dev/",
      },
   ],
   libraries: [
      {
         name: "React",
         icon: "/assets/tech/react.svg",
         link: "https://react.dev/",
      },
      {
         name: "Three.js",
         icon: "/assets/tech/threejs.svg",
         link: "https://threejs.org/",
      },
      {
         name: "Styled-Components",
         icon: "/assets/tech/styled-components.png",
         link: "https://styled-components.com/",
      },
   ],
   tools: [
      {
         name: "Git",
         icon: "/assets/tech/git.svg",
         link: "https://git-scm.com/",
      },
      {
         name: "Github",
         icon: "/assets/icons/github.svg",
         link: "https://github.com/",
      },
      {
         name: "Postman",
         icon: "/assets/tech/postman.svg",
         link: "https://www.postman.com/",
      },
      {
         name: "Figma",
         icon: "/assets/tech/figma.svg",
         link: "https://www.figma.com/",
      },
      {
         name: "Docker",
         icon: "/assets/tech/docker.svg",
         link: "https://www.docker.com/",
      },
   ],
   environments: [
      {
         name: "Node.js",
         icon: "/assets/tech/nodejs.svg",
         link: "https://nodejs.org/en",
      },
   ],
   databases: [
      {
         name: "MongoDB",
         icon: "/assets/tech/mongodb.svg",
         link: "https://www.mongodb.com/",
      },
      {
         name: "Firebase",
         icon: "/assets/tech/firebase.svg",
         link: "https://firebase.google.com/",
      },
      {
         name: "MySQL",
         icon: "/assets/tech/my-sql.png",
         link: "https://www.mysql.com/",
      },
   ],
};

const experiences = [
   //  {
   //     title: "Frontend Developer",
   //     company_name: "Tech Lead at GDSC MVJCE",
   //     iconBg: "#E6DEDD",
   //     date: "July 2023 - Present",
   //     points: [
   //        "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
   //        "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
   //        "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
   //        "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
   //     ],
   //  },
   {
      title: "React Native Developer",
      company_name: "Aminsofttech",
      icon: "/assets/amin.png",
      iconBg: "#E6DEDD",
      date: "May 2022 - Presets",
      points: [
         "Developing and maintaining  applications using React Native and other related technologies.",
         "I wield frameworks like React Native with precision, crafting seamless portals (apps) that connect realms (users) across the digital universe. As a seasoned React Native developer, I bring hands-on experience in building cross-platform mobile applications.",
         " I bring hands-on experience in building cross-platform mobile applications. I excel in leveraging the React Native framework to deliver robust, scalable, and user-friendly solutions.",
         "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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

// const projects = [
//    {
//       name: "FigPro",
//       description:
//          "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
//       tags: [
//          {
//             name: "typescript",
//             color: "blue-text-gradient",
//          },
//          {
//             name: "next.js",
//             color: "green-text-gradient",
//          },
//          {
//             name: "tailwindcss",
//             color: "pink-text-gradient",
//          },
//          {
//             name: "fabricjs",
//             color: "orange-text-gradient",
//          },
//          {
//             name: "liveblocks",
//             color: "yellow-text-gradient",
//          },
//       ],
//       image: "/assets/projects/fig-pro.png",
//       source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
//       deployed_link: "https://fig-pro-github.vercel.app",
//    },
//    {
//       name: "GDSC Website",
//       description:
//          "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
//       tags: [
//          {
//             name: "next.js",
//             color: "blue-text-gradient",
//          },
//          {
//             name: "styled-components",
//             color: "green-text-gradient",
//          },
//          {
//             name: "three.js",
//             color: "pink-text-gradient",
//          },
//          {
//             name: "prisma",
//             color: "orange-text-gradient",
//          },
//          {
//             name: "framer-motion",
//             color: "yellow-text-gradient",
//          },
//       ],
//       image: "/assets/projects/gdsc-website.png",
//       source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
//       deployed_link: "https://gdscmvjce.tech/",
//    },
//    {
//       name: "Facility Management System",
//       description:
//          "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
//       tags: [
//          {
//             name: "typescript",
//             color: "blue-text-gradient",
//          },
//          {
//             name: "react",
//             color: "green-text-gradient",
//          },
//          {
//             name: "tailwindcss",
//             color: "pink-text-gradient",
//          },
//          {
//             name: "node.js",
//             color: "orange-text-gradient",
//          },
//          {
//             name: "tanstack/react-query",
//             color: "yellow-text-gradient",
//          },
//       ],
//       image: "/assets/projects/facility-manager.png",
//       source_code_link: "https://github.com/Shivam-Sharma-1/Facility-Management-System",
//       deployed_link: "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
//    },
//    // {
//    //   name: "Netflix Clone",
//    //   description:
//    //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
//    //   tags: [
//    //     {
//    //       name: "next.js",
//    //       color: "blue-text-gradient",
//    //     },
//    //     {
//    //       name: "typescript",
//    //       color: "green-text-gradient",
//    //     },
//    //     {
//    //       name: "tailwindcss",
//    //       color: "pink-text-gradient",
//    //     },
//    //     {
//    //       name: "mongodb",
//    //       color: "orange-text-gradient",
//    //     },
//    //   ],
//    //   image: "/assets/projects/netflix-clone.png",
//    //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
//    //   deployed_link: "https://netflix-clone12345.vercel.app",
//    // },
//    // {
//    //   name: "Van-Life",
//    //   description:
//    //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
//    //   tags: [
//    //     {
//    //       name: "react",
//    //       color: "blue-text-gradient",
//    //     },
//    //     {
//    //       name: "mirage.js",
//    //       color: "green-text-gradient",
//    //     },
//    //     {
//    //       name: "firebase-firestore",
//    //       color: "pink-text-gradient",
//    //     },
//    //   ],
//    //   image: "/assets/projects/vanlife.png",
//    //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
//    //   deployed_link: "https://myvanlife.netlify.app",
//    // },
//    // {
//    // 	name: "Spooky-Run",
//    // 	description:
//    // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
//    // 	tags: [
//    // 		{
//    // 			name: "html5",
//    // 			color: "blue-text-gradient"
//    // 		},
//    // 		{
//    // 			name: "css3",
//    // 			color: "green-text-gradient"
//    // 		},
//    // 		{
//    // 			name: "javascript",
//    // 			color: "pink-text-gradient"
//    // 		}
//    // 	],
//    // 	image: "/assets/projects/spooky-run.png",
//    // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
//    // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
//    // }
// ];
const projects = [
   {
      name: "Whinnleys",
      description:
         "Cross  platform  Application that allows users to search, book, and manage dog and mange booking tracking  rentals from various driver, providing a convenient and efficient solution for transportation needs.",
      tags: [
         {
            name: "React Native",
            color: "blue-text-gradient",
         },
         {
            name: "NodeJS",
            color: "green-text-gradient",
         },
         {
            name: "Firebase",
            color: "pink-text-gradient",
         },
      ],
      image: Whinlyess,
      source_code_link: "https://github.com/",
   },
   {
      name: "JAYNIT",
      description:
         "Cross  platform  Application that allows users to Make Group as well user can do post like what kind of problem facing like that's or as well this project i did add chatgpt with open api or also i did make like user can chat one to one or as well user can make group chat.",
      tags: [
         {
            name: "React Native",
            color: "blue-text-gradient",
         },
         {
            name: "Firebase",
            color: "#6d906d-text-gradient",
         },
         {
            name: "NodeJS",
            color: "pink-text-gradient",
         },
      ],
      image: jeynit,

      source_code_link: "https://play.google.com/store/apps/details?id=com.jeynit.App&hl=ta&gl=US",
   },
   {
      name: "Trim It",
      description:
         "Cross  platform  Application that Here is 2 Flow 1 Barber or 2 Customer . For the Customer can find the nearby barber shope or as well as customer can do booking like that or do payment like that.For the Barber  can accept customer booking or track like that or as well Barber can do chat to the customer.",
      tags: [
         {
            name: "React Native",
            color: "blue-text-gradient",
         },
         {
            name: "NodeJs",
            color: "green-text-gradient",
         },
         {
            name: "Stripe",
            color: "pink-text-gradient",
         },
         {
            name: "Firebase",
            color: "#d0203d",
         },
      ],
      image: Barber,

      source_code_link: "https://github.com/",
   },
   {
      name: "@Home VR",
      description:
         "In this app a user can upload property for the rent like airbin.also i add booking system",
      tags: [
         {
            name: "React Native",
            color: "blue-text-gradient",
         },
         {
            name: "Python",
            color: "green-text-gradient",
         },
         {
            name: "Stripe",
            color: "pink-text-gradient",
         },
         {
            name: "Firebase",
            color: "#d0203d",
         },
      ],
      image: home,

      source_code_link: "https://play.google.com/store/apps/details?id=com.Home_App&hl=en_IN",
   },
   {
      name: "Pin Stop",
      description:
         "This is social media app that allow to users make a post or as well share with frd,public or private .aslo i have added group chat or private chat.also i have added deeplinking ",
      tags: [
         {
            name: "React Native",
            color: "blue-text-gradient",
         },
         {
            name: "NodeJs",
            color: "green-text-gradient",
         },
         {
            name: "Stripe",
            color: "pink-text-gradient",
         },
         {
            name: "Firebase",
            color: "#d0203d",
         },
      ],
      image: pinstop,

      source_code_link: "https://apps.apple.com/us/app/pinstop/id6498883300",
   },
];
const socials = [
   {
      id: "github",
      icon: <GithubIcon />,
      link: "https://github.com/MalekZishan",
   },
   {
      id: "linkedin",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/zishan-malek-377b40242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
   },
   {
      id: "x",
      icon: <XIcon />,
      link: "https://x.com/Zishan1110RN",
   },
   {
      id: "instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/zishu_._?igsh=MTlrYm4yMmpiczQyOQ==",
   },
];

const heroTexts = ["React Native developer", 500, "Freelancer", 500, "App developer", 500];

export { navLinks, services, technologies, experiences, testimonials, projects, socials, heroTexts };
