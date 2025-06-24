
import React from 'react';
import { ProjectEntry } from '../../types';

interface ProjectCardProps {
  project: ProjectEntry;
  onOpenModal: (project: ProjectEntry) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => onOpenModal(project)}
    >
      {project.imageUrl && (
        <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{project.summary}</p>
        <div className="mt-auto">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium">
                {tech}
                </span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
    