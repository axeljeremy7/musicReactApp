import React from "react";
import { ISVG, SVG } from "./index";

const Explicit: React.FC<ISVG> = ({
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
      enable-background="new 0 0 384 384"
      version="1.1"
      viewBox="0 0 384 384"
    >
      <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384h298.667    C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z M256,128h-85.333v42.667H256v42.667h-85.333V256    H256v42.667H128V85.333h128V128z" />
    </SVG>
  );
};

export default Explicit;
