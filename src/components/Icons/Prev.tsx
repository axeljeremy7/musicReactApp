import React from "react";
import { ISVG, SVG } from "./index";

const Prev: React.FC<ISVG> = ({
  width = "32px",
  height = "32px",
  color = "black"
}) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
    </SVG>
  );
};

export default Prev;
