export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: Author;
  readTime?: string;
  featured?: boolean;
  tag?: string;
}

export interface Category {
  name: string;
  count: number;
}

export interface PopularPost {
  id: string;
  title: string;
  image: string;
  views: string;
}
