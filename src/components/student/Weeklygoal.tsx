import { Flame, Check } from "lucide-react";
import type { WeekDay } from "../../types/dashboard.type";

interface WeeklyGoalProps {
  streak: number;
  goalHours: number;
  completedHours: string;
  days: WeekDay[];
}

const WeeklyGoal = ({
  streak,
  goalHours,
  completedHours,
  days,
}: WeeklyGoalProps) => {
  const completedDays = days.filter((d) => d.done).length;
  const progress = (completedDays / days.length) * 100;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      <h3 className="font-bold text-gray-900">Haftalik maqsad</h3>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-gray-900">{streak}</span>
        <span className="text-gray-500 text-sm">/ 7 kun ketma-ket o'qildi</span>
        <Flame size={18} className="text-orange-400 ml-auto" />
      </div>

      <div>
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-gray-500">
            Haftalik maqsad: {goalHours} soat
          </span>
          <span className="font-semibold text-blue-600">{completedHours}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400">{day.label}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                day.done
                  ? "bg-blue-600 text-white"
                  : day.today
                    ? "bg-blue-100 text-blue-600 border-2 border-blue-400"
                    : "bg-gray-100 text-gray-300"
              }`}
            >
              {day.done ? <Check size={14} /> : day.today ? streak : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyGoal;
