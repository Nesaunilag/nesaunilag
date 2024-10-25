/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Frame = ({ property1, className }) => {
  return (
    <div className={`w-60 shadow-[4px_4px_20px_#0000000d] h-80 rounded-[20px] bg-[#f6f5ff] relative ${className}`}>
      <div
        className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-sm text-black font-normal leading-[normal] absolute ${
          property1 === "variant-4" ? "top-[53px]" : property1 === "variant-3" ? "top-[67px]" : "top-[57px]"
        }`}
      >
        {property1 === "variant-4" && <>Total Cost (TC)</>}

        {property1 === "variant-2" && <>Price Elasticity of Demand</>}

        {property1 === "variant-3" && <>Expenditure Approach</>}

        {property1 === "default" && <>Quantity Demanded</>}
      </div>
      {["variant-2", "variant-3"].includes(property1) && (
        <>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-black leading-[normal] absolute ${
              property1 === "variant-2" ? "text-base" : "text-sm"
            } ${property1 === "variant-2" ? "top-[25px]" : "top-[117px]"} ${
              property1 === "variant-2" ? "font-semibold" : "font-normal"
            }`}
          >
            {property1 === "variant-3" && <>Income Approach</>}

            {property1 === "variant-2" && <>ELASTICITY</>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-sm text-black font-normal leading-[normal] absolute ${
              property1 === "variant-2" ? "top-[197px]" : "top-[168px]"
            }`}
          >
            {property1 === "variant-3" && <>Real GDP</>}

            {property1 === "variant-2" && <>Income Elasticity of Demand</>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-black leading-[normal] absolute ${
              property1 === "variant-3" ? "text-sm" : "text-base"
            } ${property1 === "variant-3" ? "top-[241px]" : "top-[78px]"} ${
              property1 === "variant-3" ? "font-normal" : "font-semibold"
            }`}
          >
            {property1 === "variant-2" && <>Ed :</>}

            {property1 === "variant-3" && <>GDP Per Capita</>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-base text-black font-semibold leading-[normal] absolute ${
              property1 === "variant-3" ? "top-[15px]" : "top-[219px]"
            }`}
          >
            {property1 === "variant-2" && <>Ed :</>}

            {property1 === "variant-3" && (
              <>
                GROSS DOMESTIC <br />
                PRODUCT (GDP)
              </>
            )}
          </div>
        </>
      )}

      {["default", "variant-2", "variant-4"].includes(property1) && (
        <div
          className={`[font-family:'Open_Sans',Helvetica] tracking-[0] text-base text-black absolute font-semibold leading-[normal] ${
            property1 === "variant-4" ? "left-[22px]" : property1 === "variant-2" ? "left-[45px]" : "left-[21px]"
          } ${property1 === "variant-4" ? "top-[21px]" : property1 === "variant-2" ? "top-32" : "top-[25px]"} ${
            property1 === "variant-2" ? "text-right" : "text-center"
          }`}
        >
          {property1 === "default" && <>DEMAND &amp; SUPPLY</>}

          {property1 === "variant-4" && <>COST FUNCTION</>}

          {property1 === "variant-2" && <>:</>}
        </div>
      )}

      {property1 === "variant-2" && (
        <>
          <div className="absolute w-[50px] h-11 top-[78px] left-[54px]">
            <div className="absolute top-0 left-0.5 [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base text-center tracking-[0] leading-[normal]">
              %ΔQd
              <br />
              %ΔP
            </div>
            <img
              className="absolute w-[50px] h-px top-6 left-0 object-cover"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-30-1.svg"
            />
          </div>
          <div className="absolute w-[50px] h-11 top-[219px] left-[54px]">
            <div className="absolute top-0 left-0.5 [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base text-center tracking-[0] leading-[normal]">
              %ΔQd
              <br />
              %ΔI
            </div>
            <img
              className="absolute w-[50px] h-px top-6 left-0 object-cover"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-30-1.svg"
            />
          </div>
          <div className="absolute w-[78px] h-11 top-[129px] left-[54px]">
            <div className="absolute top-0 left-1 [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base text-center tracking-[0] leading-[normal]">
              %ΔQd/Qd
              <br />
              %ΔP/P
            </div>
            <img
              className="absolute w-[78px] h-px top-6 left-0 object-cover"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-29-1.svg"
            />
          </div>
        </>
      )}

      {property1 === "variant-3" && (
        <>
          <p className="absolute w-[169px] top-[88px] left-[22px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
            GDP : C + I + G + (X−M)
          </p>
          <p className="absolute w-[197px] top-[138px] left-[22px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
            GDP : W + R + i + Π + (T−S)
          </p>
          <div className="absolute w-[98px] top-[187px] left-[22px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
            Nominal GDP
          </div>
          <div className="absolute w-[87px] top-[260px] left-[22px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base text-center tracking-[0] leading-[normal]">
            GDP
          </div>
          <div className="absolute w-[100px] h-[22px] top-[210px] left-[22px]">
            <div className="absolute w-[97px] top-0 left-[3px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
              GDP Deflator
            </div>
            <img
              className="absolute w-[100px] h-px top-0 left-0 object-cover"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-31-1.svg"
            />
          </div>
          <div className="absolute w-[85px] h-[22px] top-[284px] left-[22px]">
            <div className="absolute w-[82px] top-0 left-[3px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
              Population
            </div>
            <img
              className="absolute w-[85px] h-px top-0 left-0 object-cover"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-32-1.svg"
            />
          </div>
          <div className="top-[199px] left-[141px] absolute w-[29px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
            100
          </div>
          <div className="top-[272px] left-[126px] absolute w-[29px] [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base tracking-[0] leading-[normal]">
            100
          </div>
          <div className="top-[197px] left-[126px] absolute w-[9px] -rotate-45 [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl tracking-[0] leading-[normal]">
            +
          </div>
          <div className="top-[270px] left-[111px] absolute w-[9px] -rotate-45 [font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl tracking-[0] leading-[normal]">
            +
          </div>
        </>
      )}

      {["default", "variant-4"].includes(property1) && (
        <>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-sm text-black font-normal leading-[normal] absolute ${
              property1 === "variant-4" ? "top-[106px]" : "top-[110px]"
            }`}
          >
            {property1 === "default" && <>Quantity Supplied</>}

            {property1 === "variant-4" && <>Average Total Cost (ATC)</>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-sm text-black font-normal leading-[normal] absolute ${
              property1 === "variant-4" ? "top-[159px]" : "top-[163px]"
            }`}
          >
            {property1 === "default" && <>Equilibrium Price</>}

            {property1 === "variant-4" && <>Average Fixed Cost (AFC)</>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] left-[22px] tracking-[0] text-sm text-black font-normal leading-[normal] absolute ${
              property1 === "variant-4" ? "top-[209px]" : "top-[216px]"
            }`}
          >
            {property1 === "default" && <>Equilibrium Quantity</>}

            {property1 === "variant-4" && <>Average Variable Cost (AVC)</>}
          </div>
        </>
      )}

      {property1 === "default" && (
        <>
          <p className="absolute top-[78px] left-[22px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base text-center tracking-[0] leading-[normal]">
            (Qd): Qd = a - bP
          </p>
          <p className="absolute top-[131px] left-[23px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base text-center tracking-[0] leading-[normal]">
            (Qs): Qs = c + dP
          </p>
        </>
      )}

      {["default", "variant-4"].includes(property1) && (
        <div
          className={`[font-family:'Open_Sans',Helvetica] tracking-[0] text-black leading-[normal] absolute ${
            property1 === "variant-4" ? "left-[22px]" : "left-[21px]"
          } ${property1 === "variant-4" ? "text-sm" : "text-base"} ${
            property1 === "variant-4" ? "top-[259px]" : "top-[184px]"
          } ${property1 === "variant-4" ? "font-normal" : "font-semibold"}`}
        >
          {property1 === "default" && <p>(Pe): Pe = (a - c) / (b + d)</p>}

          {property1 === "variant-4" && <>Marginal Cost (MC)</>}
        </div>
      )}

      {["default", "variant-4"].includes(property1) && (
        <>
          <div
            className={`[font-family:'Open_Sans',Helvetica] tracking-[0] text-base text-black font-semibold leading-[normal] absolute ${
              property1 === "default" ? "left-[21px]" : "left-[22px]"
            } ${property1 === "default" ? "top-[238px]" : "top-[74px]"}`}
          >
            {property1 === "variant-4" && <p>TC : FC + VC</p>}

            {property1 === "default" && <p>(Qe): Qe = a - bPe</p>}
          </div>
          <div
            className={`[font-family:'Open_Sans',Helvetica] tracking-[0] text-base text-black font-semibold leading-[normal] absolute ${
              property1 === "default" ? "left-[21px]" : "left-[22px]"
            } ${property1 === "default" ? "top-[260px]" : "top-[127px]"}`}
          >
            {property1 === "variant-4" && <>ATC : TC/Q</>}

            {property1 === "default" && <p>(Qe): Qe = c + dPe</p>}
          </div>
        </>
      )}

      {property1 === "variant-4" && (
        <>
          <div className="absolute top-[180px] left-[21px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
            AFC: FC/Q
          </div>
          <div className="absolute top-[230px] left-[21px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
            AVC: VC/Q
          </div>
          <div className="absolute top-[280px] left-[21px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
            MC: ΔTC/ΔQ
          </div>
        </>
      )}
    </div>
  );
};
