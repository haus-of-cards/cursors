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
  
    // Demo Cursor
    // const [demoCursor, setDemoCursor] = useState(false); // Customised demo cursor not displayed by default 
    const [demoCursor, setDemoCursor] = useState({
      enable: false, // Customised demo cursor not displayed by default
      layers: [ { SVG: "circle", fill: "#FFFF00", stroke: "#8A2BE2", strokeSize: 10, size: { height: 20, width: 20 } } ],
      // layers: [ { SVG: "circle", fill: "yellow", stroke: "black", strokeSize: 10, size: { height: 20, width: 20 } } ],
      // Note: Using Hex values for colours as this simplifies the update process in Options
      
      showSystemCursor: true,
      // showSystemCursor: false,
      mixBlendMode: "normal",
      zIndex: 20,
      // ignoreAccessibility: true
      // effects,
      // hoverSelector = 'a, button, [role="button"], input, textarea, select',
    }); 
  
  

  const [testBed, setTestBed] = useState(false); // Our Testbed is initially off
  // const [numberOfLayers, setNumberOfLayers] = useState(1); // Initially only one layer for the demo cursor
  // const [layers, setLayers] = useState([]); // Used tohold the layer options for each layer

  // Functions

    // Handle cursor being moved over Testbed ie. If Testbed enabled then show demo and not main cursor
    function handleCursorOverTestbed(){
      if(testBed){
        setMainCursor(false);
        // setDemoCursor({ enable: true }); *** Note: cannot update directly - need to copy existing state first!
        setDemoCursor({ ...demoCursor, enable: true }); // Spread operator to copy the other fields
      } else {
        setMainCursor(true);
        // setDemoCursor({ enable: false });
        setDemoCursor({ ...demoCursor, enable: false }); // Spread operator to copy the other fields
      }
    }
    
    // Handle cursor leaving the Testbed ie. only main cursor shows
    function handleCursorLeavingTestbed(){  
      // setDemoCursor(false);
      // setDemoCursor({ enable: false });
      setDemoCursor({ ...demoCursor, enable: false }); // Spread operator to copy the other fields
      setMainCursor(true);
    }



  // Markup
  return (
    <div className={styles.featuresPage}>
      {/* Demo Cursor. *** Should this go here or inside the Testbed?  */}
      {/* <ReactCursor 
        enable={demoCursor}
        layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
        zIndex={10}  
      /> */}
      <ReactCursor 
        layers={demoCursor.layers} 
        enable={demoCursor.enable}
        // layers={ [ 
        //   { fill: "yellow", stroke: "black", strokeSize: 10, size: { height: 20, width: 20 } } 
        // ] }
        // zIndex={10}  
        zIndex={demoCursor.zIndex} 
        showSystemCursor={demoCursor.showSystemCursor} 
        mixBlendMode={demoCursor.mixBlendMode} 
        ignoreAccessibility={demoCursor.ignoreAccessibility} 
      />
      
      <h1 >Cursor Features Demo</h1>
      
      {/* Demo Div */}
      <div className={styles.featuresPageDemoDiv}>

        <div className={styles.featuresPageDemoTestbedCodeDiv}>
          {/* Demo Cursor Testbed */}
          <CursorTestbed
            testBed={testBed}
            setTestBed={setTestBed}
            handleCursorOverTestbed={handleCursorOverTestbed}
            handleCursorLeavingTestbed={handleCursorLeavingTestbed}
          />
          {/* Demo Cursor Code */}
          <CursorCodeDisplay demoCursor={demoCursor} />
        </div>

        {/* Demo Cursor Options */}
        <CursorOptions demoCursor={demoCursor} setDemoCursor={setDemoCursor} />              
      
      </div>


    </div>

  )
}



