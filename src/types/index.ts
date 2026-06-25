export type RoadmapStatus  = 'completed' | 'in-progress' | 'planned';
export type DeployStatus   = 'done' | 'active' | 'upcoming';

export interface DeployPhase {
  week: string;
  title: string;
  description: string;
  metric?: string;
  status: DeployStatus;
}

export interface RoadmapPhase {
  phase: string;
  name: string;
  description: string;
  status: RoadmapStatus;
}

export interface TechItem {
  name: string;
  logo: string;       // path in public/images/tech/
  category: 'frontend' | 'backend' | 'database' | 'devops';
}

export interface TeamRole {
  title: string;
  description: string;
  icon: string;       // lucide icon name
  skills: string[];
  openIssues: number;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;       // lucide icon name
  color: 'edificio' | 'parque' | 'club' | 'acento';
}

export interface HowToStep {
  step: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;       // lucide icon name
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitterHandle: string;
}
