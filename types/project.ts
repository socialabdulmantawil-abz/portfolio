export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: readonly string[];
  featured: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
}
