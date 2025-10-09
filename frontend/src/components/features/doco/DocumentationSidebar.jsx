// Component that implements the sidebar menu on the documentation page

// Node imports
import { Fragment } from "react";

// Local imports
import { sidebarSections } from './documentationData';  // Data to populate documentation sidebar
import DisplaySidebarSections from "./DisplaySidebarSections";  // Display sections of the sidebar menu


// Main component
export default function DocumentationSidebar( {itemSelected, setItemSelected}) {
  // State
  // const [ menuSelection, setMenuSelection ] = useState();

  // Functions
  function handleMenuSelection(e){
    // console.log("e.target.value: ", e.target.value);
    console.log("e: ", e);
  }


  // Markup
  return (
    <Fragment>
      <DisplaySidebarSections 
        sidebarSections={sidebarSections}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />
    </Fragment>
  )
}

