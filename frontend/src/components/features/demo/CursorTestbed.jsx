// Implements the Testbed for testing the Demo cursor

// Node imports
import { Button } from 'react-bootstrap';

// Local imports
import * as styles from './CursorTestbed.css'; // VE styling file


// Main component
export default function CursorTestbed( {testBed, setTestBed,handleCursorOverTestbed, handleCursorLeavingTestbed} ) {
  // Functions

    // Handle clicking of the Demo Cursor enable/disable button
      function handleTestbedButton(){
        setTestBed(!testBed); // Toggle state of the Testbed
      }


  // Markup
  return (
    <div className={styles.testbedDiv}>
      {/* Testbed */}
      <div className={styles.testbed} 
        onMouseOver={handleCursorOverTestbed}
        onMouseOut={handleCursorLeavingTestbed}
      >
      </div>
      
      {/* Testbed button */}
      <Button className={styles.testbedButton} onClick={handleTestbedButton} >
        { !testBed && <span>Enable Testbed</span> } 
        { testBed && <span>Disable Testbed</span> }       
      </Button>       

    </div>

  )
}

