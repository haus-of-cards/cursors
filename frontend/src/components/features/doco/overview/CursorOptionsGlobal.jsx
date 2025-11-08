// Documentation contents

// Node imports
import { Fragment } from "react";


// Main component
export default function CursorOptionsGlobal() {

  const code = `
  <ReactCursor enable={false} />
  `;

  const sizeType = `{ height: number, width: number }`;
  const sizeDefault = `{ height: 25, width: 25 }`;
  const hotSpotType = `{ x: number, y: number }`;
  const hotSpotDefault = `{ x: width/2, y: height/2 }`;


  return (
    <Fragment>
      <h1>Global Options</h1>
      <p>Global options are passed directly to the component through props, and apply to the entire component. For example:</p>
      <pre>
        <code> {code} </code>
      </pre>
      <p> Props that can be used with our Cursor: </p>

      {/* Table listing all Props. Note that this was basically just copied & pasted from the HTML export of the Readme Markdown document */}
      <table class="table table-striped table-bordered">
      <thead>
      <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><code>SVG?</code></td>
      <td><code>SvgDefaultStyles</code> | <code>FC&lt;SVGProps&lt;SVGSVGElement&gt;&gt;</code></td>
      <td><code>&quot;circle&quot;</code></td>
      <td>Defines which SVG image to use for the cursor layer. SvgDefaultStyles include: <code>&quot;circle&quot;</code>, <code>&quot;cross&quot;</code>, <code>&quot;square&quot;</code>, <code>&quot;arrow&quot;</code>. To supply your own SVG, you should utilise <a href="https://react-svgr.com/">SVGR</a> within your application. <a href="#custom-svgs">See more here</a></td>
      </tr>
      <tr>
      <td><code>fill?</code></td>
      <td><code>string</code></td>
      <td><code>&quot;black&quot;</code></td>
      <td>Replaces the <code>fill=currentColor</code> within layer’s SVG file. Can supply any valid CSS color, such as <code>&quot;black&quot;</code>, <code>&quot;#000&quot;</code>, <code>&quot;rgb(0,0,0)&quot;</code>, etc.</td>
      </tr>
      <tr>
      <td><code>stroke?</code></td>
      <td><code>string</code></td>
      <td><code>&quot;white&quot;</code></td>
      <td>Replaces the <code>stroke=currentStroke</code> within layer’s SVG file.</td>
      </tr>
      <tr>
      <td><code>strokeSize?</code></td>
      <td><code>number</code></td>
      <td><code>10</code></td>
      <td>Adjusts the stroke size of the layer’s SVG.</td>
      </tr>
      <tr>
      <td><code>opacity?</code></td>
      <td><code>number</code></td>
      <td><code>1</code></td>
      <td>Adjust the opacity of the layer.</td>
      </tr>
      <tr>
      <td><code>size?</code></td>
      {/* Workaround for the curly braces */}
      <td><code> {sizeType} </code></td>
      <td><code> {sizeDefault} </code></td>
      <td>Adjust the <code>px</code> height/width of the SVG. Aspect-ratio is retained by default, so the smallest value will usually be used for the size.</td>
      </tr>
      <tr>
      <td><code>preserveAspectRatio?</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Preserves the aspect-ratio of the SVG layer, regardless of the <code>size</code> attribute provided. If <code>false</code>, the SVG will stretch/scale exactly as specified by the <code>size</code> attribute.</td>
      </tr>
      <tr>
      <td><code>delay?</code></td>
      <td><code>number</code></td>
      <td><code>0</code></td>
      <td>The amount of “lag” that the layer will have, with respect to the actual system cursor position. Higher number = greater lag.</td>
      </tr>
      <tr>
      <td><code>hotspot?</code></td>
      {/* Workaround for the curly braces */}
      <td><code> {hotSpotType} </code></td>
      <td><code> {hotSpotDefault} </code></td>
      {/* <td><code>{ x: number, y: number }</code></td> */}
      {/* <td><code>{ x: width/2, y: height/2 }</code></td> */}

      <td>X/Y coordinate override for where the actual “click” hotspot of the cursor layer is. By default, the click is centered within the SVG image. If top-left is required, for example when using an “arrow” style SVG, the hotspot should be set at <code>x=0</code> &amp; <code>y=0</code>.</td>
      </tr>
      </tbody>
      </table>





    </Fragment>
  )
}

