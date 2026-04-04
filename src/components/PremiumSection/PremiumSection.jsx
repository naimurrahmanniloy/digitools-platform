import React, { use, useState } from "react";
import AvaiableCards from "../AvaiableCards/AvaiableCards";
import Cart from "../Cart/Cart";

const PremiumSection = ({ fetchData, selectedProduct, setSelectedProduct }) => {
  const productData = use(fetchData);

  const [selected, setSelected] = useState("products");
  const handleSelect = (op) => {
    setSelected(op);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="text-center mt-30">
          <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
          <p className="mt-5 text-[16px] text-[#627382]">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>
      </div>

      <div>
        <div className="flex mt-10 items-center w-50 mx-auto border border-gray-200  rounded-full p-1 justify-center">
          <button
            className={`btn ${selected === "products" ? "text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "rounded-full border-none outline-0  bg-transparent "} rounded-full `}
            onClick={() => {
              handleSelect("products");
            }}
          >
            Products
          </button>
          <button
            className={`btn ${selected === "cart" ? "text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "rounded-full border-none outline-0  bg-transparent "} rounded-full`}
            onClick={() => {
              handleSelect("cart");
            }}
          >
            Cart ({selectedProduct.length})
          </button>
        </div>

        {selected === "products" ? (
          <AvaiableCards
            productData={productData}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        ) : (
          <Cart
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default PremiumSection;
