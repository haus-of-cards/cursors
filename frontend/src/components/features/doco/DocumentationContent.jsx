// Documentation content for the item selected in the menu

// Node imports
import { Fragment } from "react";

// Local imports
import * as styles from "./DocumentationContent.css"; // Vanilla Extract styling file
// Components containing documentation content
import CursorIntro from "./overview/CursorIntro";
import CursorFunctionality from "./overview/CursorFunctionality";
import CursorInstallation from "./overview/CursorInstallation";
import CursorUsage from "./overview/CursorUsage";
import CursorOptionsGlobal from "./overview/CursorOptionsGlobal";
import CursorOptionsLayers from "./overview/CursorOptionsLayers";
import CursorCustomSVGs from "./overview/CursorCustomSVGs";
import CursorDemoTestbed from "./overview/CursorExamples";
import CursorAbout from "./overview/CursorAbout";
import CursorAccessibility from "./overview/CursorAccessibility";
import CursorContributing from "./overview/CursorContributing";
import CursorLicence from "./overview/CursorLicence";
import CursorConfiguration from "./overview/CursorConfiguration";
import CursorEffectTypes from "./overview/CursorEffectTypes";
import CursorEffectProperties from "./overview/CursorEffectProperties";
import CursorCustomizingHoverTargets from "./overview/CursorCustomizingHoverTarget";
import CursorExamples from "./overview/CursorExamples";

// Main component
export default function DocumentationContent({ itemSelected }) {
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
      {itemSelected == "1.1" && <CursorIntro />}
      {/* 2. Getting Started */}
      {itemSelected == "2.1" && <CursorInstallation />}
      {itemSelected == "2.2" && <CursorUsage />}
      {/* 3. Configuration */}
      {itemSelected == "3.1" && <CursorOptionsGlobal />}
      {itemSelected == "3.2" && <CursorOptionsLayers />}
      {/* 4. Cursor Effects */}
      {itemSelected == "4.1" && <CursorEffectTypes />}
      {itemSelected == "4.2" && <CursorEffectProperties />}
      {itemSelected == "4.3" && <CursorCustomizingHoverTargets />}
      {/* Custom SVGs */}
      {itemSelected == "5.1" && <CursorCustomSVGs />}
      {/* Examples */}
      {itemSelected == "6.1" && <CursorExamples />}
      {/* Other Information */}
      {itemSelected == "7.1" && <CursorAccessibility />}
      {itemSelected == "7.2" && <CursorAbout />}
      {itemSelected == "7.3" && <CursorContributing />}
      {itemSelected == "7.4" && <CursorLicence />}
    </div>
  );
}
