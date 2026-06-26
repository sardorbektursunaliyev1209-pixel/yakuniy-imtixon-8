import type { PricingPlan, Discount, CompareRow } from "../types/pricing.type";

export const pricingPlans: PricingPlan[] = [
  {
    id: "beginner",
    name: "Boshlovchi",
    description: "Noldan boshlovchilar uchun kurslar",
    price: "390 000",
    features: [
      { text: "Barcha video darslarga to'liq kirish" },
      { text: "Online chat orqali qo'llab-quvvatlash" },
      { text: "Uyga vazifalar tekshiruvi" },
      { text: "Video darslar arxivi" },
      { text: "Kurs sertifikati" },
    ],
  },
  {
    id: "popular",
    name: "Mashhur",
    description: "Eng ko'p tanlangan kasbiy kurslar",
    price: "590 000",
    popular: true,
    features: [
      { text: "Barcha video darslar + bonus materiallar" },
      { text: "Haftalik jonli online sessiyalar" },
      { text: "Shaxsiy mentor (haftada 1 soat, online)" },
      { text: "Portfolio loyihalari ustida ishlash" },
      { text: "Ishga joylashishda yordam" },
      { text: "Kurs sertifikati" },
    ],
  },
  {
    id: "pro",
    name: "Kasbiy",
    description: "Kasb egallash uchun to'liq dasturlar",
    price: "890 000",
    features: [
      { text: "Haftasiga 3 ta individual online dars" },
      { text: "Moslashuvchan dars jadvali" },
      { text: "Shaxsiy o'quv dasturi" },
      { text: "24/7 mentor bilan aloqa" },
      { text: "Ishga joylashishda yordam" },
      { text: "Kurs sertifikati" },
    ],
  },
];

export const discounts: Discount[] = [
  {
    id: "early",
    icon: "$",
    percent: "-15%",
    title: "Oldindan to'lov",
    description: "Kursning to'liq narxini bir martada to'lasangiz.",
  },
  {
    id: "family",
    icon: "👥",
    percent: "-10%",
    title: "Aka-uka va opa-singillar",
    description: "Bir oiladan ikki yoki undan ortiq talaba o'qsa.",
  },
  {
    id: "student",
    icon: "🎓",
    percent: "-10%",
    title: "Talabalar uchun",
    description: "OTM talabasi ekanligingizni tasdiqlovchi hujat bilan.",
  },
  {
    id: "referral",
    icon: "🎁",
    percent: "-5%",
    title: "Do'stingni olib kel",
    description: "Siz ham, do'stingiz ham birinchi oyga chegirma olasiz.",
  },
];

export const compareRows: CompareRow[] = [
  {
    feature: "Jonli online sessiyalar",
    beginner: "—",
    popular: "Haftada 1",
    pro: "Haftada 3 (shaxsiy)",
  },
  {
    feature: "Mentor qo'llab-quvvatlovi",
    beginner: "Chat",
    popular: "Shaxsiy mentor",
    pro: "24/7 yakkama-yakka",
  },
  { feature: "Video darslar arxivi", beginner: true, popular: true, pro: true },
  { feature: "Shaxsiy mentor", beginner: false, popular: true, pro: true },
  {
    feature: "Portfolio loyihalari",
    beginner: false,
    popular: true,
    pro: true,
  },
  {
    feature: "Ishga joylashishda yordam",
    beginner: false,
    popular: true,
    pro: true,
  },
  {
    feature: "Moslashuvchan jadval",
    beginner: false,
    popular: false,
    pro: true,
  },
  { feature: "Sertifikat", beginner: true, popular: true, pro: true },
  {
    feature: "Narx (bir martalik)",
    beginner: "390 000 so'm",
    popular: "590 000 so'm",
    pro: "890 000 so'm",
  },
];
