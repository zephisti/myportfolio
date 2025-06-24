
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { navItems, heroData, aboutData, experiences, projects, skills, education, achievements as achievementsData, contactData } from './data';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1)); // Remove # from id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      <Header navItems={navItems} scrollToSection={scrollToSection} resumeUrl={heroData.resumeUrl} />
      <main className="flex-grow">
        <Hero 
          name={heroData.name}
          titles={heroData.titles}
          tagline={heroData.tagline}
          headshotUrl={heroData.headshotUrl}
          onViewProjects={() => scrollToSection('#projects')}
          onGetInTouch={() => scrollToSection('#contact')}
        />
        <AboutMe 
          summary={aboutData.summary}
          strengths={aboutData.strengths}
          detailedBioUrl={aboutData.detailedBioUrl}
        />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education educationEntries={education} />
        <Achievements achievements={achievementsData} />
        <Contact 
            email={contactData.email} 
            linkedin={contactData.linkedin} 
            github={contactData.github}
            callToAction={contactData.callToAction}
        />
      </main>
      <Footer 
        name={heroData.name} 
        linkedin={contactData.linkedin} 
        github={contactData.github} 
      />
    </div>
  );
};

export default App;
    