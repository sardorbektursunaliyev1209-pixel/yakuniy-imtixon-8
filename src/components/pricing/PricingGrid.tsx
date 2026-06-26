import type { PricingPlan } from "../../types/pricing.type";
import PricingCard from "./PricingCard";

interface PricingGridProps {
  plans: PricingPlan[];
}

const PricingGrid = ({ plans }: PricingGridProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Har bir kurs alohida sotib olinadi —{" "}
        <strong>bir martalik to'lov, umrbod kirish</strong>. Narxlar darajaga
        qarab boshlanғich qiymatdan; aniq narx kurs sahifasida ko'rsatilgan.
      </p>
    </div>
  );
};

export default PricingGrid;
