import type { FaqItem, FaqCategory } from "../types/faq.type";

export const faqCategories: FaqCategory[] = [
  "Umumiy",
  "Kurslar va darslar",
  "To'lov",
  "Sertifikat",
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "O'qish uchun oldindan bilim kerakmi?",
    answer:
      "Yo'q. Boshlovchi kurslarimiz nolinchi darajadan mo'ljallangan — kompyuterda ishlashning oddiy ko'nikmalari yetarli. O'rta va yuqori darajadagi kurslar uchun esa kirish testi o'tkazamiz va sizga mos kursni tavsiya qilamiz.",
    category: "Umumiy",
  },
  {
    id: "2",
    question: "Yosh chegarasi bormi?",
    answer:
      "Yo'q, yosh chegarasi mavjud emas. Bizning kurslarimiz 14 yoshdan 60 yoshgacha bo'lgan barcha ishtiyoqmandlar uchun ochiq.",
    category: "Umumiy",
  },
  {
    id: "3",
    question: "Darslar qanday formatda o'tadi?",
    answer:
      "Darslar onlayn formatda, jonli efir va yozilgan videolar orqali o'tadi. Har bir darsdan keyin amaliy topshiriqlar beriladi va mentor tomonidan tekshiriladi.",
    category: "Kurslar va darslar",
  },
  {
    id: "4",
    question: "O'z sur'atimda o'qiy olamanmi?",
    answer:
      "Ha, barcha yozilgan darslar istalgan vaqtda ko'rish uchun mavjud. Jonli darslarning yozuvlari ham 24 soat ichida platformaga yuklanadi.",
    category: "Kurslar va darslar",
  },
  {
    id: "5",
    question: "Bepul demo darslar bormi?",
    answer:
      "Ha, har bir kursning birinchi 2-3 darsi bepul ochiq. Ro'yxatdan o'tmasdan ham ko'ra olasiz.",
    category: "Kurslar va darslar",
  },
  {
    id: "6",
    question: "To'lov qanday amalga oshiriladi?",
    answer:
      "Click, Payme, bank kartasi va naqd pul orqali to'lov qilish mumkin. Shuningdek, bo'lib to'lash imkoniyati ham mavjud.",
    category: "To'lov",
  },
  {
    id: "7",
    question: "Pulni qaytarib olish mumkinmi?",
    answer:
      "Ha, kursni boshlaganingizdan so'ng 7 kun ichida to'liq pulni qaytarish kafolatimiz bor. Hech qanday savol so'ramaymiz.",
    category: "To'lov",
  },
  {
    id: "8",
    question: "Sertifikat beriladi?",
    answer:
      "Ha, kursni muvaffaqiyatli tugatganingizdan so'ng raqamli sertifikat beriladi. Sertifikat LinkedIn va boshqa platformalarga qo'yish uchun ham moslashtirilgan.",
    category: "Sertifikat",
  },
  {
    id: "9",
    question: "Sertifikat ish beruvchilar tomonidan tan olinadi?",
    answer:
      "Bizning sertifikatlarimiz 50+ hamkor kompaniyalar tomonidan tan olinadi. Sertifikatning haqiqiyligini QR kod orqali tekshirish mumkin.",
    category: "Sertifikat",
  },
];
