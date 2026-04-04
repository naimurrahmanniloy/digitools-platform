import React from "react";

const PricingCard = ({ plan }) => {
  console.log(plan);
  return (
    <div>
      <div
        className={` ${plan.tier === "Pro" ? "card w-96 text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-sm p-6" : "card w-96 bg-[#f9fafc] shadow-sm p-6"}`}
      >
        {plan.tier === "Pro" && (
          <span className="badge text-[16px]  mx-auto  badge-warning">
            Most Popular
          </span>
        )}
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{plan.tier}</h2>
          </div>
          <h1 className="text-3xl ">
            <span className="font-bold">${plan.price}</span>/
            <span className="text-xl">{plan.billing_cycle}</span>
          </h1>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {plan.features.map((feature, index) => {
              return (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            {plan.tier === "Pro" && (
              <button className="btn text-white btn-outline btn-block rounded-full">
                {plan.button_text}
              </button>
            )}
            {plan.tier !== "Pro" && (
              <button className="btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-full">
                {plan.button_text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
