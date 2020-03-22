import React from "react";
import {ISVG, SVG} from "./index";

const NextTrack: React.FC<ISVG> = ({
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
            <path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z"/>
        </SVG>
    );
};

export default NextTrack;
