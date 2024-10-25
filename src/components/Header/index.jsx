import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false); // Hamburger menu state

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-4 bg-[#ffffff] z-10 relative`}
    >
      <div className="container-sm flex justify-center">
        <div className="w-full relative bg-white h-[76px] text-left text-base text-black font-open-sans">
          <div className="flex justify-between items-center w-full h-[70px]">
            {/* FirstDiv: Logo and Association Name */}
            <div className="flex items-center">
              <Img
                className="w-[43.1px] h-10 object-cover"
                src={`${process.env.PUBLIC_URL}/images/nesa-removebg-preview 2.png`}
                alt="Logo"
              />
              <h3 className="ml-2 leading-[20px] w-[170px] font-semibold text-chocolate text-base md:text-lg">
                Nigerian Economics Students Association
              </h3>
              <img
                className="mx-1 h-10 bg-black"
                src={`${process.env.PUBLIC_URL}/images/Vector 8.svg`}
                alt=""
              />
              <h3 className="ml-1 leading-[20px] w-[5vw] text-base md:text-lg">
                University of Lagos
              </h3>
            </div>

            {/* Hamburger Menu Icon - Visible only on mobile */}
            <div className="md:hidden">
              <Button
                onClick={() => setHamburgerOpen(!hamburgerOpen)} // Toggle the menu state
                className="p-2"
              >
                <Img
                  src={
                    hamburgerOpen
                      ? `${process.env.PUBLIC_URL}/images/cancel.svg`
                      : `${process.env.PUBLIC_URL}/images/hamburger-menu.svg`
                  }
                  alt="Menu"
                  className="w-8 h-8"
                />
              </Button>
            </div>

            {/* SecondDiv: Menu Items - Hidden on mobile, visible on larger screens */}
            <ul className={`hidden md:flex flex-wrap justify-center gap-6`}>
              <li>
                <a href="#">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Home
                  </Text>
                </a>
              </li>
              <li
                onMouseLeave={() => setMenuOpen(false)}
                onMouseEnter={() => setMenuOpen(true)}
              >
                <div className="flex cursor-pointer items-center gap-1">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    About
                  </Text>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                    alt="Vector"
                    className="h-[3px] w-[6px]"
                  />
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
              <li
                onMouseLeave={() => setMenuOpen1(false)}
                onMouseEnter={() => setMenuOpen1(true)}
              >
                <div className="flex cursor-pointer items-center">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Events
                  </Text>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                    alt="Vector"
                    className="h-[3px] w-[6px]"
                  />
                </div>
                {menuOpen1 ? <MegaMenu1 /> : null}
              </li>
              <li
                onMouseLeave={() => setMenuOpen2(false)}
                onMouseEnter={() => setMenuOpen2(true)}
              >
                <div className="flex cursor-pointer items-center gap-1">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    News & Blogs
                  </Text>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                    alt="Vector"
                    className="h-[3px] w-[6px]"
                  />
                </div>
                {menuOpen2 ? <MegaMenu1 /> : null}
              </li>
              <li>
                <a href="#">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Gallery
                  </Text>
                </a>
              </li>
            </ul>

            {/* ThirdDiv: Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button
                size="sm"
                rightIcon={
                  <img
                    src={`${process.env.PUBLIC_URL}/images/arrow-up-right.svg`}
                    alt="Arrow-up-right"
                    className="h-[24px] w-[24px]"
                  />
                }
                className="min-w-[166px] gap-1 rounded-[22px] px-5 font-semibold bg-chocolate text-white"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Hamburger Menu Items - Visible only when the hamburger menu is open */}
          {hamburgerOpen && (
            <div
              className="absolute top-[70px] left-0 w-full bg-white shadow-md z-50 md:hidden transition-transform duration-300 ease-in-out"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <ul className="flex flex-col items-center gap-4 py-6">
                <li>
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      About
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      Events
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      News & Blogs
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      Gallery
                    </Text>
                  </a>
                </li>
                <li>
                  <Button
                    size="sm"
                    className="min-w-[166px] gap-1 rounded-[22px] px-5 font-semibold bg-chocolate text-white"
                  >
                    Get in Touch
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
