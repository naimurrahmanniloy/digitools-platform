import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white text-center">
        <div className="py-6 border-b md:border-b-0 md:border-r border-white/20">
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-sm opacity-80 uppercase tracking-wide">
            Active Users
          </p>
        </div>

        <div class="py-6 border-b md:border-b-0 md:border-r border-white/20">
          <h2 class="text-5xl font-bold mb-2">200+</h2>
          <p class="text-sm opacity-80 uppercase tracking-wide">
            Premium Tools
          </p>
        </div>

        <div className="py-6">
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-sm opacity-80 uppercase tracking-wide">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
