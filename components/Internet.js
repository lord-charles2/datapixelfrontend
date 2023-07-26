import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/global-delivery.json";
import ReactPlayer from "react-player";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full  justify-center bg-gray-100">
      <div className=" relative left-0  lg:mx-[310px] pb-5 space-y-4 ">
        <div className="lg:pb-10 ">
          <p className="text-center text-[27px] text-black font-bold font-serif relative top-2">
            Everyone deserves Ultra-fast Internet
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row xxs:flex-col items-center space-x-3">
          <div className="lg:w-[60%] md:w-[60%] xxs:w-[100%]">
            <ReactPlayer
              url="/fiber2.mp4"
              controls
              width="100%"
              height="auto"
              // AutoPlay
            />
          </div>

          <Lottie options={defaultOptions} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
