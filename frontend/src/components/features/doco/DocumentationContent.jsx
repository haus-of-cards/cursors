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
import CursorOptionsBasic from "./overview/CursorOptionsGlobal";
import CursorOptionsAdvanced from "./overview/CursorOptionsLayers";
import CursorUsage from "./overview/CursorUsage";
import CursorOptionsGlobal from "./overview/CursorOptionsGlobal";
import CursorOptionsLayers from "./overview/CursorOptionsLayers";
import CursorCustomSVGs from "./overview/CursorCustomSVGs";
import CursorDemoTestbed from "./overview/CursorDemoTestbed";
import CursorAbout from "./overview/CursorAbout";
import CursorAccessibility from "./overview/CursorAccessibility";
import CursorContributing from "./overview/CursorContributing";
import CursorLicence from "./overview/CursorLicence";


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
      {/* 1. Overview */}
      {(itemSelected=="1.1") && <CursorIntro /> }
      {(itemSelected=="1.2") && <CursorFunctionality /> }
      {/* 2. Getting Started */}
      {(itemSelected=="2.1") && <CursorInstallation /> }
      {(itemSelected=="2.2") && <CursorUsage /> }
      {(itemSelected=="2.3") && <CursorDemo /> }
      {/* 3. Configuration */}
      {(itemSelected=="3.1") && <CursorOptionsGlobal /> }
      {(itemSelected=="3.2") && <CursorOptionsLayers /> }
      {(itemSelected=="3.3") && <CursorCustomSVGs /> }
      {(itemSelected=="3.4") && <CursorDemoTestbed /> }
      {/* 4. Further Info */}
      {(itemSelected=="4.1") && <CursorAbout /> }
      {(itemSelected=="4.2") && <CursorAccessibility /> }
      {(itemSelected=="4.3") && <CursorContributing /> }
      {(itemSelected=="4.4") && <CursorLicence /> }


    </div>
  )
}

