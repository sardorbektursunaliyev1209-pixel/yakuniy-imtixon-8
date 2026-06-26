import type { FaqCategory } from "../../types/faq.type";

interface FaqTabsProps {
  categories: FaqCategory[];
  activeCategory: FaqCategory | "Hammasi";
  onSelect: (category: FaqCategory | "Hammasi") => void;
}

const FaqTabs = ({ categories, activeCategory, onSelect }: FaqTabsProps) => {
  const allTabs: (FaqCategory | "Hammasi")[] = ["Hammasi", ...categories];

  return (
    <div className="bg-gray-100 rounded-xl p-1 flex items-center gap-1 overflow-x-auto">
      {allTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onSelect(tab)}
          className={`px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
            activeCategory === tab
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab === "Hammasi" ? "Umumiy" : tab}
        </button>
      ))}
    </div>
  );
};

export default FaqTabs;
