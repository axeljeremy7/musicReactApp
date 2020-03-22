import React from "react";
import {ISVG, SVG} from "./index";

const PrevTrack: React.FC<ISVG> = ({
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
            <path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z"/>
        </SVG>
    );
};

export default PrevTrack;
