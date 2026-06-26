import { Search, ChevronDown } from "lucide-react";
import type { CourseFilters } from "../../types/course.type";

const sortOptions: CourseFilters["sort"][] = [
  "Eng mashhur",
  "Arzon narx",
  "Qimmat narx",
  "Reyting bo'yicha",
];

interface CoursesToolbarProps {
  search: string;
  sort: CourseFilters["sort"];
  resultCount: number;
  onSearchChange: (value: string) => void;
  onSortChange: (value: CourseFilters["sort"]) => void;
}

const CoursesToolbar = ({
  search,
  sort,
  resultCount,
  onSearchChange,
  onSortChange,
}: CoursesToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Kurs nomi yoki yo'nalish..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 focus:border-blue-400 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-x-3">
        <span className="text-sm text-slate-500">
          {resultCount} ta kurs topildi
        </span>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) =>
              onSortChange(e.target.value as CourseFilters["sort"])
            }
            className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-slate-700 focus:border-blue-400 focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default CoursesToolbar;
