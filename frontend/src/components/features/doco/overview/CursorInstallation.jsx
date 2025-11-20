// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorInstallation() {
  const code = `
    npm install @holmesdev/cursors
    # or
    yarn add @holmesdev/cursors
  `;

  return (
    <Fragment>
      <h1>Install React Cursor</h1>
      <p>Install the NPM package using NPM or Yarn. </p>
      {/* Preserve the formatting when displaying the code  */}
      <pre>
        <code> {code} </code>
      </pre>
    </Fragment>
  );
}
