import { Icon } from "../ui/Icon";
import TeacherCard from "../ui/TeacherCard";
import { useInstructors } from "../../hooks/api/useInstructors";

const TeachersGrid = () => {
  const { data: teachers = [], isLoading } = useInstructors();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher: any) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-x-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-700">
          <Icon.arrowLeft />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium bg-blue-600 text-white">
          1
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-700">
          <Icon.arrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeachersGrid;
