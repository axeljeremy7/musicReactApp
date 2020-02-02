import React from "react";
import { ISVG, SVG } from "./index";

const Pulse: React.FC<ISVG> = ({
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
      <path d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z" />
    </SVG>
  );
};

export default React.memo(Pulse);
