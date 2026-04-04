import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = ({ fetchPricing }) => {
  const pricingData = use(fetchPricing);
  console.log(pricingData);
  const pricingPlan = pricingData.pricing_section.plans;
  console.log(pricingPlan);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-3">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 w-8/12 mx-auto mt-10">
        {pricingPlan.map((plan) => {
          return <PricingCard plan={plan} key={plan.style}></PricingCard>;
        })}
      </div>
    </div>
  );
};

export default Pricing;
