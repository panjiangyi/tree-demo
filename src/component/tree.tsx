import React, { memo, useState } from "react";
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

  if (node.children?.length) {
    node.children.forEach((child) => {
      const isLeaf = !child.children?.length;
      if (isLeaf) {
        ids.push(child.id);
      } else {
        ids = [...ids, ...getAllDescendantIds(child)];
      }
    });
  }

  return ids;
}

function detectChanges<T>(all: T[], prev: T[], next: T[]) {
  const added = [];
  const removed = [];

  // 检查哪些元素在prev中存在但不在next中
  for (const item of prev) {
    if (!next.includes(item)) {
      removed.push(item);
    }
  }

  // 检查哪些元素在next中存在但不在prev中
  for (const item of next) {
    if (!prev.includes(item)) {
      added.push(item);
    }
  }

  const changes = [...added, ...removed];
  const changedAll = all.filter((k) => changes.includes(k));
  return changedAll;
}

const TreeNodeComponent: React.FC<{
  node: TreeNode;
  selected: SelectedNodes;
  onSelect: (node: SelectedNodes) => void;
  onUnselect: (node: SelectedNodes) => void;
}> = memo(
  ({ node, selected, onSelect, onUnselect }) => {
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
                  onSelect([node.id]);
                } else {
                  onSelect(allDescendantIds);
                }
              } else {
                if (isLeaf) {
                  onUnselect([node.id]);
                } else {
                  onUnselect(allDescendantIds);
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
                onUnselect={onUnselect}
                key={child.id}
                node={child}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
  (prev, next) => {
    if (!prev.node.children) {
      return prev === next;
    }
    // 以下代码用来检测selected数组是否和当前节点有关，如果无关则不更新这一颗子树。
    const allDescendantIds = getAllDescendantIds(prev.node);
    const prevSelected = prev.selected;
    const nextSelected = next.selected;
    const changes = detectChanges(allDescendantIds, prevSelected, nextSelected);
    // 如果没有和自己有关的选中变更，则返回false，跳过更新
    return !changes.length;
  }
);

const Tree: React.FC<{
  data: TreeNode[];
  selected: SelectedNodes;
  onSelect: (selectedNodes: TreeNode["id"][]) => void;
}> = ({ data, selected, onSelect }) => {
  const _onSelect = useMemoizedFn((node: SelectedNodes) => {
    onSelect(uniq([...selected, ...node]));
  });
  const _onUnSelect = useMemoizedFn((node: SelectedNodes) => {
    onSelect(selected.filter((id) => !node.includes(id)));
  });
  return (
    <>
      {data.map((node) => (
        <TreeNodeComponent
          selected={selected}
          key={node.id}
          node={node}
          onSelect={_onSelect}
          onUnselect={_onUnSelect}
        />
      ))}
    </>
  );
};

export default Tree;
