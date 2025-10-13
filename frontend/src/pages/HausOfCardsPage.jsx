// HausOfCards (homepage)

// Node imports
// import { Container, Row, Col } from "react-bootstrap"; // React Bootstrap
import { Link } from 'react-router-dom';  // React Router version of href

// Local imports
import * as styles from './HausOfCardsPage.css';  // Vanilla Extract styling file


// Main component
function HausOfCards() {

  return (
    <div className={styles.hausofcardspage}>
      <h1 >Customisable Cursors for React</h1>
      <div className={styles.hausofcardspageDemoDiv}>
        <div>
          <h3 >Add multi-layered customisable cursors to your React.js project using our React Cursors component</h3>
        </div>
        <div className={styles.hausofcardspageDemo}>Demo</div>
      </div>
      <div>
        <h3 className={styles.hausofcardspageH3}>
          See <Link as={Link} to={"features"}>Features</Link> for an overview of cursor functionality 
          and <Link as={Link} to={"docs"}>Docs</Link> for information on implementation
        </h3>
        <h3 className={styles.hausofcardspageH3}>Ready to get started? npm install @holmesdev/cursor</h3>
      </div>

    </div>

  )
}

export default HausOfCards