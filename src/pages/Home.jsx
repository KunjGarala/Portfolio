import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img from "../assets/hand-wave-icon.svg";

export default function Home() {
  return (
    <div className="h-[calc(90vh-64px)] container mx-auto px-4 flex items-center">
      <div className="space-y-8">
        <h1 className="pb-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text animate-fade-in">
          Hi, I'm Kunj Garala
        </h1>

        <div className="flex items-center space-x-4 animate-slide-in">
          <img 
            src={img} 
            alt="Wave" 
            className="w-12 md:w-16 animate-wave cursor-pointer hover:scale-110 transition-transform" 
          />
          <p className="text-xl md:text-3xl">Welcome to my portfolio!</p>
        </div>

        <Link to="/portfolio" className="inline-block">
          <button className="group flex items-center space-x-2 bg-gradient-to-r from-black to-purple-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-105">
            <span>View My Work</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}