// Page demonstrating features of the React Cursor component

// Node imports

// import ReactCursor from "@holmesdev/cursors"; // Our cursor!
import { useState } from 'react';

// Local imports
import * as styles from './FeaturesPage.css'; // Vanilla Extract styling file

// Workspace imports
import ReactCursor from "@holmesdev/cursors";
import CursorTestbed from '../components/features/demo/CursorTestbed';
import CursorCodeDisplay from '../components/features/demo/CursorCodeDisplay';
import CursorOptions from '../components/features/demo/CursorOptions';


// React component FeaturesPage
export default function FeaturesPage({setMainCursor}) { 
  // States
  const [demoCursor, setDemoCursor] = useState(false); // Customised demo cursor not displayed by default  
  const [testBed, setTestBed] = useState(false); // Our Testbed is initially off
  // const [numberOfLayers, setNumberOfLayers] = useState(1); // Initially only one layer for the demo cursor
  // const [layers, setLayers] = useState([]); // Used tohold the layer options for each layer

  // Functions

    // Handle cursor being moved over Testbed ie. If Testbed enabled then show demo and not main cursor
    function handleCursorOverTestbed(){
      if(testBed){
        setMainCursor(false);
        setDemoCursor(true);
      } else {
        setMainCursor(true);
        setDemoCursor(false);
      }
    }
    
    // Handle cursor leaving the Testbed ie. only main cursor shows
    function handleCursorLeavingTestbed(){  
        setDemoCursor(false);
        setMainCursor(true);
    }



  // Markup
  return (
    <div className={styles.featuresPage}>
      {/* Demo Cursor */}
      <ReactCursor
        enable={demoCursor}
        layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
        zIndex={10}  
      />
      <h1 >Cursor Features</h1>
      
      {/* Demo Div */}
      <div className={styles.featuresPageDemoDiv}>

        {/* Demo Cursor Testbed */}
        <CursorTestbed 
          testBed={testBed}
          setTestBed={setTestBed}
          handleCursorOverTestbed={handleCursorOverTestbed}
          handleCursorLeavingTestbed={handleCursorLeavingTestbed}
        />
 
        {/* Demo Cursor Code */}
        <CursorCodeDisplay />
      </div>
      
      <div>
        <CursorOptions />
      </div>
      

    </div>

  )
}



