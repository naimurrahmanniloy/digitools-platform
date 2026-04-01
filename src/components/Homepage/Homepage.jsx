import heroImage from "../../assets/banner.png";

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
            <div className="flex">
              <button className="btn mr-3 rounded-3xl text-[16px] p-6 text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Explore Products
              </button>

              <button class="group flex items-center gap-3 px-3 py-2 border-2 border-purple-600 rounded-full text-purple-600 font-semibold transition-all hover:bg-purple-50">
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                  />
                </svg>

                <span class="text-[16px]">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
