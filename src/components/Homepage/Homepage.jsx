import heroImage from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroImage} className=" rounded-lg shadow-2xl" />
          <div>
            <button className="btn  rounded-3xl text-[16px] p-6  bg-[#e1e7ff] mb-5">
              <div className="badge badge-sm">
                <div class="relative flex items-center justify-center ">
                  <div class="absolute h-8 w-8 rounded-full bg-purple-200 opacity-50"></div>

                  <div class="absolute h-5 w-5 rounded-full bg-purple-400 opacity-70"></div>
                  <div class="relative h-3 w-3 rounded-full bg-purple-600"></div>
                </div>
              </div>{" "}
              <div className=" text-[16px] bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">
                {" "}
                New: AI-Powered Tools Available
              </div>
            </button>
            <h1 className="text-[72px] font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 text-[#627382] text-lg">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <a className="btn mr-3 rounded-3xl text-[16px] p-6 text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Explore Products
            </a>

            <button className="btn btn-outline rounded-3xl text-[16px] p-6 bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa]  border-[#4f39f6]">
              <FaPlay />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
