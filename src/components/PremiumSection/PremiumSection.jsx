import React, { use } from "react";

const PremiumSection = ({ fetchData }) => {
  const productData = use(fetchData);
  console.log(productData);
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-30">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="mt-5 text-[16px] text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      {}
    </div>
  );
};

export default PremiumSection;
