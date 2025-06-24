
import React from 'react';
import { ProjectEntry } from '../../types';
import { XIcon, ExternalLinkIcon } from '../icons';

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4 animate-fadeInUp">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XIcon className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-blue-400 mb-4">{project.title}</h2>
        
        {project.imageUrl && (
          <img className="w-full h-64 object-cover rounded-md mb-6" src={project.imageUrl} alt={project.title} />
        )}
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.detailedDescription}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          {project.liveDemoLink && project.liveDemoLink !== '#' && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {project.sourceCodeLink && project.sourceCodeLink !== '#' && (
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-secondary hover:bg-secondary-hover text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Source Code <ExternalLinkIcon />
            </a>
          )}
        </div>
         <button
            onClick={onClose}
            className="mt-8 w-full sm:w-auto px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-light-text dark:text-dark-text font-semibold rounded-lg shadow-md transition duration-300"
          >
            Close
          </button>
      </div>
    </div>
  );
};

export default ProjectModal;
    