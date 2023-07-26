"use client";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const page = () => {
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <div className="mt-[138px]" style={{ backgroundColor: "#280351" }}>
        {/* hero  */}
        <div className="lg:flex md:flex xxs:flex xxs:flex-col md:flex-row lg:flex-row  justify-between items-center lg:mx-[320px] md:mx-[10px] xxs:mx-[5px]">
          <div>
            <p className="text-purple-400 lg:text-[40px] md:text-[40px] xxs:text-[30px] font-bold xxs:text-center">
              Internet built for the future of Classics.
            </p>
            <p className="text-white lg:text-[20px] md:text-[20px] xxs:text-[14px] lg:visible md:visible xxs:invisible">
              Whatever the future holds, Lumos fiber Optics makes it faster.
            </p>
          </div>
          <div>
            <Image
              src={"/images2/AdobeStock_424513203.png"}
              className="w-[400px] h-[300px] object-contain"
              width={380}
              height={380}
              alt="image"
            />
          </div>
        </div>
        <Image
          src={"images2/short-lumos-purple-bg.svg"}
          width={1000}
          height={50}
          className="w-screen object-cover h-[100px]"
          alt="svg"
        />

        {/* body  */}
        <div className="bg-gray-100 min-h-[50vh] ">
          <div className="lg:mx-[320px] md:mx-[10px] xxs:mx-[5px]">
            <p className="text-black text-center text-[30px] font-bold font-serif relative top-4">
              Welcome back Charles
            </p>
            <div className="mt-5 flex lg:flex-row md:flex-row xxs:flex-col md:space-x-4  lg:space-x-4  xxs:space-y-4 items-center justify-center">
              <div className="border lg:w-[47%] md:w-[47%] xxs:w-[94%] h-[40vh] border-purple-500  overflow-hidden shadow-md">
                <p className="text-black text-center font-serif text-[25px]">
                  My Account
                </p>
                <div>
                  <div className="flex items-center space-x-2 ml-[20px] mb-2">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Account Balance</p>
                    <p className="text-black">Ksh :0</p>
                  </div>

                  <div className="flex items-center space-x-2 ml-[20px] mb-2">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Data Balance</p>
                    <p className="text-black">0 Mbps</p>
                  </div>

                  <div className="flex items-center space-x-2 ml-[20px] mb-[20px]">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Offer Balance</p>
                    <p className="text-black">0 Mbps</p>
                  </div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>My Plans</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Free Plans</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <div className="px-5 relative top-[40px]">
                    <Button
                      variant="outlined"
                      fullWidth
                      color="inherit"
                      className="text-purple-600 p-2"
                    >
                      <p className="text-purple-600">Claim Mpesa Payment</p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border lg:w-[47%] md:w-[47%] xxs:w-[94%] h-[40vh] border-purple-500 shadow-md">
                <p className="text-black text-center font-serif text-[25px]">
                  Profile
                </p>
                <div>
                  <div className="flex items-center space-x-2 ml-[20px] mb-2">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Username</p>
                    <p className="text-black">charlesdevsmith</p>
                  </div>

                  <div className="flex items-center space-x-2 ml-[20px] mb-2">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Email</p>
                    <p className="text-black">mwanikicharles226@gmail.com</p>
                  </div>

                  <div className="flex items-center space-x-2 ml-[20px] mb-[20px]">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">Mobile</p>
                    <p className="text-black">0740315545</p>
                  </div>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Notifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Membership</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <div className="px-5 relative top-[40px]">
                    <Button
                      variant="outlined"
                      fullWidth
                      color="inherit"
                      className="text-purple-600 p-2"
                    >
                      <p className="text-purple-600">Edit Profile</p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* semifooter  */}
            <div className="py-4 bg-gray-100">
              <div className="">
                <p className="text-black text-center text-[30px] font-serif font-bold py-4">
                  Why Lumos Classics fiber?
                </p>
                <div className="flex md:justify-evenly xxs:flex-col md:flex-row lg:flex-row xxs:space-y-6 lg:justify-evenly space-x-6">
                  <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/776714813?h=dc9e7028f6"
                    width="640"
                    height="360"
                    className="xxs:w-screen xxs:h-[200px] md:w-[640px] lg:w-[640px] md:h-[400px] lg:h-[400px] object-contain"
                  ></iframe>
                  <div className="">
                    <div
                      className="flex space-x-2  justify-center items-center
                  "
                    >
                      <Divider className="bg-purple-600 w-[100px]" />
                      <p className="text-black font-serif text-[20px]">
                        Internet built for every need
                      </p>
                      <Divider className="bg-purple-600 w-[100px]" />
                    </div>
                    <div className="mt-3 flex flex-col space-y-5">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={"/images2/icon-wifi.svg"}
                          width={70}
                          height={70}
                          alt="image"
                        />
                        <p className="text-black">
                          <a className="text-[17px] font-bold">
                            Built for whole-home.
                            <br />
                          </a>
                          Wi-Fi Stream and share from any room with whole-home
                          coverage.
                        </p>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={"/images2/icon-built-for-the-future.svg"}
                            width={70}
                            height={70}
                            alt="image"
                          />
                          <p className="text-black">
                            <a className="text-[17px] font-bold">
                              Built for multiple devices. <br />
                            </a>
                            Get fast connections for every device in every room.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={"/images2/icon-built-for-speed.svg"}
                            width={70}
                            height={70}
                            alt="image"
                          />
                          <p className="text-black">
                            <a className="font-bold text-[17px]">
                              Built for speed .<br />
                            </a>
                            Upload and download at lightning speed without
                            delays.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={"/images2/icon-2000x2000-speed.svg"}
                            width={70}
                            height={70}
                            alt="image"
                          />
                          <p className="text-black">
                            <a className="text-[17px] font-bold">
                              Built for unlimited data. <br />
                            </a>
                            We’ll never cap your data or throttle your speeds,
                            unlike cable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
