
import React from 'react';

interface FooterProps {
  name: string;
  linkedin: string;
  github: string;
}

const Footer: React.FC<FooterProps> = ({ name, linkedin, github }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white mx-3 transition-colors">LinkedIn</a>
          <span className="text-gray-500">|</span>
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white mx-3 transition-colors">GitHub</a>
          {/* Add more portfolio links or other links as needed */}
        </div>
        <p className="text-sm mb-1">
          Copyright © {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs">
          Designed with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    