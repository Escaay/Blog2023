import React, { useEffect, useChangeFloatNav, useRef } from 'react'
import { Card, Avatar, Button, Switch } from 'antd'
import {
	EnvironmentOutlined,
	GithubOutlined,
	ReadOutlined
} from '@ant-design/icons'
import FloatNav from '../../components/FloatNav'
import HomeLoading from '../../components/HomeLoading'
import avatarImg from '/src/assets/images/avatar.jpg'
import './index.less'
const Home = () => {
	const floatNavList = [
		{
			bgc: 'green',
			title: '职业'
		},
		{
			bgc: 'blue',
			title: '足迹'
		},
		{
			bgc: 'gray',
			title: '兴趣'
		},
		{
			bgc: 'pink',
			title: '社交'
		},
		{
			bgc: 'purple',
			title: '逻辑'
		}
	]
	// const floatNavRef = useRef()
	useEffect(() => {}, [])
	return (
		<div className='home'>
			{/* <Switch defaultChecked onChange={useChangeFloatNav} /> */}
			{/* <HomeLoading></HomeLoading> */}
			<FloatNav list={floatNavList}></FloatNav>
			{/* <FloatNav imageSrc='/src/assets/images/floatNav.png'></FloatNav> */}
			{/* <FloatNav imageSrc='/src/assets/images/floatNav.png'></FloatNav> */}

			<div className='item item1'>
				<Card
					hoverable
					cover={<img alt='example' src={avatarImg} />}
					className='my-card'
				>
					<div className='title'>
						<div className='name'>邱文京</div>
						<div className='location'>
							<EnvironmentOutlined style={{ fontSize: '20px' }} />
							<span>中国·上海</span>
						</div>
						<div className='job'>前端工程师</div>
						<div className='csdn'>
							<a href='https://blog.csdn.net/Aays2790' target='_blank'>
								<ReadOutlined style={{ fontSize: '20px' }} />
								CSDN技术博客
							</a>
						</div>
						<div className='github'>
							<a href='https://github.com/Escaay' target='_blank'>
								<GithubOutlined style={{ fontSize: '20px' }} />
								Github主页
							</a>
						</div>
					</div>
				</Card>
			</div>
			{/* <div className='item item2'>
			<Card
				hoverable
				style={{
					width: 240
				}}
				cover={
					<img
						alt='example'
						src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
					/>
				}
			></Card>
		</div> */}
			{/* <div className='item item3'>
			<Card
				hoverable
				style={{
					width: 240
				}}
				cover={
					<img
						alt='example'
						src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
					/>
				}
			></Card>
		</div> */}
		</div>
	)
}
export default Home
