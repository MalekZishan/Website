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
   pinstop,
   figma,
   docker,
   meta,
   jeynit,
   Barber,
   starbucks,
   tesla,
   shopify,
   home,
   carrent,
   Whinlyess,
   amin,
   jobit,
   tripguide,
   threejs,
} from "../assets";

export const navLinks = [
   {
      id: "about",
      title: "About",
   },
   {
      id: "work",
      title: "Work",
   },
   {
      id: "contact",
      title: "Contact",
   },
];

const services = [
   {
      title: "React Native Developer",
      icon: mobile,
   },
   {
      title: "Firebase",
      icon: mobile,
   },
   {
      title: "Typescript JavaScript",
      icon: mobile,
   },
   {
      title: "Node js",
      icon: mobile,
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
      name: "git",
      icon: git,
   },
   {
      name: "figma",
      icon: figma,
   },
   {
      name: "docker",
      icon: docker,
   },
];

const experiences = [
   {
      title: "React Native Developer",
      company_name: "Aminsofttech",
      icon: amin,
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
         "I thought it was impossible to make a website as beautiful as our product, but Zishan Malek proved me wrong.",
      name: "Sara Lee",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
   {
      testimonial:
         "I've never met a web developer who truly cares about their clients' success like Zishan Malek.",
      name: "Chris Brown",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
   },
   {
      testimonial:
         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
   },
];

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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
   },
];

export { services, technologies, experiences, testimonials, projects };
