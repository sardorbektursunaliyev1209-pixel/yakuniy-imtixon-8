import { pricingPlans, discounts, compareRows } from "../data/pricing.data";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

import PricingHero from "../components/pricing/PricingHero";
import PricingGrid from "../components/pricing/PricingGrid";
import PricingDiscounts from "../components/pricing/PricingDiscounts";
import PricingCompare from "../components/pricing/PricingCompare";
import PricingCta from "../components/pricing/PricingCta";
import Hero from "../components/home/Hero";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingHero />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <PricingGrid plans={pricingPlans} />
        <PricingDiscounts discounts={discounts} />
        <PricingCompare rows={compareRows} />
        <PricingCta />
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
