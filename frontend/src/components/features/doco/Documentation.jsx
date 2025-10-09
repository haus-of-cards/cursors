// Component that displays documentation on DocoPage

// Node imports
import * as styles from './Documentation.css';  // Vanilla Extract styling file
import { useState } from 'react';

// Local imports
import DocumentationSidebar from './DocumentationSidebar';


// Main function 
function Documentation() {
  // State
  const [itemSelected, setItemSelected] = useState();


  return (
    <div className={styles.documentationLayout}>
      {/* Menu option chosen as Heading */}
      <h3 >  * Menu option - Overview </h3>

      {/* Documentation content */}
      <div className={styles.documentationContentDiv}>
        {/* Menu */}
        <DocumentationSidebar />

        

        {/* Content */}
        <div className={styles.documentationContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis obcaecati culpa facilis a autem dolore consectetur et possimus maxime non nihil nisi praesentium unde, quaerat perferendis eos, numquam quis?
        </div>

      </div>

      

    </div>

  )
}

export default Documentation