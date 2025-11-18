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
      <p>
        Global options are passed directly to the component through props, and
        apply to the entire component. For example:
      </p>
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
            <td>
              <code>enable?</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Enables or disables the cursor entirely.</td>
          </tr>

          <tr>
            <td>
              <code>showSystemCursor?</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Shows or hides the system cursor.</td>
          </tr>

          <tr>
            <td>
              <code>layers?</code>
            </td>
            <td>
              <code>CursorLayer[]</code>{" "}
              <a href="#layer-options">
                <em>(refer to Layer Options)</em>
              </a>
            </td>
            <td>
              <code>
                {
                  '[{ fill: "black", stroke: "white", strokeSize: 10, size: { width: 20, height: 20 } }]'
                }
              </code>
            </td>
            <td>Defines each cursor layer.</td>
          </tr>

          <tr>
            <td>
              <code>mixBlendMode?</code>
            </td>
            <td>
              <code>{'CSSProperties["mixBlendMode"]'}</code>
            </td>
            <td>
              <code>"normal"</code>
            </td>
            <td>Controls how the cursor blends with the background.</td>
          </tr>

          <tr>
            <td>
              <code>zIndex?</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>2147483647</code>
            </td>
            <td>Cursor z-index. Default is max value.</td>
          </tr>

          <tr>
            <td>
              <code>ignoreAccessibility?</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              Bypass system accessibility detection. By default, if a user has
              any accessibility flags set in their browser, the custom cursor
              will disable and the system cursor will show instead.
            </td>
          </tr>

          <tr>
            <td>
              <code>effects?</code>
            </td>
            <td>
              <code>CursorEffects</code>{" "}
              <a href="#cursor-effects">
                <em>(refer to Cursor Effects)</em>
              </a>
            </td>
            <td>
              <code>undefined</code>
            </td>
            <td>Defines hover and click effect states.</td>
          </tr>

          <tr>
            <td>
              <code>hoverSelector?</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>
                {"\"a, button, [role='button'], input, textarea, select\""}
              </code>
            </td>
            <td>CSS selector that triggers hover effects.</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
