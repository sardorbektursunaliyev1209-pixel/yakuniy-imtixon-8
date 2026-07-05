import { Menu, Search } from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
}

const DashboardHeader = ({ onMenuToggle }: DashboardHeaderProps) => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Online ta'lim</h1>
      </div>

      <div className="relative hidden md:block w-72">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Kurs qidirish..."
          className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-gray-900">Bobur Tojiev</p>
            <p className="text-xs text-green-500">Online talaba</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
