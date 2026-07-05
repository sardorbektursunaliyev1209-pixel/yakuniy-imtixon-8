export interface Course {
  id: string;
  title: string;
  instructor: string;
  image: string;
  category: string;
  categoryColor: string;
  totalLessons: number;
  completedLessons: number;
  progress: number;
}

export interface RecommendedCourse {
  id: string;
  title: string;
  image: string;
  category: string;
  categoryColor: string;
  lessons: number;
  hours: number;
}

export interface Stat {
  id: string;
  icon: string;
  value: string | number;
  label: string;
  badge?: string;
}

export interface WeekDay {
  label: string;
  done: boolean;
  today?: boolean;
}

export interface ContinueCourse {
  id: string;
  title: string;
  image: string;
  module: string;
  lesson: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
}
