import Tailwind from "../assets/tailwind.svg";
import Reactjs from "../assets/react.svg";
import MongoDB from "../assets/mongodb.svg";
import Bootstrap from "../assets/bootstrap.svg";
import CSS from "../assets/css.svg";
import Express from "../assets/express.svg";
import Git from "../assets/git-icon.svg";
import Github from "../assets/github-icon.svg";
import HTML from "../assets/html.svg";
import Js from "../assets/js.svg";
import Node from "../assets/node.svg";
import Postman from "../assets/postman.svg";
import Redux from "../assets/redux.svg";
import Postgresql from "../assets/postgresql.svg";
import netflix from "../assets/netflix.png";
import jobPortal from "../assets/job-portal.png";
import portfolio from "../assets/portfolio.png";

export const HOME_SUMMARY = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications . With a solid foundation in front - end technologies like React and  experience in back - end technologies like Node . js , PostgreSQL , and MongoDB , I have honed my skills to deliver exceptional user experiences . My goal is to leverage my expertise to create innovative solutions that provide seamless , dynamic interactions .`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React,  Node.js,  PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Developer Intern",
    type: "Internship",
    company: "Digistore Pay",
    description: `During the time of internship I acquired skills in PostgreSQL for efficient database management. Managed database interactions using PostgreSQL, ensuring data consistency and reliability.
Collaborated with the frontend team to ensure seamless integration.`,
    technologies: ["Node.Js", "PostgreSQL"],
  },
  {
    year: "2023 - 2024",
    role: "MERN Full Stack Developer ",
    type: "Course",
    company: "Luminar Technolab",
    description: `I have completed a comprehensive 7-month MERN stack course, which covered MongoDB, Express.js, React, and Node.js. This program equipped me with full-stack web development skills and in-depth knowledge of JavaScript and modern web technologies for building dynamic and responsive applications.
`,
    technologies: ["React.Js", "Node.Js", "Express.Js", "MongoDB", "Redux"],
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
    live:"",
    code:"https://github.com/safeer239/job-portal-full"
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind CSS"],
     live:"https://personal-portfolio-k7h2.onrender.com",
    code:"https://github.com/safeer239/Personal_portfolio"
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
  Git,
  Github,
  Postman,
  Postgresql
]

export const CONTACT = {
  address: "Ponnani, Malappuram, Kerala",
  phoneNo: "+91 8593852681 ",
  email: "mohammedsafeershefi@gmail.com",
};
