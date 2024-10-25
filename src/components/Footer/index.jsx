import { Img, Text } from "./.."; 
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-[50px] md:py-5 bg-[#d97213]`}
    >
      <div className="relative w-full h-auto bg-[#d97213] py-8 px-4 md:px-10 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full max-w-[1200px] mx-auto gap-6">
          {/* Logo and Association Name */}
          <div className="flex items-center gap-3 w-[30vw]">
            <div className="bg-white p-1 rounded">
              <Img
                className="w-12 h-[44.5px] object-cover"
                alt="Image"
                src={`${process.env.PUBLIC_URL}/images/nesa-removebg-preview 2.png`}
              />
            </div>
            <div className="text-white text-xl font-semibold">
              Nigerian Economics Students Association
            </div>
            <div className="hidden md:flex h-12 w-px bg-white mx-4" />
            <div className="text-white text-xl font-normal">
              University of Lagos
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
            <Text className="text-white text-xl font-bold">Home</Text>
            <Text className="text-white text-xl">About</Text>
            <Text className="text-white text-xl">Events</Text>
            <Text className="text-white text-xl">News and Blog</Text>
            <Text className="text-white text-xl">Contact Us</Text>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto gap-6">
          {/* Portals Links */}
          <div className="flex gap-6">
            <Text className="text-white text-xl">Student Portal</Text>
            <Text className="text-white text-xl">UNILAG Portal</Text>
          </div>

          {/* Social Media Icons (example with placeholder image) */}
          <div className="flex items-center gap-4 justify-center">
          <img
            className="w-[232px] h-8"
            alt="Frame"
            src="https://c.animaapp.com/WzNSGM6X/img/frame-185.svg"
          />
          <img
            className="w-2 h-[13px]"
            alt="Vector"
            src="https://c.animaapp.com/WzNSGM6X/img/vector-116.svg"
          />
          <img
            className="w-2 h-[13px]"
            alt="Vector"
            src="https://c.animaapp.com/WzNSGM6X/img/vector-116.svg"
          />
          </div>
        </div>
      </div>
    </footer>
  );
}
