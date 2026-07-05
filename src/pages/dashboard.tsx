import { Search } from "lucide-react";
import DashboardSidebar from "../components/student/DashboardSidebar";
import DashboardHeader from "../components/student/Dashboardheader";
import ContinueLearning from "../components/student/Continuelearning";
import DashboardStats from "../components/student/Dashboardstats";
import ActiveCourses from "../components/student/Activecourses";
import WeeklyGoal from "../components/student/Weeklygoal";
import RecommendedCourses from "../components/student/Recommendedcourses";
import {
  continueCourse,
  stats,
  activeCourses,
  recommendedCourses,
  weekDays,
} from "../data/dashboard.data";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Asosiy kontent */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <DashboardHeader />

        <main className="flex-1 p-6 flex flex-col gap-6 max-w-7xl w-full mx-auto">
          {/* Salom qismi */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Salom, Bobur! 👋
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Online o'qishingizni davom ettiring. Bugun yangi narsa o'rganish
                ajoyib kun!
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <Search size={16} />
              Yangi kurs tanlash
            </button>
          </div>

          {/* Davom etmoqda */}
          <ContinueLearning course={continueCourse} />

          {/* Statistika */}
          <DashboardStats stats={stats} />

          {/* Faol kurslar + Haftalik maqsad */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
            <ActiveCourses courses={activeCourses} />
            <WeeklyGoal
              streak={5}
              goalHours={10}
              completedHours="7s 20daq"
              days={weekDays}
            />
          </div>

          {/* Tavsiya etiladi */}
          <RecommendedCourses courses={recommendedCourses} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
