
import React from 'react';
import { EducationEntry } from '../../types';
import { AcademicCapIcon } from '../icons';

interface EducationProps {
  educationEntries: EducationEntry[];
}

const Education: React.FC<EducationProps> = ({ educationEntries }) => {
  return (
    <section id="education" className="py-16 sm:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Education & Certifications
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationEntries.map((entry, index) => (
            <div key={index} className="bg-light-bg dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4">
              <div className="flex-shrink-0 pt-1">
                <AcademicCapIcon className="w-8 h-8 text-primary dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{entry.degree}</h3>
                <p className="text-md text-gray-600 dark:text-gray-300">{entry.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">{entry.status}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Add a section for industry certifications if needed later */}
      </div>
    </section>
  );
};

export default Education;
    