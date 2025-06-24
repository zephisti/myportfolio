
import React, { useState } from 'react';
import { AchievementEntry } from '../../types';
import { ChevronDownIcon, ChevronUpIcon, SparklesIcon } from '../icons';

interface AchievementItemProps {
  achievement: AchievementEntry;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ achievement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-light-bg dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500"
      >
        <div className="flex items-center">
            <SparklesIcon className="w-5 h-5 text-secondary dark:text-teal-400 mr-3 flex-shrink-0" />
            <h3 className="text-md sm:text-lg font-medium text-light-text dark:text-dark-text">{achievement.title}</h3>
        </div>
        {isExpanded ? <ChevronUpIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" /> : <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
      </button>
      {isExpanded && (
        <div className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-600 animate-fadeInUp">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
        </div>
      )}
    </div>
  );
};


interface AchievementsProps {
  achievements: AchievementEntry[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return null; // Don't render the section if there are no achievements
  }

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Achievements & Credentials
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {achievements.map((achievement) => (
            <AchievementItem key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
    