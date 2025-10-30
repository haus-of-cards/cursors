// Component to display the code generated for the Demo Cursor

// Local imports
import * as styles from './CursorCodeDisplay.css'; // VE style file


// Main component
export default function CursorCodeDisplay( {demoCursor} ) {

  // function formatCode(key, value){  }

  let demoCursorString = JSON.stringify(demoCursor, null, 2);
  demoCursorString = demoCursorString.slice(demoCursorString.indexOf("{") + 1, demoCursorString.lastIndexOf("}") ).trim(); // Strip out the object brackets and trim whitespace
  let demoCursorArray = [];  // Array to hold the lines of code
  
  // Process the string until all cursor code extracted
  let prop; let value;

  // let loopIndex = 1;

  // Start loop ...
  do {
  
    // Get the prop: 
      
      // Find the colon
      const nextColonIndex = demoCursorString.indexOf(`:`); 
      // Extract the prop and store in prop

      prop = demoCursorString.slice(0, nextColonIndex);  
      prop = prop.trim();
      prop = prop.slice(1,prop.length - 1); // remove double-quotes from JSON field
      // console.log("prop is: ", prop);
      // Remove the colon and everything before before trimming the front of the string to bring us up to the prop value
      demoCursorString = demoCursorString.slice(nextColonIndex + 1).trimStart();
      // console.log("demoCursorString is: ", demoCursorString);

  // Get the prop value

    // Check if the next value is an array by checking for a leading square bracket
    if(demoCursorString.charAt(0) == "["){
      // If an array then extract the prop value and trim everything between the opening & closing square brackets and store        
      const closingSquareBracketIndex = demoCursorString.indexOf("]"); // The closing sq. br. marks the end of the array
      value = demoCursorString.slice(1, closingSquareBracketIndex).trim();  // Remove opening & closing sq. brackets
    
      // Finally remove the prop value too from the string after checking that we are not at the end
      if(closingSquareBracketIndex == (demoCursorString.length - 1)){ 
        // In this case closing bracket marks the end of the string so we are finished
        demoCursorString = "";
      } else {
        // otherwise there must be more props so look for delete this prop & value from the string so we can continue
        demoCursorString = demoCursorString.slice(closingSquareBracketIndex + 2); // Comma follows straight after the bracket so skip that
      }
    
    // otherwise prop value must be a simple type so we can extract everything up to the next comma
    } else {      
      const nextCommaIndex = demoCursorString.indexOf(","); // The next comma marks the end of the value
      if(nextCommaIndex > 0){
        // There are still props remaining
        value = demoCursorString.slice(0, nextCommaIndex); // Get the prop value ie. what precedes the comma
        demoCursorString = demoCursorString.slice(nextCommaIndex + 1).trimStart() // Remove the prop's value and trailing comma from the string and continue        
      } else {
        // No comma so we must be at the end of the string        
        value = demoCursorString.trimEnd(); 
        demoCursorString = "";  // No cursor found means we are at the end of the string
      } 
    }

    // console.log("value is: ", value)
    // console.log("demoCursorString is: ", demoCursorString)


    // We have the prop & value so add this to the array
    demoCursorArray.push( prop + ": " + value);
      
    // loopIndex++;

  // } while( demoCursorString.length > 0 );  
  // } while( demoCursorString.indexOf(`:`) || loopIndex > 10 );  // Keep looping while there are semicolons (ie. props) remaining
  } while( demoCursorString != "");  // Keep looping while there is code to process

  // console.log("demoCursorArray is: ", demoCursorArray)


  // Markup
  return (
    <div className={styles.codeDiv}>
      {/* The JSON.stringify() method converts JavaScript objects into strings.  */}
      <div >
        {`<ReactCursor`}
        
          {/* {demoCursorString}  */}
          {/* {JSON.stringify(demoCursor, null, 2)} */}
        

        <ul className={styles.codeDivList} >
          { demoCursorArray.map(line => {
            return <li key={line} >{line}</li>            
            })
          }
        </ul>
        {`/>`}
      </div>
      {/* { Object.toString(demoCursor) }  */}

      {/* <p> {`enable={demoCursor}`}          </p>
      <p> {`layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] }`}  </p>
      <p> {`zIndex={10}`} </p> */}
    </div>
  )
}

