import MegaMenu1 from "../MegaMenu1";
import MegaMenu2 from "../MegaMenu2";
import { Button, Img, Text } from "./..";
import { Link } from "react-router-dom"; // Import Link
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false); // Hamburger menu state

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-4 bg-[#ffffff] z-10 fixed w-full`}
      style={{ boxShadow: '0px 8px 64px rgba(0, 0, 0, 0.10)' }}
    >
      <div className="container-sm flex justify-center px-4">
        <div className="w-full relative bg-white h-[76px] text-left text-base text-black font-open-sans">
          <div className="flex justify-between items-center w-full h-[70px]">
            {/* FirstDiv: Logo and Association Name */}
            <div className="flex items-center">
              <Img
                className="w-[30px] h-7 lg:w-[43.1px] lg:h-10 object-cover"
                src={`${process.env.PUBLIC_URL}/images/nesa-removebg-preview 2.png`}
                alt="Logo"
              />
              <h3 className="ml-2 lg:ml-2 leading-[20px] w-28 lg:w-[170px] text-[12px] md:text-[16px] font-semibold text-chocolate">
                Nigerian Economics Students Association
              </h3>
              <img
                className="mx-0 lg:mx-1 h-10 bg-black"
                src={`${process.env.PUBLIC_URL}/images/Vector 8.svg`}
                alt=""
              />
              <h3 className="ml-1 text-[12px] leading-[20px] w-[10vw] md:text-lg lg:text-3xl">
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
                <a href="/">
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
                <Link to="/event">
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        Events
                      </Text>
                    </Link>
                  
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                    alt="Vector"
                    className="h-[3px] w-[6px]"
                  />
                </div>
                {menuOpen1 ? <MegaMenu2 /> : null}
              </li>
              <li
                onMouseLeave={() => setMenuOpen2(false)}
                onMouseEnter={() => setMenuOpen2(true)}
              >
                <div className="flex cursor-pointer items-center gap-1">
                 <Link to="/newsblogs">
                 <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    News & Blogs
                  </Text>
                 </Link>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                    alt="Vector"
                    className="h-[3px] w-[6px]"
                  />
                </div>
                {menuOpen2 ? <MegaMenu1 /> : null}
              </li>
              <li>
                <Link to="/gallery">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[16px] font-light text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    Gallery
                  </Text>
                </Link>
              </li>
            </ul>

            {/* ThirdDiv: Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Link to="/contact">
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
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Items - Visible only when the hamburger menu is open */}
          {hamburgerOpen && (
            <div
              className="absolute h-[100vh] top-[70px] left-0 w-full bg-white shadow-md z-50 md:hidden transition-transform duration-300 ease-in-out"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <ul className="flex flex-col items-start gap-8 py-6 px-3">
                <li>
                  <a href="/" onClick={() => setHamburgerOpen(false)}>
                    <Text size="textmd" as="p" className="text-[16px] font-light text-[#000000]">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <Link to="/about" onClick={() => setHamburgerOpen(false)}>
                    <Text size="textmd" as="p" className="text-[16px] font-light text-[#000000]">
                      About
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="/events" onClick={() => setHamburgerOpen(false)}>
                    <Text size="textmd" as="p" className="text-[16px] font-light text-[#000000]">
                      Events
                    </Text>
                  </Link>
                </li>
                <li>
                  <a href="/" onClick={() => setHamburgerOpen(false)}>
                    <Text size="textmd" as="p" className="text-[16px] font-light text-[#000000]">
                      News & Blogs
                    </Text>
                  </a>
                </li>
                <li>
                  <Link to="/gallery" onClick={() => setHamburgerOpen(false)}>
                    <Text size="textmd" as="p" className="text-[16px] font-light text-[#000000]">
                      Gallery
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setHamburgerOpen(false)}>
                    <Button size="sm" className="min-w-[166px] gap-1 rounded-[22px] px-5 font-semibold bg-chocolate text-white">
                      Get in Touch
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
