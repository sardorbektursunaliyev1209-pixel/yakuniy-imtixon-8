export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: PricingFeature[];
}

export interface Discount {
  id: string;
  icon: string;
  percent: string;
  title: string;
  description: string;
}

export interface CompareRow {
  feature: string;
  beginner: string | boolean;
  popular: string | boolean;
  pro: string | boolean;
}
