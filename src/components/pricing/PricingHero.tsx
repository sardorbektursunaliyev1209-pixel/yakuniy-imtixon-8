import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PricingHero = () => {
  return (
    <div className="bg-gray-50 px-6 pt-8 pb-16 text-center">
      <div className="max-w-2xl mx-auto">
        <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            Bosh sahifa
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-gray-900">Narxlar</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Har bir kurs uchun adolatli narx
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Har kurs — bir martalik to'lov va umrbod kirish. Yashirin to'lovlar
          yo'q, demo darslar bepul. Quyida darajalar bo'yicha narxlar.
        </p>
      </div>
    </div>
  );
};

export default PricingHero;
