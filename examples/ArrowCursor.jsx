import React from "react";
import ReactCursor from "@holmesdev/cursors";

const ArrowCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: "arrow",
          hotspot: { x: 0, y: 0 },
        },
      ]}
    />
  );
};

export default ArrowCursor;
