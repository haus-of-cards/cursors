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
              🎨{" "}
              <span className={styles.subfeatheading}>Multi-layer support</span>{" "}
              — stack any number of customizable layers to build complex cursor
              designs
            </li>
            <li>
              🧩 <span className={styles.subfeatheading}>Built-in shapes</span>{" "}
              — arrow, circle, crosshair, and square
            </li>
            <li>
              ⚙️ <span className={styles.subfeatheading}></span>Deep
              configuration — fine-grained control over size, color, behaviour,
              and more
            </li>
            <li>
              ♿{" "}
              <span className={styles.subfeatheading}>
                Accessible by default{" "}
              </span>
              — fully built-in under the hood, including automatic safety
              fallbacks
            </li>
            <li>
              🔧{" "}
              <span className={styles.subfeatheading}>
                Fully declarative React API
              </span>
            </li>
            <li>
              💻{" "}
              <span className={styles.subfeatheading}>TypeScript support</span>{" "}
              — fully typed props and layers
            </li>
            <li>
              🪶{" "}
              <span className={styles.subfeatheading}>
                Lightweight & performant
              </span>{" "}
              — optimized rendering with minimal overhead
            </li>
            <li>
              📦{" "}
              <span className={styles.subfeatheading}>
                Small bundle footprint
              </span>
              — ideal for any modern React application
            </li>
            <li>
              🔓{" "}
              <span className={styles.subfeatheading}>Open-source (MIT)</span>—
              freely available and fully open-source
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
        <p className={styles.install}>npm install @holmesdev/cursors</p>
      </div>
    </div>
  );
}

export default HausOfCards;
