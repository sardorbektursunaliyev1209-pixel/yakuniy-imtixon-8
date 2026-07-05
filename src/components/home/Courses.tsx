import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { useCourses } from "../../hooks/api/useCourses";

const Courses = () => {
  const { data: coursesData, isLoading } = useCourses({ limit: 4 });
  const courses = Array.isArray(coursesData)
    ? coursesData
    : (coursesData?.items ?? []);

  if (isLoading) return null;

  return (
    <section id="kurslar" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Mashhur kurslar"
          title="Eng yaxshi ko'rinadigan kurslarimiz"
          subtitle="Mehnat bozorida eng talab qilinadigan zamonaviy yo'nalishlar bo'yicha amaliy ta'lim."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course: any) => (
            <article
              key={course.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={course.image ?? course.thumbnail ?? course.cover}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                    {typeof course.category === "object"
                      ? course.category?.name
                      : course.category}
                  </span>
                  <span className="flex items-center gap-x-1 text-xs text-gray-500">
                    <Icon.star />
                    <span className="font-semibold text-gray-900">
                      {course.rating ?? "4.5"}
                    </span>
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold">{course.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500">
                  {course.desc ?? course.description ?? course.excerpt}
                </p>
                <p className="mt-4 flex items-center gap-x-2 border-b border-gray-100 pb-4 text-xs text-gray-500">
                  <img
                    src={`https://i.pravatar.cc/40?u=${course.id}`}
                    alt="o'qituvchi"
                    className="h-5 w-5 rounded-full"
                  />
                  O'qituvchi:{" "}
                  {typeof course.instructor === "object"
                    ? course.instructor?.name
                    : (course.instructor ?? "")}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold">
                    {course.price
                      ? `${course.price.toLocaleString()} so'm`
                      : "Bepul"}
                  </span>
                  <Link
                    to={`/courses/${course.slug ?? course.id}`}
                    className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Barcha kurslarni ko'rish <Icon.arrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
