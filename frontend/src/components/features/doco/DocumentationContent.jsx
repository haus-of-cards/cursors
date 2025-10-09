// Documentation content for the item selected in the menu

// Node imports
import { Fragment } from "react";

// Local imports
import * as styles from './DocumentationContent.css';  // Vanilla Extract styling file
// import { itemsDocumentation } from "./documentationData";  // Documentation markup for each item
import CursorIntro from "./overview/CursorIntro";
import CursorFunctionality from "./overview/CursorFunctionality";
import CursorInstallation from "./overview/CursorInstallation";
import CursorDemo from "./overview/CursorDemo";
import CursorOptionsBasic from "./overview/CursorOptionsBasic";
import CursorOptionsAdvanced from "./overview/CursorOptionsAdvanced";


// Main component
export default function DocumentationContent( {itemSelected} ) {
  // State
  // const temp = itemsDocumentation.filter( (item) => item.itemNumber == itemSelected)[0];
  // const [item, setItem] = useState( itemsDocumentation.filter( (item) => item.itemNumber == itemSelected)[0] ); // Returns an array with 1 item so extract from there
  // console.log("item is: ", item);

//   switch(itemSelected) {
//     case "1.1":
//       return (
//         <CursorIntro />
//       );
//     case "1.2":
//       return (
//         <CursorFunctionality />
//       );
//     default:
//       return (
//         <h3>Documentation is under construction</h3>
//       )
// } 

  // Markup
  return (
    <div className={styles.documentationContentDiv}>
      {/* Menu option chosen as Heading */}
      {/* <h3 className={styles.documentationContentHeader}> {item.itemTitle} </h3> */}
      {(itemSelected=="1.1") && <CursorIntro /> }
      {(itemSelected=="1.2") && <CursorFunctionality /> }
      {(itemSelected=="2.1") && <CursorInstallation /> }
      {(itemSelected=="2.2") && <CursorDemo /> }
      {(itemSelected=="3.1") && <CursorOptionsBasic /> }
      {(itemSelected=="3.2") && <CursorOptionsAdvanced /> }


    </div>
  )
}

