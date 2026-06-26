export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory =
  | "Umumiy"
  | "Kurslar va darslar"
  | "To'lov"
  | "Sertifikat";
