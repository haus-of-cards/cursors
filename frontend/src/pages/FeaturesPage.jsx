// Page demonstrating features of the React Cursor component

// Node imports
import { Button } from 'react-bootstrap';
import ReactCursor from "@holmesdev/cursors"; // Our cursor!

// Local imports
import * as styles from './FeaturesPage.css'; // Vanilla Extract styling file


// React component FeaturesPage
export default function FeaturesPage() {  
  return (
    <div className={styles.featuresPage}>
      <h1 >Cursor Features</h1>
      <div className={styles.featuresPageDemoDiv}>
        <div className={styles.featuresPageTestbed} >
          <p>Demo Testbed goes Here</p>
          <ReactCursor layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } />
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



