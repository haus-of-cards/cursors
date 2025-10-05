// Component that implements the sidebar menu on the documentation page

// Node imports
import { TreeView, createTreeCollection } from '@ark-ui/react/tree-view'; // Ark-UI component
// import { SquareCheckBigIcon, ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-react';


// Main component
export default function DocumentationTree() {
  return (
    <TreeView.Root collection={collection}>
      <TreeView.Label>Docs</TreeView.Label>
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode key={node.id} node={node} indexPath={[index]} />
        ))}
      </TreeView.Tree>
    </TreeView.Root>
  )
}


const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchText>
              {/* <FolderIcon /> {node.name} */}
              {node.name}
            </TreeView.BranchText>
            <TreeView.BranchIndicator>
              {/* <ChevronRightIcon /> */}
            </TreeView.BranchIndicator>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <TreeView.ItemIndicator>
            {/* <SquareCheckBigIcon /> */}
          </TreeView.ItemIndicator>
          <TreeView.ItemText>
            {/* <FileIcon /> */}
            {node.name}
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}

interface Node {
  id: string
  name: string
  children?: Node[] | undefined
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        // id: 'node_modules',
        id: 'overview',
        name: 'Overview',
        children: [
          { id: 'overview/cursor', name: 'Cursor' },
          { id: 'overview/react', name: 'React' },
          {
            id: 'Overview/@types',
            name: '@types',
            children: [
              { id: 'Overview/@types/react', name: 'react' },
              { id: 'Overview/@types/react-dom', name: 'react-dom' },
            ],
          },
        ],
      },

      {
        id: 'gettingStarted',
        name: 'Getting Started',
        children: [
          { id: 'gettingStarted/install', name: 'Install' },
          { id: 'gettingStarted/basicCursor', name: 'Basic Cursor' },
        ],
      },
      
      {
        id: 'configuration',
        name: 'Configuration',
        children: [
          { id: 'configuration/props', name: 'Props' },
          { id: 'configuration/layers', name: 'Layers' },
        ],  
      },

    ],
  },
})

