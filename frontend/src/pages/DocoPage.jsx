// Page providing documentation for the Reactive Cursors project

// Local imports
import * as styles from './DocoPage.css';  // Vanilla Extract styling file


// React component DocoPage
function DocoPage() {
  
  return (
    <div className={styles.docopage}>
      <h1 >Reactive Cursor Documentation</h1>
      <h3 >  * Menu option - Overview </h3>
      {/* <div className={styles.stackhauspageDemoDiv}> */}
      <div className={styles.docopageMenuDiv}>
        {/* Sidebar menu */}
        <menu className={styles.docopageMenubar}>
          <ul>Overview</ul>
          <ul>Getting Started</ul>
          <ul>Configuration</ul>
        </menu>
        
        {/* Display of menu content */}
        <div className={styles.docopageMenuContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis obcaecati culpa facilis a autem dolore consectetur et possimus maxime non nihil nisi praesentium unde, quaerat perferendis eos, numquam quis?
        </div>

      </div>
      

        
    </div>

  )
}

export default DocoPage;

