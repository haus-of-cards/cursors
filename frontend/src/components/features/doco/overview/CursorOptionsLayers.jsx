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
  `;

  return (
    <Fragment>
      <h1>Layer Options</h1>
      <p>
        React Cursors have one or more layers with their own set of options. For
        example:
      </p>
      {/* Preserve the formatting when displaying the code  */}
      <pre>
        <code> {code} </code>
      </pre>

      <p> Main Props that can be used in each Cursor layer: </p>
      {/* Table listing all Props. Note that this was basically just copied & pasted from the HTML export of the Readme Markdown document */}
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>SVG?</code>
            </td>
            <td>
              <code>SvgDefaultStyles</code> |{" "}
              <code>FC&lt;SVGProps&lt;SVGSVGElement&gt;&gt;</code>
            </td>
            <td>
              <code>"circle"</code>
            </td>
            <td>
              Defines which SVG image to use for the cursor layer.
              SvgDefaultStyles include: <code>"circle"</code>,{" "}
              <code>"cross"</code>, <code>"square"</code>,<code>"arrow"</code>.
              To supply your own SVG, you must first convert it to a React
              Functional Component. <a href="#custom-svgs">See more here]</a>
            </td>
          </tr>
          <tr>
            <td>
              <code>fill?</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"black"</code>
            </td>
            <td>
              Replaces the <code>fill=currentColor</code> within layer's SVG
              file. Can supply any valid CSS color, such as <code>"black"</code>
              , <code>"#000"</code>,<code>"rgb(0,0,0)"</code>, etc.
            </td>
          </tr>
          <tr>
            <td>
              <code>stroke?</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"white"</code>
            </td>
            <td>
              Replaces the <code>stroke=currentStroke</code> within layer's SVG
              file.
            </td>
          </tr>
          <tr>
            <td>
              <code>strokeSize?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>10</code>
            </td>
            <td>Adjusts the stroke size of the layer's SVG.</td>
          </tr>
          <tr>
            <td>
              <code>opacity?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>1</code>
            </td>
            <td>Adjust the opacity of the layer.</td>
          </tr>

          <tr>
            <td>
              <code>size?</code>
            </td>
            <td>
              <code>&#123; height: number, width: number &#125;</code>
            </td>
            <td>
              <code>&#123; height: 25, width: number 25 &#125;</code>
            </td>
            <td>
              Adjust the <code>px</code> height/width of the SVG. Aspect-ratio
              is retained by default, so the smallest value will usually be used
              for the size.
            </td>
          </tr>
          <tr>
            <td>
              <code>preserveAspectRatio?</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              Preserves the aspect-ratio of the SVG layer, regardless of the
              size attribute provided. If false, the SVG will stretch/scale
              exactly as specified by the size attribute.
            </td>
          </tr>
          <tr>
            <td>
              <code>delay?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>0</code>
            </td>
            <td>
              The amount of "lag" that the layer will have, with respect to the
              actual system cursor position. Higher number = greater lag.
            </td>
          </tr>
          <tr>
            <td>
              <code>effects?</code>
            </td>
            <td>
              <code>CursorEffects</code>{" "}
              <a href="#cursor-effects">(refer to Cursor Effects)</a>
            </td>
            <td>
              <code>undefined</code>
            </td>
            <td>Defines hover and click effect states.</td>
          </tr>
          <tr>
            <td>
              <code>hotspot?</code>
            </td>
            <td>
              <code>&#123; x: number, width: y &#125;</code>
            </td>
            <td>
              <code>&#123; x: width/2, width: height/2 &#125;</code>
            </td>
            <td>
              X/Y coordinate override for where the actual "click" hotspot of
              the cursor layer is. By default, the click is centered within the
              SVG image. If top-left is required, for example when using an
              "arrow" style SVG, the hotspot should be set at <code>x=0</code> &{" "}
              <code>y=0</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
