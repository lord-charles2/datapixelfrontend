"use client";
import { packages2 } from "@/utils/data";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import NestedModal from "./modal";
import { useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Custom = () => {
  const [open, setOpen] = useState(false);
  const [bandwidth, setBandwidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [validity, setValidity] = useState(0);

  const data = { bandwidth, price, speed, validity };

  const wifipackage = ({ bandwidth, price, speed, validity }) => {
    setBandwidth(bandwidth);
    setPrice(price);
    setSpeed(speed);
    setValidity(validity);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100 overflow-hidden w-screen">
      <NestedModal setOpen={setOpen} open={open} data={data} />

      <div className="lg:mx-[300px] md:mx-[10px] relative top-[0px]">
      <div className="lg:mx-[600px] md:mx-[0px]">
        <Marquee className="text-purple-500 text-[13px]" speed={55}>
          {"  "}
          {`If your voucher has not been received via SMS from senderID TextSMS | 23107 | AdvantaSMS within 10min, we kindly request that you promptly contact 0723926304 to obtain your voucher immediately. For any other inquiries, please feel free to
          reach out to 0713409806, Thank you.`}
        </Marquee>
      </div>

        <p className="text-black text-center pt-1 font-serif text-[14px]">
          Prefer to order by phone? <a href="#">0723926304 | 0713409806.</a>
        </p>

        <div className="flex justify-center relative top-1">
          <IconButton className="rounded-md">
            <Link
              href={"http://charles.net/login"}
              className="text-green-500 text-[25px] font-bold font-serif border border-green-600 py-1 px-2 rounded-md animate-pulse shadow-sm shadow-green-500"
            >
              Connect now
            </Link>
          </IconButton>
        </div>

        <div className="grid   md:grid-cols-3 lg:grid-cols-3 xxs:grid-cols-2 place-items-center mt-6">
          {packages2.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center space-y-2 border border-purple-500 bg-white rounded-md mb-6 shadow-md h-fit py-4 w-[93%]"
                key={index}
              >
                <Image
                  src={item.images}
                  alt="image"
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-black font-serif">Up to</p>
                <p className="text-[16px] font-serif text-purple-600 text-center font-bold">
                  {item.period === "Unlimited" ? "50Gb" : item.period} for{" "}
                  {item.validity === "hour"
                    ? "1hour"
                    : item.validity === "3hour"
                    ? "3hours"
                    : item.validity === "12hour"
                    ? "12hours"
                    : item.validity === "24hour"
                    ? "24hours"
                    : item.validity}
                </p>

                <p className="text-black text-[20px] font-bold">
                  Ksh {item.price}{" "}
                </p>
                <p className="text-black">+ free installation</p>
                <div className="flex flex-col items-center">
                  <div>
                    <div className=" flex items-center space-x-1">
                      <Image
                        src={"/images2/icon-bullet-pointer.svg"}
                        width={10}
                        height={10}
                        alt="images"
                      />
                      <p className="text-black">{item.streaming} streaming</p>
                    </div>
                    <div className=" flex items-center space-x-1">
                      <Image
                        src={"/images2/icon-bullet-pointer.svg"}
                        width={10}
                        height={10}
                        alt="images"
                      />
                      <p className="text-black">{item.devices} devices</p>
                    </div>
                    <div className=" flex items-center space-x-1">
                      <Image
                        src={"/images2/icon-bullet-pointer.svg"}
                        width={10}
                        height={10}
                        alt="images"
                      />
                      <p className="text-black">
                        {item.shared ? "Shared" : "Dedicated"}
                      </p>
                    </div>
                  </div>
                  <div className="text-purple-700 mt-[15px]">
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() =>
                        wifipackage({
                          price: item.price,
                          bandwidth:
                            item.period === "Unlimited" ? "50Gb" : item.period,
                          speed: item.speed,
                          validity:
                            item.validity === "month"
                              ? "30days"
                              : item.validity === "week"
                              ? "7days"
                              : item.validity === "24hour"
                              ? "24hours"
                              : item.validity === "12hour"
                              ? "12hours"
                              : item.validity === "3hour"
                              ? "3hours"
                              : item.validity === "hour"
                              ? "hour"
                              : item.validity,
                        })
                      }
                    >
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Custom;
