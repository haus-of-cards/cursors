// Documentation contents

// Node imports
import { Fragment } from "react";


// Main component
export default function CursorOptionsLayers() {

  
  const code = `
  <ReactCursor
    layers={[
      {
        // Layer options here... e.g.
        SVG: "circle",
      },
    ]}
  />
  `


  return (
    <Fragment>
      <h1>Layer Options</h1>
      <p>React Cursors have one or more layers with their own set of options. For example:</p>
      {/* Preserve the formatting when displaying the code  */}
      <pre><code> {code} </code></pre>

      <p> Main Props that can be used in each Cursor layer: </p>
      {/* Table listing all Props. Note that this was basically just copied & pasted from the HTML export of the Readme Markdown document */}
      <table class="table table-striped table-bordered">
      <thead>
      <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><code>SVG?</code></td>
      <td><code>SvgDefaultStyles</code> | <code>FC&lt;SVGProps&lt;SVGSVGElement&gt;&gt;</code></td>
      <td>Changes the SVG shape during the effect. Can use built-in shapes (<code>&quot;circle&quot;</code>, <code>&quot;cross&quot;</code>, <code>&quot;square&quot;</code>, <code>&quot;arrow&quot;</code>) or custom SVG component.</td>
      </tr>
      <tr>
      <td><code>fill?</code></td>
      <td><code>string</code></td>
      <td>Changes the fill color during the effect.</td>
      </tr>
      <tr>
      <td><code>stroke?</code></td>
      <td><code>string</code></td>
      <td>Changes the stroke color during the effect.</td>
      </tr>
      <tr>
      <td><code>strokeSize?</code></td>
      <td><code>number</code></td>
      <td>Changes the stroke size during the effect.</td>
      </tr>
      <tr>
      <td><code>opacity?</code></td>
      <td><code>number</code></td>
      <td>Changes the opacity (0-1) during the effect.</td>
      </tr>
      <tr>
      <td><code>scale?</code></td>
      <td><code>number</code></td>
      <td>Scales the cursor size (1 = normal, 2 = double size, 0.5 = half size). Multiplies the layer’s base size.</td>
      </tr>
      </tbody>
      </table>



    </Fragment>
  )
}

