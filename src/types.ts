export interface VideoItem {
  id: string;
  title: string;
  category: 'food' | 'webtoon' | 'news' | 'culture' | 'shorts';
  categoryLabel: string;
  duration: string;
  views: string;
  date: string;
  image: string;
  description: string;
  featured?: boolean;
  likes: number;
  isShorts?: boolean;
  youtubeUrl: string;
}

export interface ContentSeries {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  episodesCount: number;
  highlight: string;
  tags: string[];
}

export interface FanComment {
  id: string;
  author: string;
  message: string;
  stamp: string;
  stampLabel: string;
  date: string;
  likes: number;
  isUserAdded?: boolean;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export interface AgencyService {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

