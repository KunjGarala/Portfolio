// Projects data
import Farmease from "../assets/Farmease.png";
import Spotify from "../assets/Spotify.png";
import hacknuthon from "../assets/hacknuthon6.0.png";
import EduConnect from "../assets/EduConnect.png";
import KXJ from  "../assets/KXJ.png";
export const projects = [
{
    id: 1,
    title: "EduConnect",
    description:
      "Developed EduConnect, a collaborative learning and event management platform with an intuitive interface, seamless communication tools, and responsive design to enhance both educational and event experiences.",
    image: EduConnect,
    github: "https://github.com/KunjGarala/EduConnect",
    tags: ["SpringBoot","PostgreSQL" , "React.js"],
  },
  {
    id: 2,
    title: "FarmEase",
    description:
      "Built the frontend for a farmer-centric e-commerce platform, integrated APIs, and optimized performance for a smoother user experience.",
    image: Farmease,
    github: "https://github.com/KunjGarala/FarmEase/tree/kunj-garala",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    id: 3,

    title: "KXJ",
    description:
      "Developed a social media web app with React.js, Redux, and Appwrite, featuring full CRUD operations and a responsive UI styled with Tailwind CSS.",
    image: KXJ,
    link: "https://k-x-j.vercel.app",
    github: "https://github.com/KunjGarala/kXj",
    tags: ["React.js", "Redux", "Appwrite", "CRUD"],
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "Developed a Spotify clone with an intuitive UI, dynamic volume control, and a responsive design for seamless music playback.",
    image: Spotify,
    link: "https://spotify-by-kunjgarala.netlify.app/",
    github: "https://github.com/KunjGarala/Spotify",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const hackathons = [
  {
    id: 1,
    title: "SmartBites",
    description:
      "Developed a responsive React.js frontend for an AI-powered kitchen inventory system using Tailwind CSS, integrating Google Gemini AI for smart food predictions and image-based quantity estimation.",
    image: hacknuthon,
    github: "https://github.com/KunjGarala/PetPooja-Project",
    tags: ["React.js", "Gemini AI", "Tailwind CSS"],
  },
];

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJava,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React", icon: FaReact },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring MVC", icon: SiSpring },
      { name: "Spring Security", icon: SiSpring },
      { name: "Spring Framework", icon: SiSpring },
      { name: "Hibernate (ORM)", icon: SiHibernate },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FaDatabase },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
