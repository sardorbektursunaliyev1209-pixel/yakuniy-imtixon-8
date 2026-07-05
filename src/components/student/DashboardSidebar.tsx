import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Award,
  User,
  CreditCard,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

const topLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/dashboard/courses", icon: BookOpen, label: "Mening kurslarim" },
  { to: "/dashboard/results", icon: BarChart2, label: "Natijalarim" },
  { to: "/dashboard/certificates", icon: Award, label: "Sertifikatlarim" },
];

const bottomLinks = [
  { to: "/dashboard/profile", icon: User, label: "Profil" },
  { to: "/dashboard/payments", icon: CreditCard, label: "To'lovlar" },
  { to: "/dashboard/settings", icon: Settings, label: "Sozlamalar" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-100 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-gray-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <GraduationCap size={18} />
        </span>
        <span className="font-semibold text-gray-900">O'quv Markaz</span>
      </div>

      <div className="flex flex-col flex-1 px-3 py-4 gap-6">
        {/* Yuqori linklar */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">
            Online ta'lim
          </p>
          <ul className="flex flex-col gap-1">
            {topLinks.map(({ to, icon: Icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Pastki linklar */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">
            Hisob
          </p>
          <ul className="flex flex-col gap-1">
            {bottomLinks.map(({ to, icon: Icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foydalanuvchi */}
      <div className="px-4 py-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://i.pravatar.cc/32"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Bobur Tojiev</p>
            <p className="text-xs text-green-500">Online talaba</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;