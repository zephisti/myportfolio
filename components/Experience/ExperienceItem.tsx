
import React, { useState } from 'react';
import { ExperienceEntry } from '../../types';
import { ChevronDownIcon, ChevronUpIcon, BriefcaseIcon } from '../icons';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ entry, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute top-0 left-[18px] sm:left-[26px] w-0.5 h-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary transition-colors duration-300"></div>
      )}
      
      {/* Dot */}
      <div className="absolute top-[28px] left-[calc(18px-0.625rem)] sm:left-[calc(26px-0.625rem)] w-5 h-5 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
        <BriefcaseIcon className="w-3 h-3 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-xl font-semibold text-primary dark:text-blue-400">{entry.role}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{entry.dates}</span>
        </div>
        <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">{entry.company}</p>
        
        {entry.details && <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">{entry.details}</p>}

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-primary dark:text-blue-400 hover:underline mb-3"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <ChevronUpIcon className="w-4 h-4 ml-1" /> : <ChevronDownIcon className="w-4 h-4 ml-1" />}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-3 animate-fadeInUp">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Key Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 pl-4">
                {entry.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Achievements/Highlights:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 pl-4">
                {entry.achievements.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
    