// HausOfCards (homepage)

// Node imports
// import { Container, Row, Col } from "react-bootstrap"; // React Bootstrap
import { Link } from 'react-router-dom';  // React Router version of href

// Local imports
import * as styles from './HausOfCardsPage.css';  // Vanilla Extract styling file
// import React from 'react';
// import { ReactComponent as SVGCircle } from '../images/circle.svg';


// Main component
function HausOfCards() {

  return (
    <div className={styles.hausofcardspage}>
      <h1 >Welcome to React Cursors</h1>
      <div className={styles.hausofcardspageDemoDiv}>
        <div className={styles.hausofcardspageDemoH3}>
          <h3> Customisable Cursors for React.js</h3>
          <p className={styles.hausofcardspageDemoParagraph}> Add multi-layered customisable cursors to your React.js project using our React Cursors component.
              With multiple-layers, built-in shapes, numerous configuration options, and accessibility support,

          </p>
        </div>
        <div className={styles.hausofcardspageDemo}>
          {/* <img src={svgImage} alt="React Cursor SVG" /> */}
          {/* <SVGCircle width="100" height="100" fill="green"/> */}

          {/* <svg width="200" height="200" viewBox="0 0 100 100"> */}
          <svg width="200" height="200" >
            <circle cx="100" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
          </svg>
        </div>
      </div>
      <div>
        {/* <h3 className={styles.hausofcardspageH3}>
          See <Link as={Link} to={"features"}>Features</Link> for an overview of cursor functionality 
          and <Link as={Link} to={"docs"}>Docs</Link> for information on implementation
        </h3> */}
        <h3 className={styles.hausofcardspageH3}>Ready to get started? npm install @holmesdev/cursor</h3>
      </div>

    </div>

  )
}

export default HausOfCards