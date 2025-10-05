// Component that displays documentation on DocoPage

// Node imports
import * as styles from './Documentation.css';  // Vanilla Extract styling file
import DocumentationTree from './DocumentationTree';  // Sidebar menu
import { Menu } from '@ark-ui/react'; // Ark-UI component


// Main function 
function Documentation() {
  return (
    <div className={styles.documentationLayout}>
      {/* Menu option chosen as Heading */}
      <h3 >  * Menu option - Overview </h3>

      {/* Documentation content */}
      <div className={styles.documentationContentDiv}>
        {/* Menu */}
        {/* <menu className={styles.documentationMenu}>
          <ul>Overview</ul>
          <ul>Getting Started</ul>
          <ul>Configuration</ul>
        </menu> */}
        <DocumentationTree />
        

        {/* Content */}
        <div className={styles.documentationContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis obcaecati culpa facilis a autem dolore consectetur et possimus maxime non nihil nisi praesentium unde, quaerat perferendis eos, numquam quis?
        </div>

      </div>

      

    </div>

  )
}

export default Documentation