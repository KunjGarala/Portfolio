import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900/20 to-black">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="pb-3 text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text">
            Hi, I'm Kunj Garala
          </h1>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="text-2xl animate-wave">👋</div>
            <p className="text-xl md:text-2xl text-gray-300">Welcome to my portfolio!</p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I am a software developer skilled in JavaScript, React.js, and Spring Boot, creating secure backend systems and user-friendly web applications.
          </p>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 mx-auto"
          >
            <span>View My Work</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;