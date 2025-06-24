
import React, { useState, useEffect } from 'react';
import { NavItem } from '../../types';
import { DownloadIcon, MenuIcon, XIcon } from '../icons';

interface HeaderProps {
  navItems: NavItem[];
  scrollToSection: (id: string) => void;
  resumeUrl: string;
}

const Header: React.FC<HeaderProps> = ({ navItems, scrollToSection, resumeUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero');}} 
            className={`text-2xl font-bold ${isScrolled ? 'text-primary dark:text-gray-100' : 'text-white'}`}
        >
          CL
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={`hover:text-primary dark:hover:text-secondary transition-colors ${isScrolled ? 'text-light-text dark:text-dark-text' : 'text-gray-200 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-primary bg-blue-100 hover:bg-blue-200 dark:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700' : 'text-white bg-primary hover:bg-primary-hover'}`}
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Resume
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none ${isScrolled ? 'text-light-text dark:text-dark-text' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-2 animate-fadeInUp">
          <nav className="flex flex-col items-center space-y-3 px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-colors py-2 w-full text-center"
              >
                {item.name}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full mt-2 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-primary bg-blue-100 hover:bg-blue-200 dark:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
    