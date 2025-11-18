// Implements the Testbed for testing the Demo cursor

// Local imports
import * as styles from "./CursorTestbed.css"; // VE styling file

// Main component
export default function CursorTestbed({
  className,
  testBed,
  setTestBed,
  handleCursorOverTestbed,
  handleCursorLeavingTestbed,
}) {
  // Functions

  // Handle clicking of the Demo Cursor enable/disable button
  function handleTestbedButton() {
    setTestBed(!testBed); // Toggle state of the Testbed
  }

  // Markup
  return (
    <div className={`${className} ${styles.testbedDiv}`}>
      {/* Testbed */}
      <div
        className={`${styles.testbed} ${testBed ? styles.testbedActive : styles.testbedInactive}`}
        onMouseOver={handleCursorOverTestbed}
        onMouseOut={handleCursorLeavingTestbed}
      >
        {/* TESTBED RENDERED HERE */}
        {testBed ? "Test your cursor directly here!" : "Please Enable Testbed"}
      </div>

      {/* Testbed button */}
      <button
        className={`${styles.testbedButton} ${testBed ? styles.activeBtn : styles.inactiveBtn}`}
        onClick={handleTestbedButton}
      >
        {!testBed && <span>Enable Testbed</span>}
        {testBed && <span>Disable Testbed</span>}
      </button>
    </div>
  );
}
