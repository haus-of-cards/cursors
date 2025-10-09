// Node imports
// import { Fragment } from "react";


// Main component
export default function DisplaySidebarItems({items}){

  return (
      // Display the items in a menu section
      <ul>
        {items.map( item =>          
          <li key={item.itemNumber}>{item.itemTitle}</li>
         )}
      </ul>

  )
}
