import React from "react";
import ReactCursor from "@holmesdev/cursors";

const CircleCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: "circle",
        },
      ]}
    />
  );
};

export default CircleCursor;
