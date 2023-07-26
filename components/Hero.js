import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-[130px] h-[350px] overflow-hidden w-screen bg-blue-700">
      <div className="flex lg:ml-[310px] md:ml-[10px]">
        <div className="mt-[100px] absolute pl-1">
          <span className="flex space-x-2 items-center">
            <p className="lg:text-[60px] text-white md:text-[40px] xxs:text-[28px]">
              Get your
            </p>
            <p className="lg:text-[60px] md:text-[40px] xxs:text-[20px] text-purple-400 font-bold">
              first week FREE
            </p>
            <p className="text-[26px] text-purple-300">†</p>
          </span>
          <p className="lg:text-[32px] md:text-[20px] text-white  xxs:text-[17px]">
            when you switch to any monthly package*
          </p>
        </div>

        <div className="relative lg:left-[700px] md:left-[400px] xxs:left-[00px]">
          <Image
            src={"/images2/shop-fiber-2-bg-swoop.svg"}
            className="object-cover h-[350px] lg:w-[900px] md:w-[700px] xxs:w-[430px]"
            width={100}
            height={100}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
