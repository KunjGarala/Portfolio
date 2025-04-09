import { Github, ExternalLink, Code2, Brain } from "lucide-react"
import Spotifyimg from "../assets/Soptify.png"
import hackthon1 from "../assets/hacknuthon6.0.png"
import Farmease from "../assets/Farmease.png"
import LeetCodeProgress from "../components/LeetCodeProgress"
import { CIcon } from '@coreui/icons-react';
import { cilTerminal } from '@coreui/icons';
const projects = [
  {
    id: 1,
    title: "FarmEase",
    description: " Built the frontend for a farmer-centric e-commerce platform, integrated APIs, and optimized performance for a smoother user experience.",
    image: Farmease,
    link: "https://drive.google.com/drive/folders/1AAaGoQ97zfx1rsNbOew6kkPtSICp0bGI",
    github: "https://github.com/KunjGarala/FarmEase/tree/kunj-garala",
    tags: ["React.js", " Tailwind CSS"]
  },
  {
    id: 2,
    title: "Spotify Clone",
    description: "Developed a Spotify clone with an intuitive UI, dynamic volume control, and a responsive design for seamless music playback.",
    image: Spotifyimg,
    link: "https://spotify-by-kunjgarala.netlify.app/",
    github: "https://github.com/KunjGarala/Spotify",
    tags: ["Html", "CSS", "JavaScript"]
  },
  
]
const hackathon = [
  {
    id: 1,
    title: "SmartBites",
    description: "Developed a responsive React.js frontend for an AI-powered kitchen inventory system using Tailwind CSS, integrating Google Gemini AI for smart food predictions and image-based quantity estimation.",
    image: hackthon1,
    github: "https://github.com/KunjGarala/PetPooja-Project",
    tags: ["React.js" , "Gemini AI" , " Tailwind CSS"]
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mt-1 mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text flex items-center gap-4">
          <Brain className="inline-block w-8 h-8 md:w-10 md:h-10 text-black" />
          Problem Solving
        </h2>
        <LeetCodeProgress />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text">
      <Code2 className="inline-block w-8 h-8 md:w-10 md:h-10 text-black mr-2" />
      My Projects
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Here are some of my recent projects that showcase my skills and experience.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>




      <h1 className="mt-10 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text flex items-center gap-2">
        <CIcon 
          icon={cilTerminal} 
          className="inline-block w-8 h-8 md:w-10 md:h-10 text-black" 
          style={{
            fontWeight: 'bold',
            strokeWidth: 2
          }}
        />
       Hackathons
      </h1>
      <p className="text-lg text-gray-600 mb-12">
      Here are some of the hackathons I've participated in.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathon.map((project) => (
          <div key={project.id} className="group bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}