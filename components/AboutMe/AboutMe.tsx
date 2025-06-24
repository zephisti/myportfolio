
import React from 'react';
import { Strength } from '../../types';
import { DownloadIcon } from '../icons';

interface AboutMeProps {
  summary: string;
  strengths: Strength[];
  detailedBioUrl: string;
}

const StrengthBadge: React.FC<{ strength: Strength }> = ({ strength }) => {
  const strengthColors: Record<Strength, string> = {
    Achiever: 'bg-blue-500 text-white',
    Individualization: 'bg-green-500 text-white',
    Learner: 'bg-yellow-500 text-black',
    Strategic: 'bg-purple-500 text-white',
    Maximizer: 'bg-red-500 text-white',
  };
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full shadow-sm ${strengthColors[strength]}`}>
      {strength}
    </span>
  );
};

const AboutMe: React.FC<AboutMeProps> = ({ summary, strengths, detailedBioUrl }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-12 text-light-text dark:text-dark-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center md:text-left">
            {summary}
          </p>
          <div className="mb-10 text-center">
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">My CliftonStrengths:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {strengths.map((strength) => (
                <StrengthBadge key={strength} strength={strength} />
              ))}
            </div>
          </div>
          {detailedBioUrl && (
             <div className="text-center">
                <a
                  href={detailedBioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary dark:text-blue-400 hover:text-primary-hover dark:hover:text-blue-300 font-medium group"
                >
                  Download Detailed Bio
                  <DownloadIcon className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
    