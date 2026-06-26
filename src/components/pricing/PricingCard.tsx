import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import type { PricingPlan } from "../../types/pricing.type";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 border transition-shadow ${
        plan.popular
          ? "border-blue-500 shadow-xl"
          : "border-gray-200 shadow-sm hover:shadow-md"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Eng mashhur
        </span>
      )}

      <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{plan.description}</p>

      <div className="mt-4 mb-6">
        <span className="text-3xl font-extrabold text-gray-900">
          {plan.price}
        </span>
        <span className="text-gray-500 text-sm ml-1">so'mdan</span>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <Check size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
            {feature.text}
          </li>
        ))}
      </ul>

      <Link
        to="/courses"
        className={`mt-8 block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Kurslarni ko'rish
      </Link>
    </div>
  );
};

export default PricingCard;
