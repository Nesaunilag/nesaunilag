import React from "react";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  imageClassName,
  img = "https://c.animaapp.com/WzNSGM6X/img/ef92a3ef42d2661ca159bfe314a7ca90-1-1@2x.png",
}) => {
  return (
    <div className={`w-52 shadow-[4px_4px_20px_#0000001a] h-80 rounded-[20px] bg-[#d97213] relative ${className}`}>
      <div className="w-[200px] left-5 top-5 h-60 overflow-hidden rounded-2xl bg-white absolute">
        <img
          className={`w-[200px] left-0 top-0 h-60 absolute ${
            property1 === "default" ||
            property1 === "one" ||
            property1 === "variant-11" ||
            property1 === "variant-3" ||
            property1 === "variant-4" ||
            property1 === "variant-5" ||
            property1 === "variant-6" ||
            property1 === "variant-7" ||
            property1 === "variant-8" ||
            property1 === "variant-9"
              ? "object-cover"
              : ""
          } ${imageClassName}`}
          alt="Img"
          src={
            property1 === "default"
              ? img
              : property1 === "one"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-14@2x.png"
              : property1 === "variant-3"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-15@2x.png"
              : property1 === "variant-4"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-13@2x.png"
              : property1 === "variant-5"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-16@2x.png"
              : property1 === "variant-7"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-18@2x.png"
              : property1 === "variant-8"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-19@2x.png"
              : property1 === "variant-10"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-21@2x.png"
              : property1 === "variant-6"
              ? "https://c.animaapp.com/WzNSGM6X/img/image-17@2x.png"
              : "https://c.animaapp.com/WzNSGM6X/img/image-20-1@2x.png"
          }
        />
      </div>
      <div
        className={`absolute ${
          property1 === "default"
            ? "w-[157px]"
            : property1 === "one"
            ? "w-[185px]"
            : property1 === "variant-3"
            ? "w-[178px]"
            : property1 === "variant-4"
            ? "w-[182px]"
            : property1 === "variant-5"
            ? "w-[188px]"
            : property1 === "variant-7"
            ? "w-[200px]"
            : property1 === "variant-8"
            ? "w-[213px]"
            : property1 === "variant-10"
            ? "w-[169px]"
            : property1 === "variant-6"
            ? "w-[210px]"
            : "w-[197px]"
        } ${
          property1 === "default"
            ? "left-[42px]"
            : property1 === "one"
            ? "left-7"
            : property1 === "variant-3"
            ? "left-[31px]"
            : property1 === "variant-4"
            ? "left-[29px]"
            : property1 === "variant-5"
            ? "left-[26px]"
            : property1 === "variant-7"
            ? "left-5"
            : property1 === "variant-8"
            ? "left-3.5"
            : property1 === "variant-10"
            ? "left-9"
            : property1 === "variant-6"
            ? "left-[15px]"
            : "left-[22px]"
        } ${property1 === "variant-6" ? "top-[265px]" : "top-[269px]"} ${
          property1 === "variant-6" ? "h-[46px]" : "h-[34px]"
        }`}
      >
        <div
          className={`[font-family:'Cormorant_Garamond',Helvetica] [-webkit-text-stroke:0.3px_#ffffff] tracking-[0] text-base top-0 text-white absolute font-bold text-center whitespace-nowrap leading-[normal] ${
            property1 === "one"
              ? "left-[29px]"
              : property1 === "variant-3"
              ? "left-[15px]"
              : property1 === "variant-4"
              ? "left-[17px]"
              : ["variant-10", "variant-5"].includes(property1)
              ? "left-0"
              : property1 === "variant-8"
              ? "left-8"
              : ["variant-11", "variant-9"].includes(property1)
              ? "left-[22px]"
              : property1 === "variant-6"
              ? "left-16"
              : "left-[27px]"
          }`}
        >
          {property1 === "default" && <>ADAM SMITH</>}

          {property1 === "one" && <>DAVID RICARDO</>}

          {property1 === "variant-3" && <>THOMAS MALTHUS</>}

          {property1 === "variant-4" && <>ALFRED MARSHALL</>}

          {property1 === "variant-5" && <>JOHN MAYNARD KEYNES</>}

          {property1 === "variant-7" && <>JOHN STUART MILL</>}

          {property1 === "variant-8" && <>MILTON FRIEDMAN</>}

          {["variant-11", "variant-9"].includes(property1) && <>THORSTEIN VEBLEN</>}

          {property1 === "variant-10" && <>ARTHUR CECIL PIGOU</>}

          {property1 === "variant-6" && <>KARL MAX</>}
        </div>
        <div
          className={`[font-family:'Open_Sans',Helvetica] italic tracking-[0] text-xs top-[18px] text-white absolute font-semibold text-center ${
            property1 === "variant-6" ? "w-[210px]" : ""
          } ${property1 === "variant-5" ? "left-1" : property1 === "variant-10" ? "left-[7px]" : "left-0"} ${
            property1 === "variant-6" ? "leading-[14px]" : "leading-[normal]"
          }`}
        >
          {property1 === "default" && <>Father of modern economics</>}

          {property1 === "one" && <>Theory of comparative advantage</>}

          {property1 === "variant-3" && <>Malthusian theory of population</>}

          {property1 === "variant-4" && <>Father of Neoclassical Economics</>}

          {property1 === "variant-5" && <>Founder of Keynesian Economics</>}

          {property1 === "variant-7" && <>Utilitarianism and liberal economics</>}

          {property1 === "variant-8" && <>Monetarism and free-market advocacy</>}

          {["variant-11", "variant-9"].includes(property1) && <>Theory of conspicuous consumption</>}

          {property1 === "variant-10" && <>Father of welfare economics</>}

          {property1 === "variant-6" && <p>Founding figure of socialism and communism</p>}
        </div>
      </div>
    </div>
  );
};
