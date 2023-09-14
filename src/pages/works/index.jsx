import React from 'react';
import { Tree } from 'antd';
import './index.less'
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: 'RT-thread实习记录',
    key: '0-0',
    children: [
      {
        title: '123',
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];
const Works = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
		<div className="works">
			<div className="left">
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
		</div>
		<div className="right">
			内容区
		</div>
		</div>
  );
};
export default Works;