export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  status: 'Featured' | 'Academic Project' | 'Coming Soon';
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  businessImpact?: string;
  keyFeatures?: string[];
}

export interface SkillCategory {
  category: 'Business & Productivity' | 'Programming' | 'Databases' | 'Networking' | 'Data & Analytics';
  description: string;
  skills: {
    name: string;
    description: string;
    level: string;
    useCase: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Placeholder' | 'In Progress' | 'Completed';
  category: string;
  credentialUrl?: string;
}

export interface AcademicExperience {
  id: string;
  title: string;
  focusArea: string;
  institution: string;
  period: string;
  description: string;
  outcomes: string[];
}
