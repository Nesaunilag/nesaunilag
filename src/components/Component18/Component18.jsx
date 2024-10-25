/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Component18 = ({
  property1,
  className,
  newsBlogsClassName,
  vectorClassName,
  vector = "https://c.animaapp.com/WzNSGM6X/img/vector-109.svg",
  vectorClassNameOverride,
  imgClassName,
  onMouseEnter,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`relative ${state.property1 === "default" ? "w-[121px]" : "w-[230px]"} ${
        state.property1 === "default" ? "h-[25px]" : "h-[138px]"
      } ${state.property1 === "default" ? "overflow-hidden" : ""} ${className}`}
      onMouseEnter={onMouseEnter}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className="w-[115px] left-0 flex items-center top-0 gap-1 h-5 absolute"
        onClick={() => {
          dispatch("click_723");
        }}
      >
        <div
          className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-black font-semibold leading-5 whitespace-nowrap relative ${newsBlogsClassName}`}
        >
          News &amp; Blogs
        </div>
        <img className={`w-[7.5px] mr-[-0.75px] h-[4.5px] relative ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
      <div className="w-[230px] left-0 top-9 shadow-[4px_4px_20px_#0000001a] h-[102px] bg-[#fffdfb] absolute">
        <div
          className={`w-[230px] left-0 flex items-center top-0 px-[30px] py-[15px] justify-between absolute ${
            state.property1 === "variant-3" ? "bg-[#d97213]" : "bg-[#fffdfb]"
          }`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        >
          <div
            className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-normal leading-5 whitespace-nowrap relative ${
              state.property1 === "variant-3" ? "text-white" : "text-black"
            }`}
          >
            Latest News
          </div>
          <img
            className={`relative ${state.property1 === "default" ? "w-2" : "w-[5px]"} ${
              state.property1 === "default" ? "mt-[-83.00px]" : ""
            } ${state.property1 === "default" ? "mr-[-6469.00px]" : "mr-[-0.50px]"} ${
              state.property1 === "default" ? "h-1" : "h-[9px]"
            } ${vectorClassNameOverride}`}
            alt="Vector"
            src={
              state.property1 === "default"
                ? "https://c.animaapp.com/WzNSGM6X/img/vector-130@2x.png"
                : state.property1 === "variant-3"
                ? "https://c.animaapp.com/WzNSGM6X/img/vector-113.svg"
                : "https://c.animaapp.com/WzNSGM6X/img/vector-112.svg"
            }
          />
        </div>
        <div
          className={`w-[230px] left-0 flex items-center top-[52px] px-[30px] py-[15px] justify-between absolute ${
            state.property1 === "variant-4" ? "bg-[#d97213]" : "bg-[#fffdfb]"
          }`}
          onMouseEnter={() => {
            dispatch("mouse_enter_729");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave_729");
          }}
        >
          <div
            className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-normal leading-5 whitespace-nowrap relative ${
              state.property1 === "variant-4" ? "text-white" : "text-black"
            }`}
          >
            Blog Posts
          </div>
          <img
            className={`relative ${state.property1 === "default" ? "w-2" : "w-[5px]"} ${
              state.property1 === "default" ? "mt-[-135.00px]" : ""
            } ${state.property1 === "default" ? "mr-[-6469.00px]" : "mr-[-0.50px]"} ${
              state.property1 === "default" ? "h-1" : "h-[9px]"
            } ${imgClassName}`}
            alt="Vector"
            src={
              state.property1 === "default"
                ? "https://c.animaapp.com/WzNSGM6X/img/vector-130@2x.png"
                : state.property1 === "variant-4"
                ? "https://c.animaapp.com/WzNSGM6X/img/vector-113.svg"
                : "https://c.animaapp.com/WzNSGM6X/img/vector-112.svg"
            }
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click_723":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_729":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_729":
        return {
          property1: "variant-2",
        };
    }
  }

  return state;
}
