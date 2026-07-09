export interface Feature {
  id: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
  category?: string;
}

export interface Screenshot {
  id: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number; // 1-5
  company?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
  type: "major" | "minor" | "patch";
}

export interface Persona {
  id: string;
  name: string;
  icon: string; // lucide-react icon name
  description: string;
  benefit: string;
}

export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}
