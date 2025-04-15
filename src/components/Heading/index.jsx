import React from "react";
const sizes = {
    text3xl: "text-[26px] font-medium md:text-[24px] sm:text-[22px]",
    text6xl: "text-[48px] font-medium md:text-[44px] sm:text-[40px]",
    text7xl: "text-[76px] font-medium md:text-[48px]",
    headingxs: "text-[10px] font-semibold",
    headings: "text-[12px] font-semibold italic",
    headingmd: "text-[16px] font-semibold sm:text-[13px]",
    headinglg: "text-[20px] font-semibold sm:text-[17px]",
    headingxl: "text-[24px] font-semibold md:text-[22px] sm:text-[20px]",
    heading2xl: "text-[36px] font-bold md:text-[34px] sm:text-[30px]",
    heading4xl: "text-[96px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "text6xl", as, ...restProps }) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-[#000000] font-neue-haas-grotesk ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };