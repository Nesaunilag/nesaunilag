/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Frame475 = ({
  property1,
  className,
  IMGClassName,
  IMG = "https://c.animaapp.com/WzNSGM6X/img/img-0246-1@2x.png",
}) => {
  return (
    <div className={`w-60 shadow-[4px_4px_20px_#0000000d] h-80 rounded-[20px] bg-[#fff2e5] ${className}`}>
      <div className="w-[195px] left-[22px] top-[30px] h-[260px] overflow-hidden rounded-2xl bg-white relative">
        <img
          className={`w-[195px] left-0 top-0 object-cover h-[260px] absolute ${IMGClassName}`}
          alt="Img"
          src={
            property1 === "one"
              ? "https://c.animaapp.com/WzNSGM6X/img/img-6396@2x.png"
              : property1 === "variant-3"
              ? "https://c.animaapp.com/WzNSGM6X/img/img-1835@2x.png"
              : property1 === "variant-4"
              ? "https://c.animaapp.com/WzNSGM6X/img/dsc-9557@2x.png"
              : IMG
          }
        />
      </div>
    </div>
  );
};
