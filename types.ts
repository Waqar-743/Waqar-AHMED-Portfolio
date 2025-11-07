export interface Experience {
  company: string;
  role: string;
  duration: string;
  duties: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  github: string;
  live: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface Skill {
  name: string;
  description: string;
  score: number;
  icon: React.ReactElement;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    details: string[];
}

export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    link?: string;
}