import React from "react";

const TransformSection = () => {
  return (
    <div className="mt-20">
      <section className="flex flex-col items-center justify-center min-h-100 bg-[#8B2CF5] px-6 py-16 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="max-w-2xl text-sm md:text-lg opacity-90 leading-relaxed mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br className="hidden md:block" /> Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-white text-[#8B2CF5] font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
            Explore Products
          </button>
          <button className="border-2 border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#8B2CF5] transition-all">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-widest opacity-80">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </section>
    </div>
  );
};

export default TransformSection;
