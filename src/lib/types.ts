export interface NewsItem {
  video: any;
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
}

export interface Photo {
  id: string;
  title: string;
  src: string;
  category: string;
  date: string;
}

export interface Slide {
  id: string;
  title: string;
  src: string;
  description?: string;
}