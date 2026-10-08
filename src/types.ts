export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: string;
  image?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface OpeningHourDay {
  day: string;
  hours: string;
  isToday?: boolean;
}
