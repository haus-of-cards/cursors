// Page demonstrating features of the React Cursor component

// Node imports

// import ReactCursor from "@holmesdev/cursors"; // Our cursor!
import { useState } from "react";

// Local imports
import * as styles from "./DemoPage.css"; // Vanilla Extract styling file

// Workspace imports
import ReactCursor from "@holmesdev/cursors";
import CursorTestbed from "../components/features/demo/CursorTestbed";
import CursorCodeDisplay from "../components/features/demo/CursorCodeDisplay";
import CursorOptions from "../components/features/demo/CursorOptions";

// Note: Using Hex values for colours as this simplifies the update process in Options
export const defaultLayer = {
  SVG: "circle",
  fill: "#000000",
  stroke: "#FFFFFF",
  strokeSize: 10,
  size: { width: 20, height: 20 },
  preserveAspectRatio: true,
  opacity: 1,
  delay: 0,
};

// React component FeaturesPage
export default function FeaturesPage({ setMainCursor }) {
  // States

  // Demo Cursor
  const [demoCursor, setDemoCursor] = useState({
    enable: false,
    showSystemCursor: true,
    mixBlendMode: "normal",
    zIndex: 2147483647,
    // JSON copy to ensure deep-copy (and not passing referencex)
    layers: [defaultLayer],
  });

  const [testBed, setTestBed] = useState(false); // Our Testbed is initially off

  // Functions

  // Handle cursor being moved over Testbed ie. If Testbed enabled then show demo and not main cursor
  function handleCursorOverTestbed() {
    if (testBed) {
      setMainCursor(false);
      setDemoCursor({ ...demoCursor, enable: true }); // Spread operator to copy the other fields
    } else {
      setMainCursor(true);
      setDemoCursor({ ...demoCursor, enable: false }); // Spread operator to copy the other fields
    }
  }

  // Handle cursor leaving the Testbed ie. only main cursor shows
  function handleCursorLeavingTestbed() {
    setDemoCursor({ ...demoCursor, enable: false }); // Spread operator to copy the other fields
    setMainCursor(true);
  }

  // Markup
  return (
    <div className={styles.featuresPage}>
      <ReactCursor
        enable={demoCursor.enable}
        layers={demoCursor.layers}
        zIndex={demoCursor.zIndex}
        showSystemCursor={demoCursor.showSystemCursor}
        mixBlendMode={demoCursor.mixBlendMode}
        ignoreAccessibility={demoCursor.ignoreAccessibility}
      />

      <h1 className={styles.title}>Cursor Features Demo</h1>

      {/* Demo Div */}
      <div className={styles.featuresPageDemoDiv}>
        <div className={styles.featuresPageDemoTestbedCodeDiv}>
          {/* Demo Cursor Testbed */}
          <CursorTestbed
            testBed={testBed}
            setTestBed={setTestBed}
            handleCursorOverTestbed={handleCursorOverTestbed}
            handleCursorLeavingTestbed={handleCursorLeavingTestbed}
            className={styles.testbed}
          />
          {/* Demo Cursor Code */}
          <CursorCodeDisplay demoCursor={demoCursor} />
        </div>

        {/* Demo Cursor Options */}
        <CursorOptions demoCursor={demoCursor} setDemoCursor={setDemoCursor} />
      </div>
    </div>
  );
}
