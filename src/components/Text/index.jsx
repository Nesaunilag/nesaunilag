import React from "react";

const sizes = {
  textxs: "text-[10px] font-normal not-italic",
  texts: "text-[14px] font-normal not-italic",
  textmd: "text-[16px] font-light sm:text-[13px]",
  textlg: "text-[18px] font-normal not-italic sm:text-[15px]",
  textxl: "text-[20px] font-normal not-italic sm:text-[17px]",
  text2xl: "text-[24px] font-normal not-italic md:text-[22px] sm:text-[20px]",
  text4xl: "text-[32px] font-normal md:text-[30px] sm:text-[27px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p"; // Default component type is <p>
  return (
    <Component className={`text-[#000000] font-neue-haas-grotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
