import React from "react";

const Img = ({ src = "defaultNoData.png", alt = "img", className, ...restProps }) => {
  return <img src={src} alt={alt} className={className} {...restProps} loading={"lazy"} />;
};

export { Img };
