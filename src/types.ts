export interface Work {
  name: string;
  position: string;
  location_type: string;
  location: string;
  startDate: string;
  endDate: string | null;
  summary: string | string[];
  highlights: string[];
  responsibilities?: string[];
  skills: string[];
}

export interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: string[];
  url: string;
  github?: string;
}

export interface SocialIcon {
  [key: string]: string;
} 