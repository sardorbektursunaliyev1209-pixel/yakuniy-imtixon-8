import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CourseCard from "../components/courses/CourseCard";
import CoursesFilters from "../components/courses/CoursesFilters";
import CoursesToolbar from "../components/courses/CoursesToolbar";
import CoursesPagination from "../components/courses/CoursesPagination";
import { courses } from "../data/courses";
import type { CourseFilters } from "../types/course.type";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const PAGE_SIZE = 12;

const defaultFilters: CourseFilters = {
  categories: [],
  level: "Barchasi",
  minPrice: null,
  maxPrice: null,
  durations: [],
  search: "",
  sort: "Eng mashhur",
};

const Courses = () => {
  const [filters, setFilters] = useState<CourseFilters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] =
    useState<CourseFilters>(defaultFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (appliedFilters.categories.length > 0) {
      result = result.filter((c) =>
        appliedFilters.categories.includes(c.category),
      );
    }

    if (appliedFilters.level !== "Barchasi") {
      result = result.filter((c) => c.level === appliedFilters.level);
    }

    if (appliedFilters.minPrice !== null) {
      result = result.filter((c) => c.price >= appliedFilters.minPrice!);
    }

    if (appliedFilters.maxPrice !== null) {
      result = result.filter((c) => c.price <= appliedFilters.maxPrice!);
    }

    if (appliedFilters.durations.length > 0) {
      result = result.filter((c) =>
        appliedFilters.durations.some((d) => {
          if (d === "1-3")
            return c.durationMonths >= 1 && c.durationMonths <= 3;
          if (d === "3-6") return c.durationMonths > 3 && c.durationMonths <= 6;
          return c.durationMonths > 6;
        }),
      );
    }

    if (appliedFilters.search.trim()) {
      const q = appliedFilters.search.trim().toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q),
      );
    }

    switch (appliedFilters.sort) {
      case "Arzon narx":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Qimmat narx":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Reyting bo'yicha":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [appliedFilters]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleApply = () => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    const next = { ...appliedFilters, search: value };
    setFilters(next);
    setAppliedFilters(next);
    setCurrentPage(1);
  };

  const handleSortChange = (value: CourseFilters["sort"]) => {
    const next = { ...appliedFilters, sort: value };
    setFilters(next);
    setAppliedFilters(next);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />;
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-14 text-center">
        <div className="flex items-center justify-center gap-x-1.5 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-700">
            Bosh sahifa
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-slate-800">Kurslar</span>
        </div>

        <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Barcha kurslarimiz
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          35+ ta zamonaviy online yo'nalishdan o'zingizga mosini tanlang —
          barchasi video darslar. Boshlovchidan tortib mutaxassis darajasigacha.
        </p>
      </section>
      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <CoursesToolbar
          search={filters.search}
          sort={filters.sort}
          resultCount={filteredCourses.length}
          onSearchChange={handleSearchChange}
          onSortChange={handleSortChange}
        />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <CoursesFilters
            filters={filters}
            onChange={setFilters}
            onApply={handleApply}
            onReset={handleReset}
          />

          <div>
            {paginatedCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-20 text-center">
                <p className="text-lg font-medium text-slate-700">
                  Hech qanday kurs topilmadi
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Filtrlarni o'zgartirib qayta urinib ko'ring.
                </p>
              </div>
            )}

            {filteredCourses.length > 0 && (
              <CoursesPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
