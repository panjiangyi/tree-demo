import React, { useState } from "react";
import { Checkbox } from "./checkbox";

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

const TreeNodeComponent: React.FC<{
  node: TreeNode;
  selected: TreeNode[];
  onSelect: (node: TreeNode[]) => void;
}> = ({ node, selected, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = node.children?.length;

  const handleToggle = () => {
    if (!hasChildren) return;
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    // onSelect(node);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ marginLeft: "20px" }}>
        {hasChildren && (
          <span onClick={handleToggle}>{expanded ? "-" : "+"}</span>
        )}
        <span
          onClick={handleSelect}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          {node.name}
        </span>
      </div>
      {expanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((child) => (
            <TreeNodeComponent
              selected={selected}
              key={child.id}
              node={child}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree: React.FC<{
  data: TreeNode[];
  selected: TreeNode[];
  onSelect: (selectedNodes: TreeNode[]) => void;
}> = ({ data, selected, onSelect }) => {
  return (
    <div>
      {data.map((node) => (
        <TreeNodeComponent
          selected={selected}
          key={node.id}
          node={node}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Tree;
