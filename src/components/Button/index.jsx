import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[3px]",
};

const variants = {
  fill: "",
  outline: "border-[#000000] border border-solid",
};

const colors = {
  gray_50_19: "bg-[#fcfcfc19]",
  gray_50_01: "bg-[#fcfcfc]",
  indigo_900: "bg-[#03045e] text-[#ffffff]",
  orange_800: "bg-[#d97213] text-[#ffffff]",
  white_A700_01: "bg-[#ffffff]",
  black_900: "text-[#000000]",
};

const sizes = {
  "3x1": "h-[62px] px-[34px] text-[20px]",
  "2x1": "h-[60px] px-5",
  xl: "h-[52px] px-[30px] text-[20px]",
  "4x1": "h-[62px] px-[34px] text-[24px]",
  lg: "h-[48px] px-[34px] text-[16px]",
  sm: "h-[44px] px-5 text-[16px]",
  md: "h-[48px] px-4",
  xs: "h-[32px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${className} 
        ${shape ? shapes[shape] : ""} 
        ${size ? sizes[size] : ""} 
        ${variant ? variants[variant] : ""} 
        ${colors[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["3x1", "2x1", "xl", "4x1", "lg", "sm", "md", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_50_19",
    "gray_50_01",
    "indigo_900",
    "orange_800",
    "white_A700_01",
    "black_900",
  ]),
};

export { Button };
