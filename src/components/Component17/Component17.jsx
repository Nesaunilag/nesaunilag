/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Component17 = ({
  property1,
  className,
  divClassName,
  vectorClassName,
  vector = "https://c.animaapp.com/WzNSGM6X/img/vector-109.svg",
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  onMouseEnter,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`relative ${state.property1 === "default" ? "w-[66px]" : "w-[231px]"} ${
        state.property1 === "default" ? "h-[23px]" : "h-[190px]"
      } ${state.property1 === "default" ? "overflow-hidden" : ""} ${className}`}
      onMouseEnter={onMouseEnter}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className="w-[61px] flex left-0 items-center top-0 gap-1 h-5 absolute"
        onClick={() => {
          dispatch("click_770");
        }}
      >
        <div
          className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-black relative font-semibold whitespace-nowrap leading-5 ${divClassName}`}
        >
          Events
        </div>
        <img className={`w-[7.5px] mr-[-0.75px] h-[4.5px] relative ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
      <div className="w-[230px] left-px top-9 shadow-[4px_4px_20px_#0000001a] h-[154px] bg-[#fffdfb] absolute">
        <div
          className={`w-[230px] flex left-0 items-center top-0 px-[30px] py-[15px] justify-between absolute ${
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
            className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base relative font-normal whitespace-nowrap leading-5 ${
              state.property1 === "variant-3" ? "text-white" : "text-black"
            }`}
          >
            Upcoming Events
          </div>
          <img
            className={`relative ${state.property1 === "default" ? "w-2" : "w-[5px]"} ${
              state.property1 === "default" ? "mt-[-83.00px]" : ""
            } ${state.property1 === "default" ? "mr-[-6789.00px]" : "mr-[-0.50px]"} ${
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
          className={`w-[230px] flex left-0 items-center top-[52px] px-[30px] py-[15px] justify-between absolute ${
            state.property1 === "variant-4" ? "bg-[#d97213]" : "bg-[#fffdfb]"
          }`}
          onMouseEnter={() => {
            dispatch("mouse_enter_776");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave_776");
          }}
        >
          <div
            className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base relative font-normal whitespace-nowrap leading-5 ${
              state.property1 === "variant-4" ? "text-white" : "text-black"
            }`}
          >
            Featured Events
          </div>
          <img
            className={`relative ${state.property1 === "default" ? "w-2" : "w-[5px]"} ${
              state.property1 === "default" ? "mt-[-135.00px]" : ""
            } ${state.property1 === "default" ? "mr-[-6789.00px]" : "mr-[-0.50px]"} ${
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
        <div
          className={`w-[230px] flex left-0 items-center top-[104px] px-[30px] py-[15px] justify-between absolute ${
            state.property1 === "variant-5" ? "bg-[#d97213]" : "bg-[#fffdfb]"
          }`}
          onMouseEnter={() => {
            dispatch("mouse_enter_779");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave_779");
          }}
        >
          <div
            className={`[font-family:'Open_Sans',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base relative font-normal whitespace-nowrap leading-5 ${
              state.property1 === "variant-5" ? "text-white" : "text-black"
            }`}
          >
            NESA Events
          </div>
          <img
            className={`relative ${state.property1 === "default" ? "w-2" : "w-[5px]"} ${
              state.property1 === "default" ? "mt-[-187.00px]" : ""
            } ${state.property1 === "default" ? "mr-[-6789.00px]" : "mr-[-0.50px]"} ${
              state.property1 === "default" ? "h-1" : "h-[9px]"
            } ${imgClassNameOverride}`}
            alt="Vector"
            src={
              state.property1 === "default"
                ? "https://c.animaapp.com/WzNSGM6X/img/vector-130@2x.png"
                : state.property1 === "variant-5"
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
      case "click_770":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_776":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_779":
        return {
          property1: "variant-5",
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
      case "mouse_leave_776":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_779":
        return {
          property1: "variant-2",
        };
    }
  }

  return state;
}
