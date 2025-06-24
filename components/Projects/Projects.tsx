
import React, { useState } from 'react';
import { ProjectEntry } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  projects: ProjectEntry[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const openModal = (project: ProjectEntry) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16 text-light-text dark:text-dark-text">
          Projects Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={openModal} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
    