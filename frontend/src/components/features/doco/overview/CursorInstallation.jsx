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
        <pre><code> {code} </code></pre>
        
        {/* <pre>
          <code>
            <p> npm install @holmesdev/cursors </p>
            <p> # or </p>
            <p> yarn add @holmesdev/cursors </p>              
          </code>
        </pre> */}
    </Fragment>
  )
}

