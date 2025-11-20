import React from "react";
import ReactCursor from "@holmesdev/cursors";

const ScaleEffectsCursor = () => {
  return (
    <ReactCursor
      layers={[
        {
          effects: {
            hover: {
              scale: 1.5,
            },
            click: {
              scale: 0.5,
            },
          },
        },
      ]}
    />
  );
};

export default ScaleEffectsCursor;
