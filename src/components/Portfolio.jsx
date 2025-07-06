import React from 'react';
import { Code2, BadgeCheck, Sparkles } from 'lucide-react';
import LeetCodeProgress from './LeetCodeProgress';
import ProjectCard from './ProjectCard';
import { projects, hackathons, skills } from '../data/projectsData.jsx';

const Portfolio = () => {
    return (
        <section id="portfolio" className="min-h-screen py-20 bg-black">
            <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
                <LeetCodeProgress />

                {/* Skill Section */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text text-center flex items-center justify-center gap-4">
                        <BadgeCheck className="text-blue-400" />
                        Skills
                        <Sparkles className="text-cyan-400 animate-pulse" size={32} />
                    </h2>
                    <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                        Here are the technologies and tools I use to build modern, scalable, and beautiful web applications.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {skills.map((skill) => (
                            <div
                                key={skill.category}
                                className="bg-gradient-to-br from-gray-800/70 to-gray-900/80 rounded-2xl border border-blue-900 shadow-lg p-7 flex flex-col items-center hover:scale-105 hover:border-cyan-400 transition-all duration-300 group"
                            >
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-125 transition-transform" />
                                    <h3 className="text-xl font-semibold text-blue-300 group-hover:text-cyan-300 transition-colors">
                                        {skill.category}
                                    </h3>
                                </div>
                                <ul className="space-y-3 w-full">
                                    {skill.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className="flex items-center gap-3 text-gray-200 text-base group-hover:text-white transition-colors"
                                        >
                                            <span className="w-6 h-6 flex items-center justify-center text-xl">
                                                <item.icon />
                                            </span>
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="pb-2 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text flex items-center gap-4">
                        <Code2 className="text-blue-400" />
                        My Projects
                    </h2>
                    <p className="text-lg text-gray-400 mb-12">
                        Here are some of my recent projects that showcase my skills and
                        experience.
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