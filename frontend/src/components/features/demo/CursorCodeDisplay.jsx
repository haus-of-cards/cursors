// Component to display the code generated for the Demo Cursor

// Local imports
import * as styles from './CursorCodeDisplay.css'; // VE style file


// Main component
export default function CursorCodeDisplay() {
  return (
    <div className={styles.codeDiv}>
      <div></div>
      <p> {`enable={demoCursor}`}          </p>
      <p> {`layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] }`}  </p>
      <p> {`zIndex={10}`} </p>
    </div>
  )
}

