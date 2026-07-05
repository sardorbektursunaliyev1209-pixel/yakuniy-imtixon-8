const TeacherCard = ({ teacher }: { teacher: any }) => {
  const photo = teacher.photo ?? teacher.avatar ?? teacher.image ?? "";
  const name =
    teacher.name ??
    `${teacher.firstName ?? ""} ${teacher.lastName ?? ""}`.trim();
  const role = teacher.role ?? teacher.specialty ?? teacher.position ?? "";
  const desc = teacher.desc ?? teacher.bio ?? teacher.description ?? "";
  const courses =
    teacher.courses ?? teacher.coursesCount ?? teacher.totalCourses ?? 0;
  const students =
    teacher.students ?? teacher.studentsCount ?? teacher.totalStudents ?? 0;
  const rating = teacher.rating ?? teacher.avgRating ?? 0;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <img
        src={photo}
        alt={name}
        className="mx-auto h-20 w-20 rounded-full object-cover"
      />
      <h3 className="mt-4 text-base font-semibold">{name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-600">{role}</p>
      <p className="mt-3 text-xs leading-relaxed text-gray-500">{desc}</p>
      <div className="mt-5 grid grid-cols-3 border-t border-gray-100 pt-4">
        <div>
          <p className="text-sm font-bold">{courses}</p>
          <p className="text-xs text-gray-400">Kurs</p>
        </div>
        <div>
          <p className="text-sm font-bold">{students}</p>
          <p className="text-xs text-gray-400">Talaba</p>
        </div>
        <div>
          <p className="text-sm font-bold">{rating}</p>
          <p className="text-xs text-gray-400">Reyting</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
