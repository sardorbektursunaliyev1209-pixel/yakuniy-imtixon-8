const Endpoints = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  public: {
    courses: "/public/courses",
    courseBySlug: (slug: string) => `/public/courses/${slug}`,
    instructors: "/public/instructors",
    instructorById: (id: string) => `/public/instructors/${id}`,
    stats: "/public/stats",
    testimonials: "/public/testimonials",
  },
  blog: {
    getAll: "/public/blog",
    getCategories: "/public/blog/categories",
    getOne: (slug: string) => `/public/blog/${slug}`,
  },
  contact: {
    send: "/public/contact",
  },
  student: {
    enrollments: "/student/enrollments",
    checkout: "/student/enrollments/checkout",
  },
};

export default Endpoints;
