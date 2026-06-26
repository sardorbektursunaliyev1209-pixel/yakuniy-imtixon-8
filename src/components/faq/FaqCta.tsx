import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FaqCta = () => {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center mt-10">
      <div className="flex items-center justify-center mb-4">
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <MessageCircle size={24} />
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Javob topa olmadingizmi?
      </h3>
      <p className="text-gray-500 mb-6">
        Bizga yozing yoki qo'ng'iroq qiling — har qanday savolingizga javob
        beramiz.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Link
          to="/contact"
          className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Xabar yozish
        </Link>
        <a
          href="tel:+998711234567"
          className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          +998 71 123 45 67
        </a>
      </div>
    </div>
  );
};

export default FaqCta;
