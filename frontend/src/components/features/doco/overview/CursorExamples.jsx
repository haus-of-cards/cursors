// Documentation contents

// Node imports
import { Fragment } from "react";
import { Link } from "react-router-dom"; // client-side page-routing replacement for href

// Main component
export default function CursorExamples() {
  return (
    <Fragment>
      <h1>Cursor Examples</h1>
      <ul>
        <li>
          Multiple examples have been pre-made and can{" "}
          <a
            href="https://github.com/haus-of-cards/cursors/tree/main/examples"
            target="_blank"
            referrerPolicy="no-referrer"
            style={{ textDecoration: "underline" }}
          >
            found here
          </a>
          .
        </li>
        <li>
          These example can be viewed in realtime by accessing the{" "}
          <Link to="/examples">examples section</Link> of our website
        </li>
        <li>
          Alternatively, you can demo the cursor configuration by accessing our{" "}
          <Link to="/demo">live demo testbed</Link>.
        </li>
      </ul>
    </Fragment>
  );
}
