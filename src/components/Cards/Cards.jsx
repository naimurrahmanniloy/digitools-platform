import React, { useState } from "react";

const Cards = ({ product }) => {
  const [selected, setSelected] = useState("Buy Now");
  const handleSelect = () => {
    setSelected("Selected");
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <img
              className="border border-gray-300 rounded-[50%] p-2 size-12 "
              src={product.icon}
              alt={product.name}
            />
            {product.tag === "New" && (
              <span className="badge badge-[14px] text-[#0a883e] bg-[#dbfce7]">
                New
              </span>
            )}
            {product.tag === "Popular" && (
              <span className="badge badge-[14px] text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Popular
              </span>
            )}
            {product.tag === "Best Seller" && (
              <span className="badge badge-[14px] bg-[#fef3c6] text-[#b45309]">
                Best Seller
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{product.name}</h2>
          </div>
          <p className="text-sm text-[#627382]">{product.description}</p>
          <span className="text-xl">
            <span className="text-bold">{product.price}</span>/
            <span className="text-[#627382]">{product.period}</span>
          </span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {product.features.map((feature, ind) => {
              return (
                <li key={ind}>
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
            <button
              onClick={() => handleSelect()}
              className="btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-full"
            >
              {selected}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
