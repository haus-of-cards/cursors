import React from "react";
import ReactCursor from "@holmesdev/cursors";

const SvgFC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="-2.4 -2.4 28.8 28.8"
      {...props}
    >
      <circle cx={12} cy={12} r={10} stroke="currentStroke" strokeWidth={1.5} />
      <path
        stroke="currentStroke"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
      />
      <path
        fill="black"
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z"
      />
      <ellipse cx={9} cy={10.5} fill="black" rx={1} ry={1.5} />
    </svg>
  );
};

const CustomSvgCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: SvgFC,
          fill: "white",
          stroke: "red",
          strokeSize: 0,
          size: { width: 50, height: 50 },
          effects: {
            hover: {
              opacity: 0.8,
              scale: 0.5,
            },
          },
        },
      ]}
    />
  );
};

export default CustomSvgCursor;
