import type {
  Course,
  RecommendedCourse,
  Stat,
  WeekDay,
  ContinueCourse,
} from "../types/dashboard.type";

export const continueCourse: ContinueCourse = {
  id: "1",
  title: "React.js — zamonaviy frontend",
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  module: "Modul 4",
  lesson: "12-dars: useState va useEffect hooklari",
  progress: 62,
  completedLessons: 14,
  totalLessons: 32,
};

export const stats: Stat[] = [
  { id: "1", icon: "📚", value: 3, label: "Faol online kurslar" },
  { id: "2", icon: "⏱", value: 47, label: "O'rganilgan soat", badge: "+4s" },
  { id: "3", icon: "✅", value: 2, label: "Tugallangan" },
  { id: "4", icon: "🏆", value: 2, label: "Sertifikatlar" },
];

export const activeCourses: Course[] = [
  {
    id: "1",
    title: "React.js — zamonaviy frontend",
    instructor: "Akmal Karimov",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    categoryColor: "bg-blue-500",
    totalLessons: 32,
    completedLessons: 14,
    progress: 62,
  },
  {
    id: "2",
    title: "Python asoslari",
    instructor: "Dilnoza Yusupova",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    category: "Dasturlash",
    categoryColor: "bg-green-500",
    totalLessons: 24,
    completedLessons: 8,
    progress: 33,
  },
  {
    id: "3",
    title: "UX/UI dizayn asoslari",
    instructor: "Sardor Aliyev",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    category: "Dizayn",
    categoryColor: "bg-purple-500",
    totalLessons: 20,
    completedLessons: 19,
    progress: 95,
  },
  {
    id: "4",
    title: "SMM va raqamli marketing",
    instructor: "Madina Rashidova",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    categoryColor: "bg-orange-500",
    totalLessons: 18,
    completedLessons: 3,
    progress: 17,
  },
];

export const recommendedCourses: RecommendedCourse[] = [
  {
    id: "1",
    title: "TypeScript chuqur",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=400&q=80",
    category: "Frontend",
    categoryColor: "bg-blue-500",
    lessons: 32,
    hours: 18,
  },
  {
    id: "2",
    title: "Node.js va Express",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
    category: "Backend",
    categoryColor: "bg-green-500",
    lessons: 40,
    hours: 24,
  },
  {
    id: "3",
    title: "Figma bilan prototiplash",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
    category: "Dizayn",
    categoryColor: "bg-purple-500",
    lessons: 26,
    hours: 14,
  },
  {
    id: "4",
    title: "SQL va ma'lumotlar bazasi",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    category: "Data",
    categoryColor: "bg-cyan-500",
    lessons: 22,
    hours: 12,
  },
];

export const weekDays: WeekDay[] = [
  { label: "Du", done: true },
  { label: "Se", done: true },
  { label: "Cho", done: true },
  { label: "Pa", done: true },
  { label: "Ju", done: false, today: true },
  { label: "Sh", done: false },
  { label: "Ya", done: false },
];
