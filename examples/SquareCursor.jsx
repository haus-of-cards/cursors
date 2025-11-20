import React from "react";
import ReactCursor from "@holmesdev/cursors";

const SquareCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: "square",
        },
      ]}
    />
  );
};

export default SquareCursor;
