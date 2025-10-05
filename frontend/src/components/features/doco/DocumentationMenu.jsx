// Component that implements the sidebar menu on the documentation page

// Node imports
import { Menu } from '@ark-ui/react'; // Ark-UI component


// Main component
function DocumentationMenu() {
  return (
    <Menu.Root>
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
  )
}

export default DocumentationMenu;