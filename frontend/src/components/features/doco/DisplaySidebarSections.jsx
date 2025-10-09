// Node imports
import { Fragment } from "react";

// Local imports
import DisplaySidebarItems from "./DisplaySidebarItems";


// Main component
export default function DisplaySidebarSections({sidebarSections}){

  {/* Display the sections in a list */}
  return (
      <ul>
        {sidebarSections.map( (section) => {
          return (            
            <li key={section.sectionNumber}>
              {section.sectionTitle}
              {/* Display the items in each section */}
              <DisplaySidebarItems items={section.sectionItems} />
            </li>            
          );
        })}
      </ul>

  )
}
