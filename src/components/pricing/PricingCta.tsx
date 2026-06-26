import { Link } from "react-router-dom";

const PricingCta = () => {
  return (
    <div className="mt-16 bg-gray-50 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Qaysi kursni tanlashni bilmayapsizmi?
        </h3>
        <p className="text-gray-500 mt-1 text-sm">
          Bepul demo darslarni oching — mentor uslubi va dastur bilan tanishib,
          o'zingizga mos kursni tanlaysiz.
        </p>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <Link
          to="/courses"
          className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          Bepul demo darslar
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Konsultatsiya olish
        </Link>
      </div>
    </div>
  );
};

export default PricingCta;
