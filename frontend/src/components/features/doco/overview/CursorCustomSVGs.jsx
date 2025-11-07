// Documentation contents

// Node imports
import { Fragment } from "react";


// Main component
export default function CursorCustomSVGs() {

  const code = `
  npm install --save-dev vite-plugin-svgr

  
  // vite.config.js
  plugins: [ svgr() ],


  import MyCustomSVG from "/path/to/file.svg"

  export default function Example() {
    return (
      <ReactCursor layers={[
        {
          SVG: MyCustomSVG, // can now fully-customize your SVG through the cursor component
          fill: "red",
          stroke: "blue",
        }
      ]}>
    );
  `


  return (
    <Fragment>
      <h1>Custom SVGs</h1>
      <p>The cursor component comes with preset SVGs like “circle”, “cross”, “square”, and “arrow”. </p>
      <p>If you want to use a custom SVG, that’s also supported. However, the component does not accept raw SVG files directly. Instead, the SVG must be converted into a React component, for example using SVGR.</p>
      <p>For instance, with Vite:</p>
      {/* Preserve the formatting when displaying the code  */}
      <pre><code> {code} </code></pre>

    </Fragment>
  )
}

