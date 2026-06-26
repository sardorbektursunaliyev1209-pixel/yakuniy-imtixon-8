const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "text-blue-600 bg-blue-50",
  Backend: "text-emerald-600 bg-emerald-50",
  Dizayn: "text-purple-600 bg-purple-50",
  Mobil: "text-amber-600 bg-amber-50",
  "Data Science": "text-rose-600 bg-rose-50",
  Marketing: "text-cyan-600 bg-cyan-50",
  DevOps: "text-slate-600 bg-slate-100",
  Karyera: "text-indigo-600 bg-indigo-50",
};

export const getCategoryColor = (category: string): string => {
  return CATEGORY_COLORS[category] ?? "text-gray-600 bg-gray-100";
};
