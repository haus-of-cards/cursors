// Component that displays documentation on DocoPage

// Node imports
import { useState } from 'react';

// Local imports
import * as styles from './Documentation.css';  // Vanilla Extract styling file
import DocumentationSidebar from './DocumentationSidebar';
import DocumentationContent from './DocumentationContent';


// Main function 
export default function Documentation() {
  // State
  // const [itemSelected, setItemSelected] = useState("Intro to React Cursor"); // Item selected in the Documentation sidebar. Initially first item of first section
  const [itemSelected, setItemSelected] = useState("1.1"); // Item selected in the Documentation sidebar. Initially 1st item of 2nd section


  // Markup
  return (
    <div className={styles.documentationLayout}>

      <div className={styles.documentationMenuContentDiv}>
        {/* Menu */}
        <DocumentationSidebar itemSelected={itemSelected} setItemSelected={setItemSelected} />
        {/* Documentation content */}
        <DocumentationContent itemSelected={itemSelected} />

      </div>      

    </div>

  )
}

