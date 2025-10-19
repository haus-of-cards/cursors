// Page demonstrating features of the React Cursor component

// Node imports
import { Button } from 'react-bootstrap';
import ReactCursor from "@holmesdev/cursors"; // Our cursor!
import { useState } from 'react';

// Local imports
import * as styles from './FeaturesPage.css'; // Vanilla Extract styling file


// React component FeaturesPage
export default function FeaturesPage({setMainCursor}) {  
  // State for the customised Cursor on this page
  const [demoCursor, setDemoCursor] = useState(false); // Our cusotmised cursor disabled by default

  // Handle cursor entering the Testbed
  function handleInsideTestbed(){
    setMainCursor(false);
    setDemoCursor(true);
  }
  // Handle cursor entering the Testbed
  function handleOutsideTestbed(){
    setMainCursor(true);
    setDemoCursor(false);
  }


  // Markup
  return (
    <div className={styles.featuresPage}>
      <h1 >Cursor Features</h1>
      <div className={styles.featuresPageDemoDiv}>
        <div className={styles.featuresPageTestbed} 
          onMouseEnter={handleInsideTestbed} 
          onMouseLeave={handleOutsideTestbed} 
        >
          <p>Demo Testbed goes Here</p>
          <ReactCursor
            enable={demoCursor}
            layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
            zIndex={10}  
          />
          {/* <ReactCursor /> */}
        </div>
        <div className={styles.featuresPageCode}>Code output goes Here</div>
      </div>
      <Button>Apply Settings to Cursor</Button>
      <div className={styles.featuresPageOptionsDiv}>
        <div>Basic Options</div>
        <div>Effects</div>
        <div>Accessibility</div>
      </div>

    </div>

  )
}



