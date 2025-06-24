
import { NavItem, Strength, ExperienceEntry, ProjectEntry, Skill, SkillCategory, EducationEntry, AchievementEntry } from './types';

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: 'Christian Lawrence',
  titles: ['HR Innovator', 'AI Consultant', 'Problem Solver'],
  tagline: 'Leveraging HR expertise with AI innovation to create smarter workplaces.',
  headshotUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQGFZrT-ZnDVxg/profile-displayphoto-scale_200_200/B4EZeK49OdGcAY-/0/1750381876666?e=1756339200&v=beta&t=x52x3UodntjL0C4FLnR3MTXVPF2Q89EYzAZliv4_Z1A', 
  resumeUrl: '/resume_christian_lawrence.pdf', // Placeholder
};

export const aboutData = {
  summary: "With over 15 years blending human resources, operations, recruiting, and marketing experience, I now integrate AI-driven solutions to transform organizations. My approach combines analytical rigor with strategic foresight, creating meaningful, scalable impact.",
  strengths: ['Achiever', 'Individualization', 'Learner', 'Strategic', 'Maximizer'] as Strength[],
  detailedBioUrl: '/bio_christian_lawrence.pdf', // Placeholder
};

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp1',
    role: 'HR & AI Consultant',
    company: 'Self-Employed / Various Clients',
    dates: '2022 - Present',
    responsibilities: [
      'Developing Contextual Relevance Scoring (CRS) systems.',
      'Conducting bias audits for AI and HR processes.',
      'Automating HR workflows using AI tools.',
      'Advising on AI integration in HR tech stacks.',
    ],
    achievements: [
      'Successfully implemented CRS for 3 major clients, improving talent matching by 25%.',
      'Reduced bias in hiring processes by 15% through targeted AI audits.',
    ],
    details: 'Specializing in developing Contextual Relevance Scoring (CRS) systems, bias audits, and HR process automation. My work focuses on bridging the gap between human capital needs and technological advancements to create efficient, fair, and innovative workplace solutions.'
  },
  {
    id: 'exp2',
    role: 'Affiliate & Digital Marketer',
    company: 'Self-Employed',
    dates: '2019 - 2022',
    responsibilities: [
      'Managed affiliate marketing campaigns across multiple niches.',
      'Developed SEO strategies and content marketing plans.',
      'Analyzed campaign performance and optimized for ROI.',
    ],
    achievements: [
      'Grew affiliate revenue by 150% over two years.',
      'Achieved top 3 search rankings for several key terms.',
    ],
  },
  {
    id: 'exp3',
    role: 'Recruiting Coordinator',
    company: 'NCSA (Next College Student Athlete)',
    dates: '2018 - 2019',
    responsibilities: [
      'Coordinated recruitment activities and candidate communication.',
      'Managed applicant tracking system (ATS).',
      'Assisted with onboarding new hires.',
    ],
    achievements: [
      'Improved candidate experience scores by 10%.',
      'Streamlined interview scheduling process, reducing time-to-hire.',
    ],
  },
   {
    id: 'exp4',
    role: 'Auto Underwriter',
    company: 'State Farm',
    dates: '2017 - 2019',
    responsibilities: [
      'Assessed and evaluated insurance applications for risk.',
      'Made underwriting decisions based on company guidelines.',
      'Communicated with agents and policyholders regarding underwriting policies.'
    ],
    achievements: [
      'Maintained a high level of accuracy in risk assessment.',
      'Consistently met and exceeded productivity targets.'
    ]
  },
  {
    id: 'exp5',
    role: 'Benefits Administrator',
    company: 'Aon Hewitt',
    dates: '2016 - 2017',
    responsibilities: [
      'Administered employee benefits programs for various clients.',
      'Handled enrollments, changes, and terminations.',
      'Responded to employee inquiries regarding benefits.'
    ],
    achievements: [
      'Ensured compliance with benefits regulations.',
      'Received positive feedback for customer service and accuracy.'
    ]
  },
  {
    id: 'exp6',
    role: 'Internships',
    company: 'Walt Disney World & Husqvarna Group',
    dates: '2012 - 2015',
    responsibilities: [
      'Varied roles including guest services and operational support (Disney).',
      'Assisted with marketing and project coordination tasks (Husqvarna).'
    ],
    achievements: [
      'Gained valuable experience in large-scale operations and corporate environments.',
      'Contributed to successful project outcomes and team objectives.'
    ]
  }
];

export const projects: ProjectEntry[] = [
  {
    id: 'proj1',
    title: 'Bias Scanner WebApp',
    summary: 'A tool to detect and mitigate bias in text using AI.',
    techStack: ['React', 'Node.js', 'Python', 'NLP'],
    imageUrl: 'https://picsum.photos/seed/bias-scanner/400/300',
    detailedDescription: 'This web application allows users to input text (e.g., job descriptions, performance reviews) and receive an analysis of potential biases. It leverages NLP models to identify patterns and suggest improvements for fairness and inclusivity.',
    liveDemoLink: '#',
    sourceCodeLink: '#',
  },
  {
    id: 'proj2',
    title: 'AirCRS (AI + Contextual Relevance Scoring)',
    summary: 'AI-powered system for advanced candidate-to-job matching.',
    techStack: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
    imageUrl: 'https://picsum.photos/seed/aircrs/400/300',
    detailedDescription: 'AirCRS uses semantic embeddings and machine learning to score the contextual relevance of candidates against job requirements, going beyond simple keyword matching. It provides a more nuanced and accurate assessment of fit.',
  },
  {
    id: 'proj3',
    title: 'TeemBuild Strategies',
    summary: 'Consulting framework for employee engagement using AI insights.',
    techStack: ['AI Analytics', 'Survey Tools', 'Data Viz'],
    imageUrl: 'https://picsum.photos/seed/teembuild/400/300',
    detailedDescription: 'A strategic approach to improving employee engagement by analyzing survey data, communication patterns, and performance metrics with AI tools to identify key drivers and areas for improvement.',
  },
  {
    id: 'proj4',
    title: 'Data-Driven UI Generator',
    summary: 'A conceptual project for generating UI components from data schemas.',
    techStack: ['React', 'TypeScript', 'AI/ML'],
    imageUrl: 'https://picsum.photos/seed/ui-generator/400/300',
    detailedDescription: 'This project explores the use of AI to automatically generate basic React UI components based on provided data schemas and user stories, aiming to accelerate frontend development for data-intensive applications.',
  },
  {
    id: 'proj5',
    title: 'World of Warcraft: Idle Loot Hunt (Game)',
    summary: 'A fan-made idle game concept for WoW enthusiasts.',
    techStack: ['JavaScript', 'HTML5', 'Game Design'],
    imageUrl: 'https://picsum.photos/seed/wow-idle/400/300',
    detailedDescription: 'A personal passion project, this idle game allows players to send characters on automated loot hunts in the World of Warcraft universe, collecting gear and progressing even while offline. Focuses on strategic choices and long-term progression.',
  },
  {
    id: 'proj6',
    title: 'Career Break Job Board',
    summary: 'Platform for professionals returning after career breaks.',
    techStack: ['React', 'Firebase', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/career-break/400/300',
    detailedDescription: 'Inspired by early social networking platforms, this job board aims to connect professionals re-entering the workforce with companies that value their experience and offer supportive environments. Features include profile building, job matching, and community forums.',
  },
];

export const skills: Skill[] = [
  // HR & People Operations
  { name: 'Employee Engagement', category: SkillCategory.HR },
  { name: 'Talent Acquisition', category: SkillCategory.HR },
  { name: 'Training & Development', category: SkillCategory.HR },
  { name: 'Compliance', category: SkillCategory.HR },
  { name: 'Workforce Analytics', category: SkillCategory.HR },
  { name: 'HRMS', category: SkillCategory.HR },
  // AI & Automation
  { name: 'Contextual Relevance Scoring', category: SkillCategory.AI },
  { name: 'Prompt Engineering', category: SkillCategory.AI },
  { name: 'Generative AI', category: SkillCategory.AI },
  { name: 'NLP', category: SkillCategory.AI },
  { name: 'Bias Auditing', category: SkillCategory.AI },
  { name: 'Semantic Embeddings', category: SkillCategory.AI },
  { name: 'Python (pandas, scikit-learn, PyTorch)', category: SkillCategory.AI },
  // Development & Tools
  { name: 'React.js', category: SkillCategory.DEV },
  { name: 'JavaScript', category: SkillCategory.DEV },
  { name: 'HTML/CSS', category: SkillCategory.DEV },
  { name: 'Node.js', category: SkillCategory.DEV },
  { name: 'Tailwind CSS', category: SkillCategory.DEV },
  { name: 'Clerk Auth', category: SkillCategory.DEV },
  { name: 'Git/GitHub', category: SkillCategory.DEV },
  { name: 'Figma', category: SkillCategory.DEV },
  { name: 'Canva', category: SkillCategory.DEV },
  { name: 'Adobe Express', category: SkillCategory.DEV },
  // Business & Marketing
  { name: 'Digital Marketing', category: SkillCategory.BIZ },
  { name: 'SEO', category: SkillCategory.BIZ },
  { name: 'Affiliate Marketing', category: SkillCategory.BIZ },
  { name: 'Conversion Tracking', category: SkillCategory.BIZ },
  { name: 'Market Analytics', category: SkillCategory.BIZ },
  { name: 'Excel', category: SkillCategory.BIZ },
  { name: 'CSV Data Handling', category: SkillCategory.BIZ },
  { name: 'Business Process Management', category: SkillCategory.BIZ },
];

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Human Resources Management (MHRM)',
    institution: 'Wichita State University',
    status: 'Expected Graduation Dec 2025',
  },
  {
    degree: 'Bachelor of Science in Business Administration',
    institution: 'University of North Carolina at Charlotte',
    status: 'Completed',
  },
];

export const achievements: AchievementEntry[] = [
    {
        id: 'ach1',
        title: 'HR Tech Innovator Award (Conceptual)',
        description: 'Recognized for conceptual work on AI-driven HR solutions at a university showcase.'
    },
    {
        id: 'ach2',
        title: 'Student Union Leadership Excellence',
        description: 'Led multiple successful student initiatives and events during university tenure.'
    },
    {
        id: 'ach3',
        title: 'Audit Compliance Commendation - Disney Internship',
        description: 'Received commendation for meticulous attention to detail in operational audit processes.'
    },
    {
        id: 'ach4',
        title: 'Certified CliftonStrengths Coach (Self-Study)',
        description: 'Completed comprehensive self-study and application of CliftonStrengths coaching principles.'
    },
    {
        id: 'ach5',
        title: 'Advanced Excel for Business Analytics',
        description: 'Completed specialized training in advanced Excel functionalities for data analysis and reporting.'
    }
];

export const contactData = {
  email: 'clawrencepro@gmail.com', // Placeholder
  linkedin: 'https://www.linkedin.com/in/christianlawrence7/', // Placeholder
  github: 'https://github.com/zephisti', // Placeholder
  callToAction: "Let's build something great together. Reach out now!"
};
    