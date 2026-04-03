import React from "react";

const Cart = ({ selectedProduct }) => {
  console.log(selectedProduct);
  return (
    <div className="w-11/12 mx-auto mt-10 border border-gray-200 rounded-lg p-6">
      <h1 className="text-3xl mb-2">Your Cart</h1>
      <div className="w-11/12 mx-auto mt-10 mb-10 ">
        {selectedProduct.map((product) => {
          return (
            <div>
              <div className="card card-side bg-[#f9fafc]  shadow-sm p-4 m-10">
                <img
                  className="w-11 h-11 mt-9"
                  src={product.icon}
                  alt={product.name}
                />

                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.price}</p>
                </div>
                <div className="card-actions mt-10 justify-end">
                  <button className="text-red-500 cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
              <div className="mb-3 flex justify-between gap-2">
                <h2 className="text-2xl font-bold">Total: </h2>
                <h2 className="text-3xl">{product.price}</h2>
              </div>
            </div>
          );
        })}

        <button className="btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
