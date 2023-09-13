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
				<p>第六届字节跳动青训营前端进阶组第三名，同选题队伍中唯一入围前五 <br />
				TurnKey项目迁移计算器到PM5.0-----进度70% <br />
				-----2023.9.11 ⭐⭐ <br />
				&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={bikeIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					骑行临港春花秋色公园 <br />
					骑行临港南汇嘴观海公园，打卡司南鱼 <br />
					探店一尺花园（拿铁1:2:1还是苦了）
					<br />
					-----2023.9.10⭐⭐
					<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={sleepIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					宿舍睡大觉 <br /> 
					-----2023.9.9 ⭐⭐
					<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={happyIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					写代码，心情愉悦
					<br />
					-----2023.9.4 ⭐⭐
					<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={planeIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					上海-----&gt;潍坊（风筝之都）
					<br />
					雲汐酒店，泰华，万达
					<br />
					闻山咖啡，一厢咖啡（小众）
					<br />
					朝天锅（特产），淄博烧烤
					<br />
					-----2023.8.25 ⭐⭐⭐
					<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={gaotieIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					潍坊-----&gt;青岛（AM:3:00火车）
					<br />
					石老人海水浴场，第三海水浴场 <br />
					台东路步行街，李记粥铺（理想早餐） <br />
					五四广场，八大关（人少海景美） <br />
					-----2023.8.26 ⭐⭐⭐⭐
					<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={gaotieIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					青岛-----&gt;石家庄 <br />
					北国商城，河北省博物馆（逛不完）
					<br />
					-----2023.8.26 ⭐<br />
					&nbsp;
				</p>
			</>
		)
	},
	{
		dot: (
			<Avatar
				src={<img alt='example' src={gaotieIcon} />}
				size='small'
				shape='square'
			></Avatar>
		),
		children: (
			<>
				<p>
					石家庄-----&gt;北京 <br />
					南锣鼓巷（豆汁儿喝不得）
					<br />
					景山公园，天安门广场 <br />
					八达岭长城-南长城（速通无压力）<br />
					-----2023.8.28 ⭐⭐ &nbsp;
				</p>
			</>
		)
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
