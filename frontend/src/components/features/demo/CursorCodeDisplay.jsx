// Component to display the code generated for the Demo Cursor

// Local imports
import * as styles from './CursorCodeDisplay.css'; // VE style file


// Main component
export default function CursorCodeDisplay( {demoCursor} ) {

  // function formatCode(key, value){  }

  // const demoCursorString = JSON.stringify(demoCursor, null, 2);
  // console.log("demoCursorString is: ", demoCursorString)


  return (
    <div className={styles.codeDiv}>
      {`<ReactCursor`}
      {/* The JSON.stringify() method converts JavaScript objects into strings.  */}
      { JSON.stringify(demoCursor, null, 2) } 
      {/* { Object.toString(demoCursor) }  */}
      {`/>`}

      {/* <p> {`enable={demoCursor}`}          </p>
      <p> {`layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] }`}  </p>
      <p> {`zIndex={10}`} </p> */}
    </div>
  )
}

