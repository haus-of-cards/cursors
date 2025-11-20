import React from "react";
import ReactCursor from "@holmesdev/cursors";

const CrossCursor = () => {
  return (
    <ReactCursor
      showSystemCursor={false}
      layers={[
        {
          SVG: "cross",
        },
      ]}
    />
  );
};

export default CrossCursor;
