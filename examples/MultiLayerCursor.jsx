import React from "react";
import ReactCursor from "@holmesdev/cursors";

const MultiLayerCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: "arrow",
          hotspot: { x: 0, y: 0 },
          size: { height: 20, width: 20 },
        },
        {
          SVG: "circle",
          size: { height: 20, width: 20 },
          delay: 50,
        },
        {
          SVG: "square",
          size: { height: 30, width: 30 },
          delay: 100,
        },
      ]}
    />
  );
};

export default MultiLayerCursor;
