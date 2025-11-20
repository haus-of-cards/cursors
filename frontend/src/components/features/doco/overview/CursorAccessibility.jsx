// Documentation contents

// Node imports
import { Fragment } from "react";

// Main component
export default function CursorAccessibility() {
  const code = `ignoreAccessibility={true}`;

  return (
    <Fragment>
      <h1>Accessibility</h1>
      <p>
        By default, the component respects user system preferences and disables
        itself when:
      </p>
      <ul>
        <li>Reduced motion is requested</li>
        <li>High contrast or forced colors mode is active</li>
        <li>Coarse pointer (touch) is detected</li>
      </ul>

      <p>
        You can override this by setting{" "}
        <code>`ignoreAccessibility=&#123;true&#125;`</code>.
      </p>
      <p>
        Refer to{" "}
        <a
          href="https://github.com/haus-of-cards/cursors/blob/main/ACCESSIBILITY.md"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          ACCESSIBILITY
        </a>{" "}
        for more details.
      </p>
    </Fragment>
  );
}
