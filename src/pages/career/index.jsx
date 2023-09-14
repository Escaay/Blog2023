import React from 'react';
import { Tree } from 'antd';
import './index.less'
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: '蹒跚学步',
    key: '0',
    children: [
      {
        title: '结缘PHP',
        key: '0-0',
        isLeaf: true,
      },
      {
        title: '初学前端三剑客',
        key: '0-1',
        isLeaf: true,
      },
			{
        title: 'css3和js制作特效',
        key: '0-2',
        isLeaf: true,
      },
			{
        title: '服务器和虚拟机',
        key: '0-3',
        isLeaf: true,
      },
    ],
  },
  {
    title: '初窥门径',
    key: '1',
    children: [
      {
        title: '网页',
        key: '1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '1-1',
        isLeaf: true,
      },
    ],
  },
	{
    title: '',
    key: '2',
    children: [
      {
        title: 'leaf 1-0',
        key: '2-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '2-1',
        isLeaf: true,
      },
    ],
  },
];
const Career = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
		<div className="career">
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
			className="left"
    />
		<div className="right">
			内容区
		</div>
		</div>
  );
};
export default Career;