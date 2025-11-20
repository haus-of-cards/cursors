// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorEffectProperties() {
  return (
    <Fragment>
      <h1>Effect Properties</h1>
      <p>Each effect (hover or click) accepts the following properties:</p>

      {/* Table listing all Props. Note that this was basically just copied & pasted from the HTML export of the Readme Markdown document */}
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
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
              Changes the SVG shape during the effect. Can use built-in shapes (
              <code>"circle"</code>, <code>"cross"</code>, <code>"square"</code>
              , <code>"arrow"</code>) or custom SVG component.
            </td>
          </tr>
          <tr>
            <td>
              <code>fill?</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>Changes the fill color during the effect.</td>
          </tr>
          <tr>
            <td>
              <code>stroke?</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>Changes the stroke color during the effect.</td>
          </tr>
          <tr>
            <td>
              <code>strokeSize?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>Changes the stroke size during the effect.</td>
          </tr>
          <tr>
            <td>
              <code>opacity?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>Changes the opacity (0-1) during the effect.</td>
          </tr>
          <tr>
            <td>
              <code>scale?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              Scales the cursor size (1 = normal, 2 = double size, 0.5 = half
              size). Multiplies the layer's base size.
            </td>
          </tr>
          <tr>
            <td>
              <code>hotspot?</code>
            </td>
            <td>
              <code>&#123; x: number, y: number &#125;</code>
            </td>
            <td>
              Overrides the X/Y coordinates for the SVGs click location. This is
              useful when changing to an SVG that uses a different click point
              (e.g. changing from "circle" to "arrow").
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
