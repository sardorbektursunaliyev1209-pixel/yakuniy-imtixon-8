import type { CourseCategory, CourseFilters } from "../../types/course.type";

const categoryList: { value: CourseCategory; count: number }[] = [
  { value: "Frontend", count: 8 },
  { value: "Backend", count: 6 },
  { value: "Dizayn", count: 5 },
  { value: "Mobil", count: 4 },
  { value: "Data Science", count: 3 },
  { value: "Marketing", count: 4 },
  { value: "DevOps", count: 2 },
];

const levelList: CourseFilters["level"][] = [
  "Barchasi",
  "Boshlovchi",
  "O'rtacha",
  "Mutaxassis",
];

const durationList: { value: "1-3" | "3-6" | "6+"; label: string }[] = [
  { value: "1-3", label: "1–3 oy" },
  { value: "3-6", label: "3–6 oy" },
  { value: "6+", label: "6+ oy" },
];

interface CoursesFiltersProps {
  filters: CourseFilters;
  onChange: (filters: CourseFilters) => void;
  onApply: () => void;
  onReset: () => void;
}

const CoursesFilters = ({
  filters,
  onChange,
  onApply,
  onReset,
}: CoursesFiltersProps) => {
  const toggleCategory = (category: CourseCategory) => {
    const isActive = filters.categories.includes(category);
    onChange({
      ...filters,
      categories: isActive
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    });
  };

  const toggleDuration = (duration: "1-3" | "3-6" | "6+") => {
    const isActive = filters.durations.includes(duration);
    onChange({
      ...filters,
      durations: isActive
        ? filters.durations.filter((d) => d !== duration)
        : [...filters.durations, duration],
    });
  };

  return (
    <aside className="h-fit w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Kategoriya */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Kategoriya
        </h3>
        <div className="mt-3 flex flex-col gap-y-3">
          {categoryList.map(({ value, count }) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-x-2.5 text-sm text-slate-600"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(value)}
                onChange={() => toggleCategory(value)}
                className="h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-200"
              />
              {value} <span className="text-slate-400">({count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Daraja */}
      <div className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Daraja
        </h3>
        <div className="mt-3 flex flex-col gap-y-3">
          {levelList.map((level) => (
            <label
              key={level}
              className="flex cursor-pointer items-center gap-x-2.5 text-sm text-slate-600"
            >
              <input
                type="radio"
                name="level"
                checked={filters.level === level}
                onChange={() => onChange({ ...filters, level })}
                className="h-4 w-4 cursor-pointer border-slate-300 text-blue-600 focus:ring-blue-200"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Narx oralig'i */}
      <div className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Narx oralig'i (so'm)
        </h3>
        <div className="mt-3 flex items-center gap-x-2">
          <input
            type="number"
            placeholder="400 000"
            value={filters.minPrice ?? ""}
            onChange={(e) =>
              onChange({
                ...filters,
                minPrice: e.target.value ? Number(e.target.value) : null,
              })
            }
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-400 focus:outline-none"
          />
          <span className="text-slate-400">—</span>
          <input
            type="number"
            placeholder="2 000 000"
            value={filters.maxPrice ?? ""}
            onChange={(e) =>
              onChange({
                ...filters,
                maxPrice: e.target.value ? Number(e.target.value) : null,
              })
            }
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Davomiyligi */}
      <div className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Davomiyligi
        </h3>
        <div className="mt-3 flex flex-col gap-y-3">
          {durationList.map(({ value, label }) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-x-2.5 text-sm text-slate-600"
            >
              <input
                type="checkbox"
                checked={filters.durations.includes(value)}
                onChange={() => toggleDuration(value)}
                className="h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-200"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-x-3 border-t border-slate-100 pt-6">
        <button
          type="button"
          onClick={onApply}
          className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Filtrlash
        </button>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-slate-500 hover:text-slate-700"
        >
          Tozalash
        </button>
      </div>
    </aside>
  );
};

export default CoursesFilters;
