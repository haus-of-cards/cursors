// Documentation contents

// Node imports
import { Fragment } from "react";
import { Link } from 'react-router-dom';  // client-side page-routing replacement for href


// Main component
export default function CursorDemoTestbed() {
  return (
    <Fragment>
      <h1>Cursor Demo Testbed</h1>
      <p>You can explore live cursor functionality via the <Link to={"/features"} > Demo Cursor Testbed </Link> on the Features page.</p>
      <p>All you need to do is:</p>
      <ol>
        <li>Select your desired cursor options.</li>
        <li>Enable the Testbed to see them in action.</li>
        <li>Once you’re happy with your design, copy the generated code directly into your React.js application to start using it.</li>

      </ol>
    </Fragment>
  )
}

