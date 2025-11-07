// Documentation contents

// Node imports
import { Fragment } from "react";


// Main component
export default function CursorCustomSVGs() {
  return (
    <Fragment>
      <h1>Custom SVGs</h1>
      <p>The cursor component comes with preset SVGs like “circle”, “cross”, “square”, and “arrow”. </p>
      <p>If you want to use a custom SVG, that’s also supported. However, the component does not accept raw SVG files directly. Instead, the SVG must be converted into a React component, for example using SVGR.</p>
    </Fragment>
  )
}

