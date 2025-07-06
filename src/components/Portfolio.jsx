import React from 'react';
import { Code2 } from 'lucide-react';
import LeetCodeProgress from './LeetCodeProgress';
import ProjectCard from './ProjectCard';
import { projects, hackathons } from '../data/projectsData.jsx';

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <LeetCodeProgress />
        
        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text flex items-center gap-4">
            <Code2 className="text-blue-400" />
            My Projects
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text flex items-center gap-4">
            <Code2 className="text-blue-400" />
            Hackathons
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Here are some of the hackathons I've participated in.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {hackathons.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;