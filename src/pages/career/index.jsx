import React, {useState} from 'react';
import { Tree, Carousel } from 'antd';
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
	const [containerClass,setContainerClass] = useState("container")
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
	/**
	 * 
	 * @param {array} keys 子节点的键数组
	 * @param {object} info 展开/收起的节点信息 
	 */
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
	const changNav = ()=> {
		if(containerClass === 'container') {
			setContainerClass("container container-show")
		}else {
			setContainerClass("container")
		}
	}
  return (
		<div className="career">
			<div className={containerClass}>
		<div className='left'>
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
		<div className='right'>
    <div className='cards-item'>
		{/* 手游--&gt;我的世界--&gt;开私服--&gt;需要phar后缀插件--&gt;解包插件发现php--&gt;魔改php--&gt;自学php */}
		待补充
    </div>
		</div>
		</div>
		</div>
  );
};
export default Career;