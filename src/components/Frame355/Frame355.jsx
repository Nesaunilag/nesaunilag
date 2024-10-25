/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { Component16 } from "../Component16";
import { Component17 } from "../Component17";
import { Component18 } from "../Component18";

export const Frame355 = ({
  property1,
  className,
  component16VectorClassName,
  component16VectorClassNameOverride,
  component16ImgClassName,
  component16ImgClassNameOverride,
  component17VectorClassName,
  component17VectorClassNameOverride,
  component17ImgClassName,
  component18VectorClassName,
  component18VectorClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`w-[1440px] h-[76px] bg-white relative ${className}`}>
      <div className="left-[1136px] inline-flex items-center top-4 gap-1 px-5 py-2.5 rounded-[100px] bg-[#d97213] absolute">
        <div className="[font-family:'Open_Sans',Helvetica] w-fit tracking-[0] text-base text-white font-semibold leading-5 whitespace-nowrap relative">
          Get in Touch
        </div>
        <img
          className="w-6 h-6 relative"
          alt="Arrow up right"
          src="https://c.animaapp.com/WzNSGM6X/img/arrow-up-right-7.svg"
        />
      </div>
      <div className={`left-[583px] top-7 h-5 absolute ${state.property1 === "variant-6" ? "w-[413px]" : "w-[408px]"}`}>
        <div
          className={`[font-family:'Open_Sans',Helvetica] left-0 tracking-[0] text-base top-0 text-black absolute whitespace-nowrap leading-5 ${
            state.property1 === "variant-2" ? "font-semibold" : "font-light"
          }`}
        >
          Home
        </div>
        <div
          className={`[font-family:'Open_Sans',Helvetica] left-[354px] tracking-[0] text-base top-0 text-black absolute whitespace-nowrap leading-5 ${
            state.property1 === "variant-6" ? "font-semibold" : "font-light"
          }`}
        >
          Gallery
        </div>
        {state.property1 === "default" && (
          <>
            <Component16
              className="!absolute !left-[66px] !top-0"
              divClassName="!font-light"
              imgClassName={component16ImgClassNameOverride}
              imgClassNameOverride={component16VectorClassName}
              onMouseEnter={() => {
                dispatch("mouse_leave");
              }}
              property1="default"
              vector="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
              vectorClassName="!h-1 !mr-[unset] !w-[7px]"
              vectorClassName1={component16VectorClassNameOverride}
              vectorClassNameOverride={component16ImgClassName}
            />
            <Component17
              className="!h-5 !absolute !left-[142px] !top-0"
              divClassName="!font-light"
              imgClassName={component17VectorClassName}
              imgClassNameOverride={component17VectorClassNameOverride}
              onMouseEnter={() => {
                dispatch("mouse_leave_523");
              }}
              property1="default"
              vector="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
              vectorClassName="!h-1 !mr-[unset] !w-[7px]"
              vectorClassNameOverride={component17ImgClassName}
            />
            <Component18
              className="!h-5 !absolute !left-[222px] !w-28 !top-0"
              imgClassName={component18VectorClassName}
              newsBlogsClassName="!font-light"
              onMouseEnter={() => {
                dispatch("mouse_leave_534");
              }}
              property1="default"
              vector="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
              vectorClassName="!h-1 !mr-[unset] !w-[7px]"
              vectorClassNameOverride={component18VectorClassNameOverride}
            />
          </>
        )}

        {state.property1 === "variant-3" && (
          <Component16
            className="!absolute !left-[66px] !top-0"
            imgClassName={component16ImgClassNameOverride}
            imgClassNameOverride={component16VectorClassName}
            property1="default"
            vector="https://c.animaapp.com/WzNSGM6X/img/vector-109.svg"
            vectorClassName1={component16VectorClassNameOverride}
            vectorClassNameOverride={component16ImgClassName}
          />
        )}

        {["variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(state.property1) && (
          <div
            className={`inline-flex items-center top-0 gap-1 absolute ${
              state.property1 === "variant-3" ? "left-[142px]" : "left-[66px]"
            }`}
          >
            <div className="[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-black relative font-light whitespace-nowrap leading-5">
              {state.property1 === "variant-3" && <>Events</>}

              {["variant-2", "variant-4", "variant-5", "variant-6"].includes(state.property1) && <>About</>}
            </div>
            <img
              className="w-[7px] mr-[-0.50px] h-1 relative"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
            />
          </div>
        )}

        {state.property1 === "variant-4" && (
          <Component17
            className="!h-5 !absolute !left-[142px] !top-0"
            imgClassName={component17VectorClassName}
            imgClassNameOverride={component17VectorClassNameOverride}
            property1="default"
            vector="https://c.animaapp.com/WzNSGM6X/img/vector-109.svg"
            vectorClassNameOverride={component17ImgClassName}
          />
        )}

        {["variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(state.property1) && (
          <div
            className={`inline-flex items-center top-0 gap-1 absolute ${
              ["variant-3", "variant-4"].includes(state.property1) ? "left-[222px]" : "left-[142px]"
            }`}
          >
            <div className="[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-black relative font-light whitespace-nowrap leading-5">
              {["variant-3", "variant-4"].includes(state.property1) && <>News &amp; Blogs</>}

              {["variant-2", "variant-5", "variant-6"].includes(state.property1) && <>Events</>}
            </div>
            <img
              className="w-[7px] mr-[-0.50px] h-1 relative"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
            />
          </div>
        )}

        {state.property1 === "variant-5" && (
          <Component18
            className="!h-5 !absolute !left-[222px] !top-0"
            imgClassName={component18VectorClassName}
            property1="default"
            vector="https://c.animaapp.com/WzNSGM6X/img/vector-109.svg"
            vectorClassNameOverride={component18VectorClassNameOverride}
          />
        )}

        {["variant-2", "variant-6"].includes(state.property1) && (
          <div className="inline-flex left-[222px] items-center top-0 gap-1 absolute">
            <div className="[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-black font-light leading-5 whitespace-nowrap relative">
              News &amp; Blogs
            </div>
            <img
              className="w-[7px] mr-[-0.50px] h-1 relative"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-128.svg"
            />
          </div>
        )}
      </div>
      <div className="w-[301px] left-[140px] top-[18px] h-10 absolute">
        <div className="[font-family:'Lato',Helvetica] w-[74px] left-[223px] tracking-[0] text-base top-0 text-black font-normal leading-5 absolute">
          University of Lagos
        </div>
        <div className="[font-family:'Open_Sans',Helvetica] w-[167px] left-12 tracking-[0] text-base top-0 text-[#d97213] font-semibold leading-5 absolute">
          Nigerian Economics Students Association
        </div>
        <img
          className="w-[43px] left-0 top-0 object-cover h-10 absolute"
          alt="Nesa removebg"
          src="https://c.animaapp.com/WzNSGM6X/img/nesa-removebg-preview-2-7@2x.png"
        />
        <img
          className="w-px left-[215px] top-0 h-10 absolute"
          alt="Vector"
          src="https://c.animaapp.com/WzNSGM6X/img/vector-8-8.svg"
        />
      </div>
      <img
        className={`top-[51px] h-[3px] absolute ${state.property1 === "variant-2" ? "w-[47px]" : "w-px"} ${
          state.property1 === "variant-2" ? "left-[583px]" : "left-[605px]"
        }`}
        alt="Line"
        src={
          state.property1 === "variant-2"
            ? "https://c.animaapp.com/WzNSGM6X/img/line-1-2.svg"
            : "https://c.animaapp.com/WzNSGM6X/img/line-5-7@2x.png"
        }
      />
      <img
        className={`top-[51px] h-[3px] absolute ${state.property1 === "variant-3" ? "w-[58px]" : "w-px"} ${
          state.property1 === "variant-3" ? "left-[648px]" : "left-[676px]"
        }`}
        alt="Line"
        src={
          state.property1 === "variant-3"
            ? "https://c.animaapp.com/WzNSGM6X/img/line-2-3.svg"
            : "https://c.animaapp.com/WzNSGM6X/img/line-5-7@2x.png"
        }
      />
      <img
        className={`top-[51px] h-[3px] absolute ${state.property1 === "variant-4" ? "w-[60px]" : "w-px"} ${
          state.property1 === "variant-4" ? "left-[726px]" : "left-[754px]"
        }`}
        alt="Line"
        src={
          state.property1 === "variant-4"
            ? "https://c.animaapp.com/WzNSGM6X/img/line-3-4.svg"
            : "https://c.animaapp.com/WzNSGM6X/img/line-5-7@2x.png"
        }
      />
      <img
        className={`top-[51px] h-[3px] absolute ${state.property1 === "variant-5" ? "w-[116px]" : "w-px"} ${
          state.property1 === "variant-5" ? "left-[805px]" : "left-[859px]"
        }`}
        alt="Line"
        src={
          state.property1 === "variant-5"
            ? "https://c.animaapp.com/WzNSGM6X/img/line-4-5.svg"
            : "https://c.animaapp.com/WzNSGM6X/img/line-5-7@2x.png"
        }
      />
      <img
        className={`top-[51px] h-[3px] absolute ${state.property1 === "variant-6" ? "w-[55px]" : "w-px"} ${
          state.property1 === "variant-6" ? "left-[937px]" : "left-[962px]"
        }`}
        alt="Line"
        src={
          state.property1 === "variant-6"
            ? "https://c.animaapp.com/WzNSGM6X/img/line-5-6.svg"
            : "https://c.animaapp.com/WzNSGM6X/img/line-5-7@2x.png"
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_523":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_534":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_523":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_534":
        return {
          property1: "default",
        };
    }
  }

  return state;
}
