// Component that displays documentation on DocoPage

// Node imports
import * as styles from './Documentation.css';  // Vanilla Extract styling file
import DocumentationMenu from './DocumentationMenu';  // Sidebar menu
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

        <Menu.Root defaultOpen={true} className={styles.documentationMenu}>
          <Menu.Trigger>Open menu</Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Overview</Menu.ItemGroupLabel>
                <Menu.Item value="react">React</Menu.Item>
                <Menu.Item value="solid">Solid</Menu.Item>
                <Menu.Item value="vue">Vue</Menu.Item>
                <Menu.Item value="svelte">Svelte</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Getting Started</Menu.ItemGroupLabel>
                <Menu.Item value="panda">Panda</Menu.Item>
                <Menu.Item value="tailwind">Tailwind</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Configuration</Menu.ItemGroupLabel>
                <Menu.Item value="panda">Panda</Menu.Item>
                <Menu.Item value="tailwind">Tailwind</Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>



        {/* Content */}
        <div className={styles.documentationContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis obcaecati culpa facilis a autem dolore consectetur et possimus maxime non nihil nisi praesentium unde, quaerat perferendis eos, numquam quis?
        </div>

      </div>

      

    </div>

  )
}

export default Documentation