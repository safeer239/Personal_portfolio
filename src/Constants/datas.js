import Tailwind from "../assets/tailwind.svg";
import Reactjs from "../assets/react.svg";
import MongoDB from "../assets/mongodb.svg";
import Bootstrap from "../assets/bootstrap.svg";
import CSS from "../assets/css.svg";
import Express from "../assets/express.svg";
import Git from "../assets/git-icon.svg";
import Github from "../assets/github-icon.svg";
import HTML from "../assets/html.svg";
import chakra_ui from "../assets/chakra-ui.svg";
import Js from "../assets/js.svg";
import Node from "../assets/node.svg";
import Postman from "../assets/postman.svg";
import Redux from "../assets/redux.svg";
import Postgresql from "../assets/postgresql.svg";
import netflix from "../assets/netflix.png";
import jobPortal from "../assets/job-portal.png";
import portfolio from "../assets/portfolio.png";
import chatterBox from "../assets/chat.png";
import weather from "../assets/weather.png";

export const HOME_SUMMARY = `MERN Stack Developer with 1+ year of professional experience in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Strong expertise in backend development, RESTful and GraphQL APIs, JWT-based authentication, and database-driven systems. Experienced in developing enterprise tools, employee management systems, and AI-powered applications including Retrieval-Augmented Generation (RAG). Proficient in Docker-based deployments, Nginx configuration, and modern development workflows.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I have strong expertise in backend development, RESTful and GraphQL APIs, and AI-powered applications including Retrieval-Augmented Generation (RAG). I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: "MERN Stack Developer",
    type: "Full Time",
    company: "RIOD LOGIC Pvt. Ltd",
    description: `Developing and maintaining full-stack applications using the MERN stack for internal and client-based projects.
Built employee management and time tracking software with role-based access, project-wise work logging, and reporting features.
Designed and implemented RESTful and GraphQL APIs using Node.js and Express.js.
Worked on AI-driven applications including Retrieval-Augmented Generation (RAG), integrating LLMs with vector databases.
Assisted in deployment and environment setup using Docker and Nginx.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "GraphQL", "Docker", "Nginx"],
  },
  {
    year: "July 2024 - Jan 2025",
    role: "Backend Developer Intern",
    type: "Internship",
    company: "DiGi Suvidha Pvt. Ltd",
    description: `Developed and maintained server-side logic, ensuring high performance and reliability.
Integrated RESTful APIs to manage and retrieve application data efficiently.
Utilized PostgreSQL for database management, optimizing queries and ensuring data integrity.`,
    technologies: ["Node.js", "PostgreSQL", "RESTful APIs"],
  },
  {
    year: "June 2023 - Jan 2024",
    role: "MERN Full Stack Developer Intern",
    type: "Internship",
    company: "Luminar Technolab",
    description: `Designed and developed web applications using React.js, improving frontend performance and user experience.
Built secure and scalable backend services using Node.js and Express.js.
Managed data storage and retrieval using MongoDB for scalable application architecture.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
  },
];

export const education = [
  {
    title: "BCA",
    description:
      "Graduated from Assabah Arts and Science College, Valayamkulam Malappuram under Calicut University in November 2023",
  },
  {
    title: "Plus Two",
    description:
      "Graduated from MIHSS, Ponnani Malappuram  in March 2020",
  },
  {
    title: "SSLC",
    description: "Graduated from AVHSS, Ponnani Malappuram in March 2018",
  },
];


export const PROJECTS = [
  
  {
    title: "ChatterBox",
    image: chatterBox,
    description:
      "Real-time chat application is a dynamic platform built using the MERN stack, featuring real-time messaging, MongoDB for data storage, and WebSocket integration to facilitate seamless communication between users.",
    technologies: ["React", "Node.js", "Express.js", "Chakra Ui", "MongoDB","Socket.io"],
     live:"https://chatterbox-c0j8.onrender.com",
    code:"https://github.com/safeer239/chatterBox"
  },
  {
    title: "Netflix-Clone",
    image: netflix,
    description:
      "A Netflix clone project that allows users to watch trailers of movies and TV shows. The application features a search functionality for finding movies and TV shows. It provides an intuitive and engaging user experience similar to the original Netflix platform.",
    technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
     live:"https://netflix-clone-p1vf.onrender.com",
    code:"https://github.com/safeer239/netflix-clone"
  },
  {
    title: "Job Portal Website",
    image: jobPortal,
    description:
      "An website Job Portal enables the registered users to post, edit, and manage their job listing.Implemented firebase Authentication for the user authentication and authorization.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Firebase",
    ],
    live:"https://github.com/safeer239",
    code:"https://github.com/safeer239/job-portal-full"
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind CSS"],
     live:"https://personal-portfolio-k7h2.onrender.com",
    code:"https://github.com/safeer239/Personal_portfolio"
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "A simple weather application that provides real time information about weather",
    technologies: ["HTML", "React", "Bootstrap"],
     live:"https://open-weather2.netlify.app/",
    code:"https://github.com/safeer239"
  },
];

export const skill=[
  Reactjs,
  Node,
  Express,
  MongoDB,
  Tailwind,
  CSS,
  HTML,
  Js,
  Redux,
  Bootstrap,
  chakra_ui,
  Git,
  Github,
  Postman,
  Postgresql
]

export const CONTACT = {
  address: "Malappuram, Kerala, India",
  phoneNo: "+91 8593852681 ",
  email: "mohammedsafeershefi@gmail.com",
};
