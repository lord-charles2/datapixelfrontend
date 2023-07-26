"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconButton from "@mui/material/IconButton";

// import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "/public/images/newsletter.png";
import { toast } from "react-hot-toast";
const Footer = () => {
  return (
    <div className="relative bottom-0 left-0 right-0  overflow-hidden w-screen bg-blue-700">
      <footer className="py-0 border-b-[1px] border-b-gray-600">
        <div className="lg:mx-[300px] md:mx-[10px] md:flex lg:flex justify-between xxs:block xxs:space-y-4 py-3">
          <div className="flex items-center gap-x-10">
            <Image src={newsletter} width={35} height={50} alt="newsletter" />
            <h2 className="text-[28px] font-bold text-white">
              Sign Up for Newsletter
            </h2>
          </div>

          <div className="h-[45px] bg-white rounded-md p-2 md:w-[600px] lg:w-[600px] xxs:w-[380px] xxs:ml-[5px] flex justify-between items-center">
            <input
              type="text"
              className="outline-none focus:ring-0"
              placeholder="your email address"
              autoFocus
            />

            <span>
              <div className="text-white  px-3  h-[43px] relative left-[6px] flex items-center rounded-md text-[15px] hover:bg-blue-700 bg-blue-700">
                <p className="text-white">Subscribe</p>
              </div>
            </span>
          </div>
        </div>
      </footer>

      <footer className="py-4  border-b-[1px] border-b-gray-600">
        <div className="lg:mx-[300px] md:mx-[10px] md:flex lg:flex xxs:flex  xxs:items-center justify-between">
          <div className="col-4">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Contact Us
            </h4>
            <div>
              <div className="text-white ">
                Kitengela : Egerton university, <br /> njoro, main campus <br />
                PinCode: 131103
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +254 723926304
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  peterotiso93@gmail.com
                </a>
              </div>
              <div className="flex space-x-3 mt-[15px]">
                <IconButton>
                  <a href="#">
                    <Image
                      src={"/images/instagram.png"}
                      height={35}
                      width={35}
                      className="bg-slate-100 p-2 rounded-full"
                      alt="fb"
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="#">
                    <Image
                      src={"/images/twitter.png"}
                      height={35}
                      width={35}
                      className="bg-slate-100 p-2 rounded-full"
                      alt="fb"
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="#">
                    <Image
                      src={"/images/whatsup.png"}
                      height={35}
                      width={35}
                      className="bg-slate-100 p-2 rounded-full"
                      alt="fb"
                    />
                  </a>
                </IconButton>
              </div>
            </div>
          </div>

          <div className="visible md:visible xxs:hidden lg:flex flex-col">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Information
            </h4>
            <div className="flex flex-col">
              <Link href="" className="text-white py-2 mb-1">
                Blogs
              </Link>
              <Link href="/shipping-policy" className="text-white py-2 mb-1">
                Packages Policy
              </Link>
              <Link href="/refund-policy" className="text-white py-2 mb-1">
                Refund Policy
              </Link>
              <Link href="/privacy-policy" className="text-white py-2 mb-1">
                Privacy Policy
              </Link>
              <Link href="/term-conditions" className="text-white py-2 mb-1">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="visible md:flex xxs:hidden lg:flex flex-col  ">
            <h4 className="text-white mb-4 text-[20px] font-bold">Account</h4>
            <div className="flex flex-col">
              <Link href="" className="text-white py-2 mb-1">
                Faqs
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Seller
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Agent
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Contact
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                About Us
              </Link>
            </div>
          </div>

          <div className="visible md:visible xxs:hidden lg:flex flex-col ">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Quick Links
            </h4>
            <div className="flex flex-col">
              <Link href="" className="text-white py-2 mb-1">
                Hourly
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Weekly
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Monthly
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Unlimited
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Packages
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 xxs:ml-[10px]">
            <h4 className="text-white mb-4 text-[20px] font-bold">Our App</h4>
            <p className="text-white text-[12px]">
              Download our App and get extra 15% Discount
              <br /> on you first Purchase.
            </p>
            {/* stores  */}
            <div className="md:flex lg:flex xxs:block">
              {/* playstore  */}
              <IconButton onClick={() => toast.success("Coming soon!")}>
                <div className="flex items-center ">
                  <div className="flex gap-x-1 px-2  py-1 rounded-md bg-gray-100">
                    <Image
                      src="/images/playstore.png"
                      width={30}
                      height={10}
                      alt="playstore"
                      className="object-contain scale-75"
                    />
                    <div className="">
                      <p className="text-black text-[10px]">Get it on</p>
                      <p className="text-black text-[13px] font-bold">
                        Google Play
                      </p>
                    </div>
                  </div>
                </div>
              </IconButton>

              {/* apple store  */}
              <IconButton onClick={() => toast.success("Coming soon!")}>
                <div className="flex items-center ">
                  <div className="flex gap-x-1 px-2 py-1 rounded-md bg-gray-100">
                    <Image
                      src="/images/apple.png"
                      width={30}
                      height={30}
                      alt="playstore"
                      className="object-contain"
                    />
                    <div className="">
                      <p className="text-black text-[10px]">Get it on</p>
                      <p className="text-black text-[13px] font-bold">
                        Apple Store
                      </p>
                    </div>
                  </div>
                </div>
              </IconButton>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          {/* logos  */}
          <div className=" flex space-x-4">
            <IconButton>
              <div className="bg-white px-2 flex items-center space-x-3 rounded-sm">
                <Image
                  src={"/images/mcfree.png"}
                  height={30}
                  width={30}
                  className="object-contain"
                  alt="image"
                />
                <p className="text-black text-[12px] font-extrabold">
                  McAfee <br /> SECURE
                </p>
              </div>
            </IconButton>

            <IconButton>
              <Image
                src={"/images/sll.png"}
                height={80}
                width={80}
                className="object-contain bg-white rounded-sm"
                alt="image"
              />
            </IconButton>

            <IconButton className="">
              <Image
                src={"/images/trustedsite.png"}
                height={80}
                width={80}
                className="object-contain bg-white h-[36px] rounded-sm"
                alt="image"
              />
            </IconButton>
          </div>

          {/* names  */}
          <div className="flex space-x-2 text-[15px]">
            <p className="text-white">MALL</p>
            <p className="text-white">| Travel</p>
            <p className="text-white">| SELLER</p>
            <p className="text-white">| MOBILE APP</p>
          </div>

          <p className="text-center mb-0 text-white font-mono text-[11px] animate-pulse">
            &copy; {new Date().getFullYear()} Datapixel, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
