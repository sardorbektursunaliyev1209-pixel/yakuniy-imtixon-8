import { Play } from "lucide-react";
import type { ContinueCourse } from "../../types/dashboard.type";

interface ContinueLearningProps {
  course: ContinueCourse;
}

const ContinueLearning = ({ course }: ContinueLearningProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
      <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
          Davom etmoqda
        </span>
      </div>

      <div className="flex flex-col justify-center p-6 gap-3 flex-1">
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
            O'qishni davom ettiring
          </p>
          <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {course.module} · {course.lesson}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="text-gray-500">Kurs progressi</span>
            <span className="font-semibold text-blue-600">
              {course.progress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
            <Play size={16} fill="white" />
            Darsni davom ettirish
          </button>
          <span className="text-sm text-gray-400">
            {course.completedLessons} / {course.totalLessons} dars tugallandi
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
