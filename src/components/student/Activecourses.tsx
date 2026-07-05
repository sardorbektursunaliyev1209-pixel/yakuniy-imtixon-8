import { Link } from "react-router-dom";
import type { Course } from "../../types/dashboard.type";

interface ActiveCoursesProps {
  courses: Course[];
}

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-green-500";
  if (progress >= 40) return "bg-blue-500";
  return "bg-orange-400";
};

const ActiveCourses = ({ courses }: ActiveCoursesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">
          Faol online kurslarim
        </h2>
        <Link
          to="/dashboard/courses"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Hammasi →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-md ${course.categoryColor}`}
              >
                {course.category}
              </span>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                {course.title}
              </h3>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/24?u=${course.id}`}
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-500">
                  {course.instructor}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-400">
                    {course.completedLessons} / {course.totalLessons} dars
                  </span>
                  <span
                    className={`font-semibold ${
                      course.progress >= 80
                        ? "text-green-500"
                        : course.progress >= 40
                          ? "text-blue-500"
                          : "text-orange-400"
                    }`}
                  >
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getProgressColor(course.progress)}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <button className="mt-1 w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-xl hover:bg-blue-700 transition-colors">
                Davom ettirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCourses;
