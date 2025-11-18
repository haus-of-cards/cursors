// HausOfCards (homepage)

// Node imports

// Local imports
import * as styles from "./HausOfCardsPage.css"; // Vanilla Extract styling file

import ArrowSVG from "../images/arrow.svg";
import { Link } from "react-router-dom";

// Main component
function HausOfCards() {
  return (
    <div className={styles.hausofcardspage}>
      <h1 className={styles.hausofcardspageH1}>
        Welcome to{" "}
        <a
          href="https://www.npmjs.com/package/@holmesdev/cursors"
          target="_blank"
          referrerPolicy="no-referrer"
          className={styles.brandname}
        >
          @holmesdev/cursors
        </a>
      </h1>
      <h2 className={styles.hausofcardspageH2}>
        Fully customizable mouse cursor component for React — SVG-based and
        accessibility-first
      </h2>
      <div className={styles.hausofcardspageDemoDiv}>
        <div className={styles.hausofcardspageDemoH3}>
          <h3> Customisable Cursors for React.js</h3>
          <ul className={styles.hausofcardspagefeatures}>
            <li>
              🎨 Customizable SVG layers — create multi-layer cursors with
              different fills, strokes, and delays.
            </li>
            <li>
              ⚙️ Dynamic hover and click effects — smoothly scale, recolor, or
              swap SVGs based on interactions.
            </li>
            <li>
              🧩 Accessibility-first — automatically disables for high contrast,
              reduced motion, or touch environments.
            </li>
            <li>
              🧍‍♂️ Optional system cursor hiding — fully replace or blend with the
              native cursor.
            </li>
          </ul>
        </div>
        <div className={styles.hausofcardspageDemo}>
          <ArrowSVG className={styles.img} strokeWidth={3} />
          <Link to={"/demo"} className={styles.cta}>
            Demo Here!
          </Link>
        </div>
      </div>
      <div>
        <h3 className={styles.hausofcardspageH3}>Ready to get started?</h3>
        <p className={styles.install}>npm install @holmesdev/cursor</p>
      </div>
    </div>
  );
}

export default HausOfCards;
