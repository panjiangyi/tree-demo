import { useState } from "react";
import Tree, { TreeNode } from "@/component/tree";

const treeData: TreeNode[] = [
  {
    id: 2,
    name: "北京",
    children: [
      { id: 3, name: "朝阳区" },
      { id: 4, name: "海淀区" },
    ],
  },
  {
    id: 5,
    name: "上海",
    children: [
      {
        id: 6,
        name: "浦东新区",
        children: [
          { id: 6666, name: "鹤沙航城" },
          { id: 7777, name: "航头" },
        ],
      },
      { id: 7, name: "黄浦区" },
    ],
  },
];
const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TreeNode[]>([]);

  const handleSelect = (nodes: TreeNode[]) => {
    setSelectedNode(nodes);
    console.log("fuck", nodes);
  };

  return (
    <div>
      <h1>Tree Selector</h1>
      <Tree selected={selectedNode} data={treeData} onSelect={handleSelect} />
    </div>
  );
};

export default App;
