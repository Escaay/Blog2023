import React, {useState} from 'react';
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
        title: '前端三剑客',
        key: '0-1',
        isLeaf: true,
      },
			{
        title: '制作动效',
        key: '0-2',
        isLeaf: true,
      },
			{
        title: '了解服务器',
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
        title: '组件化开发',
        key: '1-0',
        isLeaf: true,
      },
      {
        title: '页面布局',
        key: '1-1',
        isLeaf: true,
      },
			{
        title: 'puppteer爬虫',
        key: '1-2',
        isLeaf: true,
      },
    ],
  },
	{
    title: '略有小成',
    key: '2',
    children: [
      {
        title: 'React探索',
        key: '2-0',
        isLeaf: true,
      },
      {
        title: '前端工程化',
        key: '2-1',
        isLeaf: true,
      },
			{
        title: '逻辑思维',
        key: '2-2',
        isLeaf: true,
      },
    ],
  },
];
const Career = () => {
	const [leftClass,setLeftClass] = useState("left")
	const [rightClass,setRightClass] = useState(["right"])
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
	const changNav = ()=> {
		if(leftClass === 'left') {
			setLeftClass("left left-show")
			setRightClass("right right-show")
		}else {
			setLeftClass("left")
			setRightClass("right")
		}
	}
  return (
		<div className="career">
		<div className={leftClass}>
		<img src="/images/career_nav.png" onClick={changNav}/>
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
			className="nav-content"
    />
		</div>
		<div className={rightClass}>
			内容区
		</div>	
		</div>
  );
};
export default Career;