import React from "react";
import Cards from "../Cards/Cards";

const AvaiableCards = ({ productData }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6 mt-10 w-11/12 mx-auto">
        {productData.map((product) => {
          return <Cards product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default AvaiableCards;
