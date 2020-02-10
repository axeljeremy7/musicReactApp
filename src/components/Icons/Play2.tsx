import React from "react";
import { ISVG, SVG } from "./index";

const Play2: React.FC<ISVG> = ({
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
      <path d="M3 22v-20l18 10-18 10z" />
    </SVG>
  );
};

export default Play2;
