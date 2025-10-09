// Node imports
// import { Fragment } from "react";


// Main component
export default function DisplaySidebarItems({items, itemSelected, setItemSelected}){

  // 
  function handleClick(e){
    // console.log("Target value is: ", e.target.id);
    setItemSelected(e.target.id);
  }

  return (
      // Display the items in a menu section
      <ul>
        {items.map( item =>          
          <li key={item.itemNumber} id={item.itemNumber} onClick={handleClick}>
            { (itemSelected == item.itemNumber) && <b>{item.itemTitle}</b> }
            { (itemSelected != item.itemNumber) && item.itemTitle  }
                       
          </li>
         )}
      </ul>

  )
}
