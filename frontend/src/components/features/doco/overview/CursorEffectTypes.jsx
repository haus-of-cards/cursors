// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorEffectTypes() {
  return (
    <Fragment>
      <h1>Effect Types</h1>
      <p>
        Cursor effects allow you to dynamically change the cursor's appearance
        when users interact with certain elements. Effects are applied
        per-layer.
      </p>
      <p>
        <code>hover</code> - Triggered when the mouse hovers over interactive
        elements (defined by hoverSelector)
      </p>
      <p>
        <code>click</code> - Triggered when the user presses down the mouse
        button (released on mouse up)
      </p>

      <p>
        Note: click effects take precedence over hover effects when both are
        active.
      </p>
    </Fragment>
  );
}
