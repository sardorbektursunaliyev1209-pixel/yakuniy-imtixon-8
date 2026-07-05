import { useStats } from "../../hooks/api/useStats";

const COLORS = [
  "bg-blue-50 text-blue-600",
  "bg-purple-50 text-purple-600",
  "bg-green-50 text-green-600",
  "bg-orange-50 text-orange-600",
];

const Stats = () => {
  const { data: statsData, isLoading } = useStats();

  const stats = statsData
    ? [
        { label: "Bitiruvchilar", value: `${statsData.students ?? 0}+` },
        { label: "Kurslar", value: `${statsData.courses ?? 0}+` },
        {
          label: "Tajribali o'qituvchi",
          value: `${statsData.instructors ?? 0}`,
        },
        {
          label: "Ish bilan ta'minlanish",
          value: `${statsData.certificates ?? 94}%`,
        },
      ]
    : [];

  if (isLoading) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-100/80 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div key={stat.label} className="flex items-center gap-x-4">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${COLORS[idx]}`}
            >
              ◆
            </span>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
