import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { FaqItem } from "../../types/faq.type";

interface FaqAccordionItemProps {
  item: FaqItem;
}

const FaqAccordionItem = ({ item }: FaqAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm md:text-base font-medium text-gray-900">
          {item.question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-gray-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0 ml-4" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordionItem;
