import { useState } from "react";
import Tree, { SelectedNodes, TreeNode } from "@/component/tree";

const treeData: TreeNode[] = [
  {
    id: 1,
    name: "北京",
    children: [
      { id: 11, name: "朝阳区" },
      { id: 13, name: "海淀区" },
    ],
  },
  {
    id: 2,
    name: "湖北省",
    children: [
      {
        id: 21,
        name: "武汉市",
        children: [
          {
            id: 211,
            name: "洪山区",
          },
          {
            id: 212,
            name: "青山区",
            children: [
              {
                id: 2121,
                name: "和平街道",
              },
              {
                id: 2122,
                name: "仁和路",
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: "孝感市",
        children: [
          {
            id: 231,
            name: "汉川市",
          },
          {
            id: 232,
            name: "市区",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "上海",
    children: [
      {
        id: 31,
        name: "浦东新区",
        children: [
          { id: 311, name: "鹤沙航城" },
          { id: 312, name: "航头" },
        ],
      },
      { id: 32, name: "黄浦区" },
    ],
  },
];
const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SelectedNodes>([]);

  const handleSelect = (nodes: SelectedNodes) => {
    setSelectedNode(nodes);
  };

  return (
    <div>
      <h1>Tree Selector</h1>
      <p>
        对每颗子树进行了精确的渲染控制,
        避免了在切换选中状态时，整棵树都被重新渲染
      </p>
      <Tree selected={selectedNode} data={treeData} onSelect={handleSelect} />
    </div>
  );
};

export default App;
