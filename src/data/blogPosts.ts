import type { BlogPost, Category, PopularPost } from "../types/blog";

// Eslatma: image manzillarini o'zingizning /public yoki CDN rasmlaringizga
// almashtiring. Hozircha placeholder sifatida unsplash manzillari qo'yilgan.

export const featuredPost: BlogPost = {
  id: "1",
  slug: "2026-yilda-dasturchilik-karyerasini-qanday-boshlash-kerak",
  title: "2026-yilda dasturchilik karyerasini qanday boshlash kerak?",
  excerpt:
    "Sohaga endi qadam tashlayotganlarga atroflicha qo'llanma. Qaysi yo'nalishni tanlash, qancha vaqt ketadi va birinchi ishga qanday tayyorlanish bo'yicha amaliy tavsiyalar.",
  image:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  category: "Karyera",
  date: "15-may, 2026",
  author: { name: "Akmal Karimov", avatar: "" },
  readTime: "8 daqiqalik o'qish",
  tag: "Tanlangan · 2026-yil eng yaxshi maqola",
  featured: true,
};

export const blogPosts: BlogPost[] = [
  {
    id: "2",
    slug: "react-19-dagi-yangi-xususiyatlar",
    title: "React 19'dagi yangi xususiyatlar",
    excerpt:
      "React 19 muhim yangiliklari: Server Components, Actions va concurrent rendering yaxshilanishlari.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    date: "10-may",
    author: { name: "Nodira Yusupova", avatar: "" },
  },
  {
    id: "3",
    slug: "ux-ui-dizaynda-10-ta-keng-tarqalgan-xato",
    title: "UX/UI dizaynda 10 ta keng tarqalgan xato",
    excerpt:
      "Yangi dizaynerlar yo'l qo'yadigan asosiy xatolar va ularni qanday tuzatish kerakligi haqida.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
    category: "Dizayn",
    date: "8-may",
    author: { name: "Madina Ergasheva", avatar: "" },
  },
  {
    id: "4",
    slug: "django-vs-flask-qaysi-birini-tanlash",
    title: "Django vs Flask: qaysi birini tanlash?",
    excerpt:
      "Ikki ommabop Python framework'ini taqqoslash. Qaysi loyiha uchun qaysi biri mos keladi.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    category: "Backend",
    date: "5-may",
    author: { name: "Sherzod Rahimov", avatar: "" },
  },
  {
    id: "5",
    slug: "flutter-bilan-birinchi-ilovani-1-kunda-yaratish",
    title: "Flutter bilan birinchi ilovani 1 kunda yaratish",
    excerpt:
      "Boshlovchilar uchun Flutter qo'llanmasi. Sozlash, asoslar va birinchi ilovani yaratish.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
    category: "Mobil",
    date: "2-may",
    author: { name: "Otabek Salimov", avatar: "" },
  },
  {
    id: "6",
    slug: "machine-learningga-nimadan-boshlash-kerak",
    title: "Machine Learning'ga nimadan boshlash kerak?",
    excerpt:
      "ML olamiga kirishni rejalashtirayotganlar uchun yo'l xaritasi va resurslar.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    date: "28-aprel",
    author: { name: "Sevara Tursunova", avatar: "" },
  },
  {
    id: "7",
    slug: "seo-2026-nima-ozgardi",
    title: "SEO 2026: nima o'zgardi?",
    excerpt:
      "Google'ning oxirgi algoritm o'zgarishlari va saytni qanday optimizatsiya qilish.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    date: "25-aprel",
    author: { name: "Diloraxon Nazarova", avatar: "" },
  },
  {
    id: "8",
    slug: "docker-bilan-ishlashning-5-ta-yaxshi-amaliyoti",
    title: "Docker bilan ishlashning 5 ta yaxshi amaliyoti",
    excerpt:
      "Container'lar bilan ishlashda tez-tez qilinadigan xatolardan qanday saqlanish.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    date: "22-aprel",
    author: { name: "Jasur Mahmudov", avatar: "" },
  },
  {
    id: "9",
    slug: "css-grid-yoki-flexbox-qaysi-birini-ishlatish",
    title: "CSS Grid yoki Flexbox — qaysi birini ishlatish?",
    excerpt: "Ikki ommabop layout texnologiyasi taqqosi va amaliy misollar.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    category: "Frontend",
    date: "18-aprel",
    author: { name: "Akmal Karimov", avatar: "" },
  },
];

export const categories: Category[] = [
  { name: "Frontend", count: 24 },
  { name: "Backend", count: 18 },
  { name: "Dizayn", count: 15 },
  { name: "Mobil", count: 12 },
  { name: "Data Science", count: 9 },
  { name: "Marketing", count: 11 },
  { name: "DevOps", count: 6 },
  { name: "Karyera", count: 14 },
];

export const popularPosts: PopularPost[] = [
  {
    id: "p1",
    title: "JavaScript'da 5 ta keng tarqalgan xato",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=100&q=80",
    views: "1.2k o'qildi",
  },
  {
    id: "p2",
    title: "Figma'da ishlashni boshlash bo'yicha qo'llanma",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=100&q=80",
    views: "980 o'qildi",
  },
  {
    id: "p3",
    title: "TypeScript'ni nima uchun o'rganish kerak?",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=100&q=80",
    views: "850 o'qildi",
  },
  {
    id: "p4",
    title: "Python'da REST API yaratish 10 daqiqada",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=100&q=80",
    views: "720 o'qildi",
  },
];

export const popularTags: string[] = [
  "JavaScript",
  "React",
  "CSS",
  "Python",
  "Figma",
  "HTML",
  "Flutter",
  "Karyera",
  "ML",
  "Git",
  "Tipiz",
  "Docker",
];
