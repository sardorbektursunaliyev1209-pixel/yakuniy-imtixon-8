import { Link } from "react-router-dom";
import { Star, Clock, BookOpen } from "lucide-react";
import type { Course } from "../../types/course.type";

const categoryStyles: Record<Course["category"], string> = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Dizayn: "bg-violet-50 text-violet-600",
  Mobil: "bg-amber-50 text-amber-600",
  "Data Science": "bg-rose-50 text-rose-600",
  Marketing: "bg-sky-50 text-sky-600",
  DevOps: "bg-slate-100 text-slate-600",
};

const formatPrice = (value: number) => `${value.toLocaleString("uz-UZ")} so'm`;

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryStyles[course.category]}`}
          >
            {course.category}
          </span>
          <span className="flex items-center gap-x-1 text-sm font-medium text-slate-700">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900">
          {course.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          {course.description}
        </p>

        <div className="mt-4 flex items-center gap-x-4 text-xs text-slate-400">
          <span className="flex items-center gap-x-1.5">
            <Clock className="h-3.5 w-3.5" />
            {course.durationMonths} oy
          </span>
          <span className="flex items-center gap-x-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessonsCount} dars
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 px-5 py-4">
        <div className="flex flex-col">
          {course.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(course.oldPrice)}
            </span>
          )}
          <span className="text-base font-bold text-slate-900">
            {formatPrice(course.price)}
          </span>
        </div>
        <Link
          to={`/courses/${course.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Batafsil
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
