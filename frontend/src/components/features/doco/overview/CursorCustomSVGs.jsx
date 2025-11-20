// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorCustomSVGs() {
  const code = `
  import MyCustomSVG from "/path/to/file.jsx"; // for manually created SVG component (i.e. METHOD ONE)
  import MyCustomSVG from "/path/to/file.svg"; // for react-svgr (i.e. METHOD TWO)

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
  }
  `;

  return (
    <Fragment>
      <h1>Custom SVGs Implementation</h1>
      <p>
        The cursor component comes with preset SVGs like <code>"circle"</code>,{" "}
        <code>"cross"</code>, <code>"square"</code>, and <code>"arrow"</code>.
      </p>
      <p>
        If you want to use a custom SVG, that is also supported. However, the{" "}
        <code>ReactCursor</code> component does not accept raw SVG files/strings
        directly. Instead, the SVG must first be converted into a React
        Functional Component. These are the recommended methods:
      </p>
      <ul>
        <li>
          METHOD ONE: The easiest method is to copy/paste your SVG code directly
          into the{" "}
          <a
            href="https://react-svgr.com/playground/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            online SVGR playground
          </a>
          . This will output a JSX component that you can use directly.
        </li>
        <ul>
          <li>Copy/paste your .svg code into the input section.</li>
          <li>
            Copy/paste the output into a new JSX file (e.g. MyCustomSVG.jsx).
          </li>
          <li>Import the SVG Component within your application.</li>
        </ul>
        <br />
        <li>
          METHOD TWO: Alternatively, you can automonize this conversion within
          your application by using{" "}
          <a
            href="https://react-svgr.com/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            React SVGR
          </a>{" "}
          within your project . For instance, with Vite:
        </li>
        <ul>
          <li>Install the dependency.</li>
          <pre>
            <code>npm install --save-dev vite-plugin-svgr</code>
          </pre>
          <li>Configure the plugin.</li>
          <pre>
            <code>
              // vite.config.js
              <br />
              plugins: [ svgr() ],
            </code>
          </pre>
          <li>Import the SVG normally.</li>
        </ul>
      </ul>
      <br />
      <h2>Importing Custom SVGs</h2>
      <pre>
        <code>{code}</code>
      </pre>
      <p>NOTE </p>
      <p>
        To make your SVG fully customizable, avoid hard-coding values.
        Hard-coded values will always take precedence over the cursor
        component's props. For example, within your actual <code>.svg</code>{" "}
        file:
        <ul>
          <li>
            Height and Width: Omit these in the SVG. The cursor component's{" "}
            <code>size</code> prop will control the dimensions.
          </li>
          <li>
            Colors: Use <code>fill="currentColor"</code> and{" "}
            <code>stroke="currentStroke"</code> for dynamic colors. This allows
            the cursor component's fill and stroke props to control the
            appearance.
          </li>
          <ul>
            <li>
              ⚠️ If you hard-code colors like <code>fill="red"</code>, the SVG
              will always display in red, ignoring the component's props.
            </li>
          </ul>
        </ul>
      </p>
    </Fragment>
  );
}
