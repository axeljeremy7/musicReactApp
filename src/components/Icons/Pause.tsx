import React from "react";
import {ISVG, SVG} from "./index";

const Pause: React.FC<ISVG> = ({width = "32px", height = "32px", color = "black"}) => {
    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 24 24"
        >
            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
        </SVG>
    );
};

export default Pause;
