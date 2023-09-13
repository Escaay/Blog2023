import React from 'react'
import { SmileOutlined, CarTwoTone } from '@ant-design/icons'
import { Timeline, Row, Col, Pagination, Avatar } from 'antd'
import gaotieIcon from '/images/gaotie.png'
import happyIcon from '/images/happy.png'
import planeIcon from '/images/plane.png'
import bikeIcon from '/images/bike.png'
import sleepIcon from '/images/sleep.png'
import './index.less'
const onChange = (pageNumber) => {
	console.log('Page: ', pageNumber)
}
const data = [
	{
		children: (
			<>
				<p>第六届字节跳动青训营前端进阶组第三名，同选题队伍中唯一入围前五</p>
				<p>TurnKey项目迁移计算器到PM5.0-----进度70%</p>
				<p>-----2023.9.11</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={bikeIcon}/>}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>骑行临港春花秋色公园</p>
				<p>骑行临港南汇嘴观海公园，打卡司南鱼</p>
				<p>探店一尺花园，环境⭐⭐⭐⭐⭐</p>
				<p>-----2023.9.10</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: <Avatar
		src={<img alt='example' src={sleepIcon}/>}
		size='small'
		shape='square'
	></Avatar>,
		children: (
			<>
				<p>宿舍睡大觉</p>
				<p>-----2023.9.9</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: <Avatar
		src={<img alt='example' src={happyIcon}/>}
		size='small'
		shape='square'
	></Avatar>,
		children: (
			<>
				<p>写代码，心情愉悦</p>
				<p>-----2023.9.4~9.8</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
			src={<img alt='example' src={planeIcon}/>}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>上海-----&gt;潍坊</p>
				<p>-----2023.8.25</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
			src={<img alt='example' src={gaotieIcon}/>}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>潍坊-----&gt;青岛</p>
				<p>-----2023.8.26</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
			src={<img alt='example' src={gaotieIcon}/>}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>青岛-----&gt;石家庄</p>
				<p>-----2023.8.26</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
			src={<img alt='example' src={gaotieIcon}/>}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>石家庄-----&gt;北京</p>
				<p>-----2023.8.28</p>
				<p>&nbsp;</p>
			</>
		)
	},
	{
		color: 'gray',
		children: (
			<>
				<p>Technical testing 1</p>
				<p>Technical testing 2</p>
				<p>Technical testing 3 2015-09-01</p>
			</>
		)
	},
	{
		color: '#00CCFF',
		dot: <SmileOutlined />,
		children: <p>Custom color testing</p>
	}
]
const Recent = () => {
	const [items, setItems] = React.useState(data)
	return (
		<div className='recent'>
			<Timeline className='timeLine' items={items} />
			<Pagination
				showQuickJumper
				defaultCurrent={2}
				total={500}
				onChange={onChange}
			/>
		</div>
	)
}
export default Recent
