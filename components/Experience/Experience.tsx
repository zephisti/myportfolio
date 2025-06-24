
import React from 'react';
import { ExperienceEntry } from '../../types';
import ExperienceItem from './ExperienceItem';

interface ExperienceProps {
  experiences: ExperienceEntry[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16 text-light-text dark:text-dark-text">
          Professional Experience
        </h2>
        <div className="relative">
          {/* This div could be used for a central line if not using per-item lines */}
          {/* <div className="hidden sm:block absolute w-0.5 h-full bg-gray-300 dark:bg-gray-600 top-0 left-1/2 transform -translate-x-1/2"></div> */}
          
          <div className="space-y-0"> {/* No space here, handled by ExperienceItem py */}
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} entry={exp} isLast={index === experiences.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
    