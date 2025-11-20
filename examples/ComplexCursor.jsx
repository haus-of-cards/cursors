import React from "react";
import ReactCursor from "@holmesdev/cursors";

const CustomSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-1.6 -1.6 19.2 19.2"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentStroke"
      fillRule="evenodd"
      d="m8 16-4.458-3.662A6.96 6.96 0 0 1 1 6.96C1 3.116 4.156 0 8 0s7 3.116 7 6.96a6.96 6.96 0 0 1-2.542 5.378L8 16ZM3 6h2a2 2 0 0 1 2 2v1L3 7.5V6Zm8 0a2 2 0 0 0-2 2v1l4-1.5V6h-2Z"
      clipRule="evenodd"
    />
  </svg>
);

const ComplexCursor = () => {
  return (
    <ReactCursor
      enable={true}
      showSystemCursor={false}
      mixBlendMode="difference"
      zIndex={9999}
      ignoreAccessibility={true}
      hoverSelector="a, button"
      layers={[
        {
          SVG: CustomSvg,
          fill: "#00a9a6ff",
          stroke: "#1c8159ff",
          strokeSize: 1,
          size: { height: 30, width: 30 },
          effects: {
            hover: {
              SVG: "cross",
              strokeSize: 10,
              fill: "#00ff00",
              stroke: "#000000",
              scale: 0.8,
            },
            click: {
              SVG: "square",
              fill: "#1c8159ff",
              stroke: "#ffffff",
              scale: 0.5,
            },
          },
        },
        {
          SVG: "circle",
          fill: "#00a9a6ff",
          size: { height: 50, width: 50 },
          opacity: 0.1,
          delay: 150,
          effects: {
            hover: {
              opacity: 0,
            },
            click: {
              opacity: 0,
            },
          },
        },
        {
          SVG: "circle",
          fill: "#00a9a6ff",
          size: { height: 100, width: 100 },
          opacity: 0.1,
          delay: 250,
          effects: {
            hover: {
              scale: 1.3,
              opacity: 0.2,
            },
            click: {
              scale: 1.3,
              opacity: 0.2,
            },
          },
        },
      ]}
    />
  );
};

export default ComplexCursor;
