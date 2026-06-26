export type CourseCategory =
  | "Frontend"
  | "Backend"
  | "Dizayn"
  | "Mobil"
  | "Data Science"
  | "Marketing"
  | "DevOps";

export type CourseLevel = "Boshlovchi" | "O'rtacha" | "Mutaxassis";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  image: string;
  rating: number;
  durationMonths: number;
  lessonsCount: number;
  price: number;
  oldPrice?: number;
}

export interface CourseFilters {
  categories: CourseCategory[];
  level: CourseLevel | "Barchasi";
  minPrice: number | null;
  maxPrice: number | null;
  durations: ("1-3" | "3-6" | "6+")[];
  search: string;
  sort: "Eng mashhur" | "Arzon narx" | "Qimmat narx" | "Reyting bo'yicha";
}
