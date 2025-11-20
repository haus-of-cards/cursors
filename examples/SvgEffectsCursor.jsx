import React from "react";
import ReactCursor from "@holmesdev/cursors";

const SvgEffectsCursor = () => {
  return (
    <ReactCursor
      layers={[
        {
          effects: {
            hover: {
              SVG: "square",
            },
            click: {
              SVG: "cross",
            },
          },
        },
      ]}
    />
  );
};

export default SvgEffectsCursor;
