import React, { useEffect, useRef, useState } from 'react'
import { Card, Avatar, Button, Switch, Row, Col } from 'antd'
import {useDispatch} from 'react-redux'
import {
	EnvironmentOutlined,
	GithubOutlined,
	ReadOutlined
} from '@ant-design/icons'
import FloatNav from './FloatNav'
import HomeLoading from './HomeLoading'
import avatarImg from '/src/assets/images/avatar.jpg'
import './index.less'
import { open as openFloatNav, close as closeFloatNav} from '@/store/floatNav.js'

const Home = () => {
  const dispatch = useDispatch()

	const floatNavList = [
		{
			bgc: 'green',
			title: '职业',
			route: '/career'
		},
		{
			bgc: '#1c6679',
			title: '足迹',
			route: '/travel'
		},
		{
			bgc: 'yellowgreen',
			title: '兴趣',
			route: '/hobby'
		},
		{
			bgc: '#f86b05',
			title: '作品',
			route: '/works'
		},
		{
			bgc: '#e84033',
			title: '最近',
			route: '/recent'
		}
	]
	const ChangeFloatNav = (mode)=> {
		mode ? dispatch(openFloatNav()) : dispatch(closeFloatNav())
	}

	useEffect(() => {
	}, [])
	return (
		<Row>
			<Col span={24}>
		<div className='home'>
			{/* <HomeLoading></HomeLoading> */}
			<FloatNav list={floatNavList}></FloatNav>

			<div className='item item1'>
				<Switch
					defaultChecked
					onChange={(mode)=>{ChangeFloatNav(mode)}}
					checkedChildren='动态'
					unCheckedChildren='静止'
					className='changeFloatNav'
				/>
				<Card
					hoverable
					cover={<img alt='example' src={avatarImg} />}
					className='my-card'
				>
					<div className='title'>
						<div className='name'>邱文京</div>
						<div className='location'>
							<EnvironmentOutlined style={{ fontSize: '0.5rem' }} />
							<span>中国·上海</span>
						</div>
						<div className='job'>前端工程师</div>
						<div className='csdn'>
							<a href='https://blog.csdn.net/Aays2790' target='_blank'>
								<ReadOutlined style={{ fontSize: '0.5rem' }} />
								CSDN技术博客
							</a>
						</div>
						<div className='github'>
							<a href='https://github.com/Escaay' target='_blank'>
								<GithubOutlined style={{ fontSize: '0.5rem' }} />
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
		</Col>
		</Row>
	)
}
export default Home
