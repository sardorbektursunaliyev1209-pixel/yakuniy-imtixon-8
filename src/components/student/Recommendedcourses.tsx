import { Link } from "react-router-dom";
import type { RecommendedCourse } from "../../types/dashboard.type";

interface RecommendedCoursesProps {
  courses: RecommendedCourse[];
}

const RecommendedCourses = ({ courses }: RecommendedCoursesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">
          Siz uchun tavsiya etiladi
        </h2>
        <Link
          to="/courses"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Barcha kurslar →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative h-36 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-0.5 rounded-md ${course.categoryColor}`}
              >
                {course.category}
              </span>
            </div>

            <div className="p-3 flex flex-col gap-2 flex-1">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                {course.title}
              </h3>
              <p className="text-xs text-gray-400">
                {course.lessons} dars · {course.hours} soat
              </p>
              <Link
                to={`/courses/${course.id}`}
                className="mt-auto block text-center border border-gray-200 text-gray-700 text-xs font-semibold py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Batafsil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
