import SectionHeading from "../ui/SectionHeading";
import TeacherCard from "../ui/TeacherCard";
import { useInstructors } from "../../hooks/api/useInstructors";

const Teachers = () => {
  const { data: teachers = [], isLoading } = useInstructors();

  if (isLoading) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Jamoamiz"
          title="Bizning o'qituvchilar"
          subtitle="Soha mutaxassislari sizga bilim va tajriba ulashishga tayyor."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher: any) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
