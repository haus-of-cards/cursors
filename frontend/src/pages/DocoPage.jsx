// Page providing documentation for the React Cursors project

// Local imports
import * as styles from './DocoPage.css';  // Vanilla Extract styling file
import Documentation from '../components/features/doco/Documentation';


// React component DocoPage
function DocoPage() {
  
  return (
    <div className={styles.docopage}>
      <h1 >React Cursors Documentation</h1>
      <Documentation /> {/* Display documentation menu & content*/}
    </div>

  )
}

export default DocoPage;

