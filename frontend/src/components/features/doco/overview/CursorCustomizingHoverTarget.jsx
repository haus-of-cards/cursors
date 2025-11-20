// Documentation contents

// Node imports
import { Fragment } from "react";

const code = `<ReactCursor
    hoverSelector=".custom-hover, [data-interactive]" // Custom CSS selector
  />`;

// Main component
export default function CursorCustomizingHoverTargets() {
  return (
    <Fragment>
      <h1>Customizing Hover Targets</h1>
      <p>
        By default, hover effects trigger on interactive elements:{" "}
        <code>"a, button, [role='button'], input, textarea, select"</code>. You
        can customize this with the hoverSelector prop:{" "}
      </p>
      {/* Preserve the formatting when displaying the code  */}
      <pre>
        <code> {code} </code>
      </pre>
    </Fragment>
  );
}
