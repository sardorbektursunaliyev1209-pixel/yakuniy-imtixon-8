import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface FaqHeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const FaqHero = ({ searchValue, onSearchChange }: FaqHeroProps) => {
  return (
    <div className="bg-gray-50 px-6 md:px-12 pt-8 pb-16 text-center">
      <div className="max-w-2xl mx-auto">
        <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            Bosh sahifa
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-gray-900">FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Ko'p so'raladigan savollar
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-8">
          Kurslar, to'lov va sertifikatlar haqidagi eng ko'p so'raladigan
          savollarga javoblar.
        </p>

        <div className="relative max-w-lg mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Savolingizni qidiring..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
