import { Search } from "lucide-react";
import type { Category } from "../../types/blog";

interface BlogToolbarProps {
  categories: Category[];
  activeCategory: string | null;
  searchValue: string;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (value: string) => void;
}

const BlogToolbar = ({
  categories,
  activeCategory,
  searchValue,
  onCategoryChange,
  onSearchChange,
}: BlogToolbarProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Kategoriya tugmalari */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
            activeCategory === null
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          Hammasi
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => onCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
              activeCategory === category.name
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Qidiruv input */}
      <div className="relative w-full md:w-64 flex-shrink-0">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Maqola qidirish..."
          className="w-full bg-white rounded-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default BlogToolbar;
