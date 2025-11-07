// Documentation contents

// Node imports
import { Fragment } from "react";


// Main component
export default function CursorExample() {

  const code = `
  import ReactCursor from "@holmesdev/cursors";

  export default function Example() {
    return (
      <ReactCursor
        showSystemCursor={false} // hide the system cursor
        layers={[
          // Define options for layer #1
          {
            SVG: "arrow",
            fill: "#ff0000",
            stroke: "#000000",
            strokeSize: 2,
            size: { width: 10, height: 10 },
            hotspot: { x: 0, y: 0 },
          },
          // Define options for layer #2
          {
            SVG: "circle",
            fill: "#00ffff",
            stroke: "#ffffff",
            strokeSize: 5,
            size: { width: 50, height: 50 },
            opacity: 0.5,
            delay: 100,
          },
          // ...define options for other layers, as required
        ]}
        effects={{
          // Define global hover effect
          hover: {
            SVG: "cross",
            fill: "#00ffff",
          },
          // Define global click effect
          click: {
            scale: 1.5,
            fill: "#ffff00",
          },
        }}
      />
    );
  }
  `


  return (
    <Fragment>
      <h1>Cursor Code Example</h1>
      <p> An example demonstrating custom layers and effects.</p>
      {/* Preserve the formatting when displaying the code  */}
      <pre><code> {code} </code></pre>
    </Fragment>
  )
}

