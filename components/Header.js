"use client";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import TemporaryDrawer from "./Drawer";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] overflow-hidden w-screen bg-blue-700">
      <div className="flex lg:justify-end md:justify-end xxs:justify-between w-full">
        <div className=" flex justify-between relative top-[13px] lg:pr-[320px] md:pr-[20px]">
          <TemporaryDrawer />
          <IconButton className="text-[14px] rounded-md">
            <p className="text-white font-serif xxs:text-[14px] md:text-[16px] lg:text-[16px]">
              CALL TO ORDER @ 0723926304 | 0713409806
            </p>
          </IconButton>
        </div>
      </div>
      <div className="flex justify-between items-center text-white lg:mx-[300px] md:mx-[10px] p-4">
        <IconButton className="rounded-sm">
          <div className="font-serif text-[35px] text-white font-bold animate-pulse">
            DATAPIXEL WIFI
          </div>
        </IconButton>

        <div className="flex space-x-3 items-baseline xxs:invisible md:visible lg:visible">
          <IconButton className="text-white rounded-md">
            <Link href={"/"}>
              <p className="text-white ">Home</p>
            </Link>
          </IconButton>
          <IconButton className="text-white rounded-md">
            <p className="text-white ">Help</p>
          </IconButton>
          <IconButton className="text-white rounded-md">
            <Link href={"/login"}>
              <p className="text-white ">Login</p>
            </Link>
          </IconButton>
          <IconButton className="text-white rounded-md">
            <Link href={"/register"}>
              <p className="text-white ">Register</p>
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
