import React from "react";
import { EyeProps } from "./type";

function Eye({width = '20', height = '20', classes = ''}:EyeProps) {
  return (
    <svg
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 32 32"
    >
        <path
            // stroke="#535358"
            stroke="#7b7b85"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9 13 6 13 9z"
        ></path>
        <circle
            cx="16"
            cy="16"
            r="5"
            stroke="#7b7b85"
            // stroke="#535358"
            strokeLinejoin="round"
            strokeWidth="2"
        ></circle>
    </svg>
  );
}

export default Eye;