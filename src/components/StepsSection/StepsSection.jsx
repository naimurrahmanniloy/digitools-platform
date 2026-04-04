import React from "react";
import step1 from "../../assets/user.png";
import step2 from "../../assets/package.png";
import step3 from "../../assets/rocket.png";

const StepsSection = () => {
  return (
    <div className=" mx-auto mt-30 mb-20 text-center bg-gray-100 p-10">
      <div>
        <h1 className="text-[48px] font-bold">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className=" w-10/12 mx-auto mt-30 mb-20 text-center">
        <div className="grid lg:grid-cols-3  gap-4 mt-10">
          {/* card 1 */}
          <div className="card w-96 p-13 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge text-white badge-xs badge-warning bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-2 rounded-full h-7.5 w-20% text-[18px] ml-auto ">
                01
              </span>
            </div>
            <div className="mx-auto">
              <img
                className="bg-purple-200 rounded-full p-4 size-20  mx-auto"
                src={step1}
                alt="Step 1"
              />
              <h1 className="text-xl font-bold mt-4">Create Account</h1>
              <p className="text-[14px] text-[#627382] mt-5">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-96 p-13 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge text-white badge-xs badge-warning bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-2 rounded-full h-[30px] w-20% text-[18px] ml-auto ">
                02
              </span>
            </div>
            <div className="mx-auto">
              <img
                className="bg-purple-200 rounded-full p-4 size-20  mx-auto"
                src={step2}
                alt="Step 1"
              />
              <h1 className="text-xl font-bold mt-4">Choose Products</h1>
              <p className="text-[14px] text-[#627382] mt-5">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 p-13 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge text-white badge-xs badge-warning bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-2 rounded-full h-[30px] w-20% text-[18px] ml-auto ">
                03
              </span>
            </div>
            <div className="mx-auto">
              <img
                className="bg-purple-200 rounded-full p-4 size-20  mx-auto"
                src={step3}
                alt="Step 1"
              />
              <h1 className="text-xl font-bold mt-4">Start Creating</h1>
              <p className="text-[14px] text-[#627382] mt-5">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
