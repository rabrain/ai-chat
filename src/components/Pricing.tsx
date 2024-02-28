"use client";
import { plans, pricingItems } from "@/constants/pricings";
import React, { useState } from "react";
import PricingCart from "./PricingCart";

const Pricing = () => {
  const [plan, setPlan] = useState("Monthly");
  return (
    <>
      <div className="bg-slate-800 font-bold cursor-pointer text-white py-4 px-1.5  rounded-md my-8 text-base">
        {plans.map((item, index) => (
          <span
            key={index}
            className={`p-3  ${plan === item && "bg-sky-600  rounded-lg"}`}
            onClick={() => {
              setPlan(item);
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingItems.map((item, index) => (
          <PricingCart key={index} {...item} mode={plan} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
