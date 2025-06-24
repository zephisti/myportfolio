
export interface NavItem {
  name: string;
  href: string;
}

export type Strength = 'Achiever' | 'Individualization' | 'Learner' | 'Strategic' | 'Maximizer';

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
  details?: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  imageUrl?: string; 
  detailedDescription: string;
  liveDemoLink?: string;
  sourceCodeLink?: string;
}

export enum SkillCategory {
  HR = 'HR & People Operations',
  AI = 'AI & Automation',
  DEV = 'Development & Tools',
  BIZ = 'Business & Marketing',
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  status: string; // e.g., "Expected Graduation Dec 2025", "Completed"
}

export interface AchievementEntry {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
    