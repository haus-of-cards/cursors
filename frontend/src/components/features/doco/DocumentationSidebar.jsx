// Component that implements the sidebar menu on the documentation page

// Node imports
import { useState, Fragment } from "react";

// Local imports
import DisplaySidebarSections from "./DisplaySidebarSections";
// import { sidebarSectionsArray } from './data';
import { sidebarSections } from './data';

// Constants
// const sidebarSections = ["Overview", "Getting Started", "Configuration"];
// const sidebarSectionItems = [];
// const sidebarSections = sidebarSectionsArray;
// const sidebarSections = sidebarSectionsArrayObject;


// Main component
export default function DocumentationSidebar() {
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
      <DisplaySidebarSections sidebarSections={sidebarSections} />
    </Fragment>
  )
}

