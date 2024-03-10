import React, { useState } from "react";
import { Checkbox } from "./checkbox";
import uniq from "lodash.uniq";
import { useMemoizedFn } from "ahooks";
export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

export type SelectedNodes = TreeNode["id"][];

function getAllDescendantIds(node: TreeNode): number[] {
  let ids: number[] = [];

  if (node.children) {
    node.children.forEach((child) => {
      ids.push(child.id);
      ids = [...ids, ...getAllDescendantIds(child)];
    });
  }

  return ids;
}

const TreeNodeComponent: React.FC<{
  node: TreeNode;
  selected: SelectedNodes;
  onSelect: (node: SelectedNodes) => void;
}> = ({ node, selected, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const isLeaf = !node.children?.length;

  const allDescendantIds = getAllDescendantIds(node);

  const handleToggle = () => {
    if (isLeaf) return;
    setExpanded(!expanded);
  };

  let isSelected: boolean;
  if (isLeaf) {
    isSelected = selected.includes(node.id);
  } else {
    const selectedDescendantIds = selected.filter((id) =>
      allDescendantIds.includes(id)
    );
    isSelected = selectedDescendantIds.length === allDescendantIds.length;
  }

  return (
    <div>
      <div onClick={handleToggle} style={{ marginLeft: 20 }}>
        {!isLeaf && (
          <span
            style={{ marginRight: 5, cursor: "pointer" }}
            onClick={handleToggle}
          >
            {expanded ? "-" : "+"}
          </span>
        )}
        <Checkbox
          checked={isSelected}
          onClick={(e) => e.stopPropagation()}
          onChange={(checked) => {
            if (checked) {
              if (isLeaf) {
                onSelect(uniq([...selected, node.id]));
              } else {
                onSelect(uniq([...selected, ...allDescendantIds]));
              }
            } else {
              if (isLeaf) {
                onSelect(selected.filter((id) => id !== node.id));
              } else {
                onSelect(
                  selected.filter((id) => !allDescendantIds.includes(id))
                );
              }
            }
          }}
        />
        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
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
  selected: SelectedNodes;
  onSelect: (selectedNodes: TreeNode["id"][]) => void;
}> = ({ data, selected, onSelect }) => {
  const _onSelect = useMemoizedFn((node: SelectedNodes) => onSelect(node));
  return (
    <>
      {data.map((node) => (
        <TreeNodeComponent
          selected={selected}
          key={node.id}
          node={node}
          onSelect={_onSelect}
        />
      ))}
    </>
  );
};

export default Tree;
