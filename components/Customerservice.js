"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../public/Message.json";

import {
  CategoryVariants,
  ExperienceVariants,
  footerVariants2,
  slideIn,
  zoomIn,
} from "@/utils/motion";
import dynamic from "next/dynamic";
import { faqs } from "@/utils/data";
import { Card } from "@mui/material";

const Customerservice = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [visibility, setVisibility] = React.useState(false);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [visible, setIsVisible] = useState(false);

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // console.log(visibility);

  const [time, setTime] = useState(new Date());
  const { hours, minutes, suffix } = getTimeParts(time);
  function getTimeParts(time) {
    const hours = time.getHours() % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const suffix = time.getHours() >= 12 ? "PM" : "AM";

    return { hours, minutes, suffix };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const redirectToMessagingApp = (message) => {
    const phoneNumber = "254740315545";
    const encodedMessage = encodeURIComponent(message);
    const url = `sms:${phoneNumber}?body=${encodedMessage}`;
    window.location.href = url;
  };

  return (
    <div className="relative text-black">
      <div
        className={`fixed top-[78vh] right-2 z-[999]`}
        onClick={() => {
          handleClick({
            vertical: "bottom",
            horizontal: "right",
          }),
            setShow(true),
            setVisibility(true);
        }}
      >
        <h2 className="text-green-500 text-[8px] font-bold relative top-[35px] left-[58px]">
          Online
        </h2>
        <Lottie options={defaultOptions} width={90} height={90} />
      </div>

      {/* part1  home*/}
      <div
        className={`bg-gray-200 w-[16rem] h-[27rem] fixed top-[33vh] right-2 z-[999] rounded-md border border-green-600 transition-all  ${
          !show ? `scale-0  translate-y-[50%] translate-x-[50%]` : `scale-100`
        }`}
      >
        {/* Cancelation */}
        <div
          className="absolute top-[-40px] right-1 rounded-full bg-gray-200 py-1 px-3 cursor-pointer hover:text-gray-400 transition-all"
          onClick={() => {
            setShow(false), setVisibility(false);
          }}
        >
          x
        </div>

        <div className="bg-green-600 w-[16rem] h-[7rem] rounded-t-md rounded-b-xl">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView={`${visibility ? `show` : `hide`}`}
            className={`text-sm text-white p-8 font-serif font-semibold relative transition-all
            ${modalShow ? `left-[70px]` : `left-0`}
            `}
          >
            ClassicsNetPro
          </motion.div>
        </div>

        {/* body1 */}
        <motion.div
          variants={ExperienceVariants}
          initial="hidden"
          whileInView={`${visibility ? `show` : `hide`}`}
          viewport={{ once: false, amount: 0.25 }}
          className={`bg-white w-[93%] h-[7rem] mx-auto rounded-lg relative top-[-55px]
          ${modalShow ? `hidden` : `visible`}
          
          `}
        >
          <p className="font-bold p-2">Chat with us</p>

          <Divider light />

          <div className="p-2 flex gap-x-2 items-center">
            <Avatar alt="Travis Howard" src="/images/customerService3.jpg" />
            <div
              onClick={() =>
                redirectToMessagingApp(
                  "Hello, could you please assist me in connecting to ClassicsNetPro? Thank you."
                )
              }
              className="cursor-pointer"
            >
              <p className="text-[12px] text-gray-500 font-semibold">
                Talk to Agent(replies in few...
              </p>
              <p className="text-[13px] text-gray-400">Dear customer,</p>
            </div>
            <p className="text-[11px] text-black font-thin relative top-[-11px] left-[10px]">{`${hours}.${minutes} ${""}${suffix}`}</p>
          </div>
        </motion.div>

        {/* body2 */}
        <motion.div
          variants={slideIn("up", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView={`${visibility ? `show` : `hide`}`}
          viewport={{ once: false, amount: 0.25 }}
          className={`bg-white w-[93%] h-[15rem] mx-auto rounded-lg relative top-[-50px] 
          ${modalShow ? `hidden` : `visible`}
          `}
        >
          <div className=" flex justify-between p-2 items-center">
            <p className="font-bold">FAQs</p>
            <div className=" border border-gray-200 p-1 cursor-pointer rounded-full">
              <Image
                src={"/images/search.png"}
                width={15}
                height={15}
                className="object-contain"
                alt="search"
              />
            </div>
          </div>
          <Divider light />

          <div className="flex flex-col gap-y-1.5 p-1.5">
            <div
              className="flex gap-3 items-center hover:bg-gray-100 transition-all rounded-md cursor-pointer"
              onClick={() =>
                redirectToMessagingApp(
                  "Hello, I wanted to let you know that I made a payment, but I haven't received the voucher yet. Can you please help me with this?. "
                )
              }
            >
              <Image
                src={"/images/cart2.png"}
                width={30}
                height={30}
                alt="cart"
              />
              <div className="flex flex-col gap-y-3 w-full">
                <p className="text-[12px] text-gray-600 font-semibold mt-[10px]">
                  Payment made, voucher not received.
                </p>
                <Divider light />
              </div>
            </div>
            <div
              className="flex gap-3 items-center hover:bg-gray-100 transition-all rounded-md cursor-pointer"
              onClick={() =>
                redirectToMessagingApp(
                  "Hello, am having trouble placing the order. Can you help? "
                )
              }
            >
              <Image
                src={"/images/order2.png"}
                width={30}
                height={30}
                alt="order"
              />
              <div className="flex flex-col gap-y-3 w-full">
                <p className="text-[12px] text-gray-600 font-semibold mt-[10px]">
                  Unable to place order.
                </p>
                <Divider light />
              </div>
            </div>
            <div
              className="flex gap-3 items-center hover:bg-gray-100 transition-all rounded-md cursor-pointer"
              onClick={() =>
                redirectToMessagingApp(
                  "Hello, I would like to request a custom WiFi package tailored to my specific needs."
                )
              }
            >
              <Image
                src={"/images/price2.png"}
                width={30}
                height={30}
                alt="price"
              />
              <div className="flex flex-col gap-y-3 w-full">
                <p className="text-[12px] text-gray-600 font-semibold mt-[10px]">
                  Custom package request.
                </p>
                <Divider light />
              </div>
            </div>
            <div
              className="flex gap-3 items-center hover:bg-gray-100 transition-all rounded-md cursor-pointer p-1 mt-[-8px]"
              onClick={() => setModalShow(true)}
            >
              <p className="text-[12px] text-gray-900 font-semibold ">
                Show more categories
              </p>
              <Image
                src={"/images/tap.gif"}
                width={25}
                height={25}
                alt="tap"
                className="object-contain relative top-[0px]"
              />
            </div>
          </div>
        </motion.div>

        <div
          className={`bg-gray-200 w-[100%] h-[20rem] mx-auto rounded-lg fixed top-[110px] z-[999]  overflow-auto
          ${!modalShow ? `hidden` : `visible`}
          
          `}
        >
          <div className="p-2 font-bold fixed bg-gray-200 w-full h-[2rem] ">
            {/* back arrow */}
            <motion.div
              variants={zoomIn(0.1, 0.3)}
              initial="hidden"
              whileInView={`${visibility ? `show` : `hide`}`}
              viewport={{ once: false, amount: 0.25 }}
              className="fixed top-[30px] bg-gray-200 hover:bg-slate-300 rounded-md p-1 cursor-pointer"
              onClick={() => setModalShow(false)}
            >
              <Image
                src={"/images/arrowL2.png"}
                width={20}
                height={20}
                alt="arrow"
              />
            </motion.div>

            {/* searchinput */}
            <motion.div
              variants={zoomIn(0.1, 0.3)}
              initial="hidden"
              whileInView={`${visibility ? `show` : `hide`}`}
              viewport={{ once: false, amount: 0.25 }}
              className="fixed top-[70px] text-[10px] flex gap-x-1 rounded-sm bg-white p-1"
            >
              <Image
                src={"/images/search.png"}
                width={20}
                height={20}
                alt="search"
              />
              <input
                type="text"
                className="outline-none focus:ring-0"
                placeholder="Search Question..."
                autoFocus
              />
            </motion.div>
          </div>

          <motion.div
            variants={CategoryVariants}
            initial="hidden"
            whileInView="show"
            className="mt-1 flex flex-col space-y-1"
          >
            <h2 className="text-red-500 text-[16px] relative top-0 left-0 font-serif font-bold">
              System errors
            </h2>

            <div className="bg-white  relative top-0 left-0 rounded-sm">
              <h2 className="text-black text-[14px] font-serif font-bold">
                User (&apos;Your voucher&apos;) has reached uptime limit
              </h2>
              <h2 className="text-[11px] text-black">
                This suggests that you have reached the maximum allowed uptime
                duration.
              </h2>
            </div>

            <div className="bg-white p-0.5 relative top-0 left-0 rounded-sm">
              <h2 className="text-black text-[14px] font-serif font-bold">
                User (&apos;Your voucher&apos;) has reached traffic limit
              </h2>
              <h2 className="text-[11px] text-black">
                This indicates that you have exceeded your allocated bandwidth
                or data limit.
              </h2>
            </div>

            <div className="bg-white p-0.5 relative top-0 left-0 rounded-sm">
              <h2 className="text-black text-[14px] font-serif font-bold">
                No more sessions allowed for (&apos;Your voucher&apos;)
              </h2>
              <h2 className="text-[11px] text-black">
                This implies that the user has reached the maximum number of
                allowed sessions/devices.
              </h2>
            </div>

            <div className="bg-white p-0.5 relative top-0 left-0 rounded-sm">
              <h2 className="text-black text-[14px] font-serif font-bold">
                Invalid username or password
              </h2>
              <h2 className="text-[11px] text-black">
                This indicates that the entered username or password or Voucher
                is incorrect or invalid.
              </h2>
            </div>
          </motion.div>
        </div>

        {/* footer */}
        <motion.div
          // variants={footerVariants2}
          // initial="hidden"
          // whileInView={`${visibility ? `show` : `hide`}`}
          // viewport={{ once: false, amount: 0.25 }}
          className="text-[10px] fixed bottom-[0px] left-[3.3rem] text-black font-serif"
        >
          Powered by{" "}
          <a
            href="https://classics-net-pro.vercel.app/"
            target="_blank"
            className="text-purple-500"
          >
            Charles_net
          </a>{" "}
          © {new Date().getFullYear()}
        </motion.div>
      </div>

      {/* part2 categories */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Customerservice), {
  ssr: false,
});
