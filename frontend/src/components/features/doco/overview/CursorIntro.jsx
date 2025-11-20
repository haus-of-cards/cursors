// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorIntro() {
  return (
    <Fragment>
      <h1>Introduction to React Cursors</h1>
      <p>
        {" "}
        <b>
          <i> @holmesdev/cursors</i>
        </b>{" "}
        lets you replace the default pointer with a beautiful, customizable,
        multi-layer cursor system for React — complete with prebuilt shapes,
        deep configuration options, and built-in accessibility.
      </p>

      <ul>
        <li>
          🎨 Multi-layer support — stack any number of customizable layers to
          build complex cursor designs
        </li>
        <li>🧩 Built-in shapes — arrow, circle, crosshair, and square</li>
        <li>📝 Custom shapes — use any user-provided SVG of your choice as a cursor layer</li>
        <li>
          ⚙️ Deep configuration — fine-grained control over size, color,
          behaviour, and more
        </li>
        <li>
          ♿ Accessible by default — fully baked-in under the hood, including
          automatic safety fallbacks
        </li>
        <li>🔧 Fully declarative React API</li>
        <li>💻 TypeScript support — fully typed props and layers</li>
        <li>
          🪶 Lightweight & performant — optimized rendering with minimal
          overhead
        </li>
        <li>
          📦 Small bundle footprint — ideal for any modern React application
        </li>
        <li>🔓 Open-source (MIT) — freely available and fully open-source</li>
      </ul>
    </Fragment>
  );
}
