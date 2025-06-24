
import React from 'react';

interface HeroProps {
  name: string;
  titles: string[];
  tagline: string;
  headshotUrl: string;
  onViewProjects: () => void;
  onGetInTouch: () => void;
}

const Hero: React.FC<HeroProps> = ({ name, titles, tagline, headshotUrl, onViewProjects, onGetInTouch }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Optional: for subtle patterns - Removed pattern-bg div and style jsx global */}
      
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-slideInLeft">
          <img
            src={headshotUrl}
            alt={name}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto md:mx-0 shadow-2xl border-4 border-primary"
          />
        </div>
        <div className="md:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-4">
            {name}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-roboto text-gray-300 mb-6">
            {titles.join(' | ')}
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 italic">
            "{tagline}"
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onViewProjects}
              className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-lg"
            >
              View Projects
            </button>
            <button
              onClick={onGetInTouch}
              className="bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;