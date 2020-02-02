import React from "react";
import { ISVG, SVG } from "./index";

const Snapchat: React.FC<ISVG> = ({
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
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.141 17.115c-.065.087-.117.457-.203.749-.098.337-.407.299-.75.232-.499-.097-.945-.125-1.464-.039-.898.149-1.83 1.477-3.393 1.477-1.682 0-2.557-1.321-3.49-1.477-.951-.158-1.497.096-1.826.096-.252 0-.35-.154-.388-.282-.084-.287-.138-.664-.204-.754-.646-.1-2.103-.354-2.141-1.005-.009-.169.11-.318.277-.346 2.139-.352 3.501-2.765 3.279-3.287-.158-.372-.84-.505-1.127-.619-.74-.293-.843-.63-.799-.86.061-.32.451-.535.778-.535.314 0 .869.42 1.301.181-.065-1.123-.223-2.728.177-3.624.763-1.71 2.434-2.555 4.105-2.555 1.683 0 3.366.858 4.123 2.554.399.895.242 2.493.178 3.625.408.225.913-.191 1.265-.191.345 0 .814.233.822.623.006.305-.266.568-.809.782-.292.115-.969.248-1.127.619-.227.535 1.177 2.941 3.279 3.287.167.027.287.176.277.346-.036.65-1.5.903-2.14 1.003z" />
    </SVG>
  );
};

export default Snapchat;
