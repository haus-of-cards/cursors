// Documentation contents

// Node imports
import { Fragment } from "react";



// Main component
export default function CursorUsage() {

  const code = `
    import ReactCursor from "@holmesdev/cursors";

    function App() {
      return (
        <>
          {/* Import component into your top-level component */}
          <ReactCursor />

          <h1>Hover around the page!</h1>
        </>
      );
    }

    export default App;
  `;

  return (
    <Fragment>
      <h1>Cursor Usage</h1>
      <p>Import the Cursor into your top-level component <i>App</i> and then render it. </p>
      {/* Preserve the formatting when displaying the code  */}
      <pre><code> {code} </code></pre>
    </Fragment>
  )
}

