import { Img, Text } from "./.."; 
import { Link } from "react-router-dom"; // Import Link
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
                className="w-[30px] h-7 lg:w-[43.1px] lg:h-10 object-cover"
                alt="Image"
                src={`${process.env.PUBLIC_URL}/images/nesa-removebg-preview 2.png`}
              />
            </div>
            <div className="text-white leading-[20px] text-[12px] md:text-[16px] font-semibold">
              Nigerian Economics Students Association
            </div>
            <div className="hidden md:flex h-12 w-px bg-white mx-4" />
            <div className="text-white text-[12px] leading-[20px] w-[10vw] lg:text-[20px]">
              University of Lagos
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
            <Link to="/"><Text className="text-white text-xl font-bold">Home</Text></Link>
            <Link to="/about"><Text className="text-white text-xl">About</Text></Link>
            <Link to="/events"><Text className="text-white text-xl">Events</Text></Link>
            <Link to="/news-and-blog"><Text className="text-white text-xl">News and Blog</Text></Link>
            <Link to="/contact"><Text className="text-white text-xl">Contact Us</Text></Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto gap-6">
          {/* Portals Links */}
          <div className="flex gap-6">
            <a href="https://studentportal.unilag.edu.ng/login"><Text className="text-white text-xl">Student Portal</Text></a>
            <a href="https://unilag.edu.ng/"><Text className="text-white text-xl">UNILAG Portal</Text></a>
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
