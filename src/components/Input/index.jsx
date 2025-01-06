import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]",
    };

const variants = {
    underline: {
        white_A700_01: "text-[#ffffff] border-b border-[#ffffff] border-solid",
    },

    fill: {
        gray_50: "bg-[#fbfbfb] text-[#000000]",
    },
   };


const sizes = {
    xs: "h-[36px] px-3 text-[16px]",
    sm: "h-[82px] px-3 text-[20px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type="text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "underline",
            size = "xs",
            color = "",
            ...restProps
        },
        ref, 
    ) => { 
        return (
            <label className={`${className} flex items-center justify-center cursor-text font-light ${shape && shapes [shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}>
                {!!label && label}
                {!! prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs", "sm"]),
    variant: PropTypes.oneOf(["underline", "fill"]),
    color: PropTypes.oneOf(["white_A700_01", "gray_50"]),
};
export { Input };