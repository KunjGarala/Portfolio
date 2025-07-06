import React from 'react';
import imgsrc from "../assets/kunjgarala.jpg"
import charusat from "../assets/charusat.jpeg"

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Image and text side by side on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center text-center md:text-left mb-16 gap-10">
          <div className="w-56 h-56 md:w-80 md:h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1 mb-6 md:mb-0 md:mr-8 flex-shrink-0 flex items-center justify-center">
            <img
              src={imgsrc}
              alt="Kunj Garala"
              className="w-full h-full md:h-full md:w-full rounded-full object-cover"
              style={{ objectPosition: 'top' }}
            />
          </div>
          <div className="max-w-2xl space-y-6 flex flex-col justify-center items-center md:items-start">
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a software developer with expertise in JavaScript and React.js. 
                I am passionate about building engaging and user-friendly applications, 
                as demonstrated by projects like my Spotify Clone, a web-based music player 
                that allows users to seamlessly browse and play music.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
              <p className="text-lg leading-relaxed text-gray-300">
                With a strong focus on frontend development, UI/UX, and interactive web experiences, 
                I aim to push the boundaries of web applications through continuous learning and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Education Journey
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <img
                    src={charusat}
                    alt="Charusat image"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">CHARUSAT University</h4>
                  <p className="text-blue-400 font-medium">B.Tech in Computer Engineering</p>
                  <p className="text-gray-400">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;