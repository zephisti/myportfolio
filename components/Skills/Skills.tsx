
import React, { useState, useMemo } from 'react';
import { Skill, SkillCategory } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const SkillPill: React.FC<{ skillName: string }> = ({ skillName }) => (
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg shadow-sm text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-all duration-200 cursor-default">
    {skillName}
  </div>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(skills.map(skill => skill.category));
    return ['All', ...Array.from(uniqueCategories)] as (SkillCategory | 'All')[];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === selectedCategory);
  }, [skills, selectedCategory]);
  
  const skillsByCategory = useMemo(() => {
    if (selectedCategory !== 'All') {
        return { [selectedCategory] : filteredSkills };
    }
    return filteredSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  }, [filteredSkills, selectedCategory]);


  return (
    <section id="skills" className="py-16 sm:py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Skills & Tools
        </h2>
        
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${selectedCategory === category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white dark:bg-gray-700 text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-10">
            {Object.entries(skillsByCategory).map(([category, skillList]) => (
                 <div key={category} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fadeInUp">
                    <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-6 border-b-2 border-primary dark:border-blue-400 pb-2">
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                    {(skillList as Skill[]).map(skill => (
                        <SkillPill key={skill.name} skillName={skill.name} />
                    ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
    