import type { Stat } from "../../types/dashboard.type";

interface DashboardStatsProps {
  stats: Stat[];
}

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">{stat.icon}</span>
            {stat.badge && (
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                {stat.badge}
              </span>
            )}
          </div>
          <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
