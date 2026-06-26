import type { Discount } from "../../types/pricing.type";

interface PricingDiscountsProps {
  discounts: Discount[];
}

const PricingDiscounts = ({ discounts }: PricingDiscountsProps) => {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Chegirmalar
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
          Kamroq to'lash yo'llari
        </h2>
        <p className="text-gray-500 mt-2">
          Chegirmalar bir-biri bilan qo'shilmaydi — eng kattasi qo'llanadi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {discounts.map((discount) => (
          <div
            key={discount.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-2 shadow-sm"
          >
            <span className="text-2xl">{discount.icon}</span>
            <span className="text-blue-600 font-bold text-lg">
              {discount.percent}
            </span>
            <h4 className="font-semibold text-gray-900">{discount.title}</h4>
            <p className="text-sm text-gray-500">{discount.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingDiscounts;
