// Component that implements the sidebar menu on the documentation page

// Node imports
import { NavigationMenu } from "radix-ui";  // Radix-UI component


// Main component
function DocumentationMenu() {
  return (

    <NavigationMenu.Root>
      <NavigationMenu.List>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Overview</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link>React Cursors</NavigationMenu.Link>
            <NavigationMenu.Link>Cursor Functions</NavigationMenu.Link>        
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link>Installing</NavigationMenu.Link>
              <NavigationMenu.Link>Demo Cursor</NavigationMenu.Link>        
          </NavigationMenu.Content>            
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Configuration</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>


    // <Menu.Root>
    //   <Menu.Trigger>Open menu</Menu.Trigger>
    //   <Menu.Positioner>
    //     <Menu.Content>
    //       <Menu.ItemGroup>
    //         <Menu.ItemGroupLabel>Overview</Menu.ItemGroupLabel>
    //         <Menu.Item value="react">React</Menu.Item>
    //         <Menu.Item value="solid">Solid</Menu.Item>
    //         <Menu.Item value="vue">Vue</Menu.Item>
    //         <Menu.Item value="svelte">Svelte</Menu.Item>
    //       </Menu.ItemGroup>
    //       <Menu.ItemGroup>
    //         <Menu.ItemGroupLabel>Getting Started</Menu.ItemGroupLabel>
    //         <Menu.Item value="panda">Panda</Menu.Item>
    //         <Menu.Item value="tailwind">Tailwind</Menu.Item>
    //       </Menu.ItemGroup>
    //       <Menu.ItemGroup>
    //         <Menu.ItemGroupLabel>Configuration</Menu.ItemGroupLabel>
    //         <Menu.Item value="panda">Panda</Menu.Item>
    //         <Menu.Item value="tailwind">Tailwind</Menu.Item>
    //       </Menu.ItemGroup>
    //     </Menu.Content>
    //   </Menu.Positioner>
    // </Menu.Root>
  )
}

export default DocumentationMenu;