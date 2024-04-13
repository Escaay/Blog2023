import React, { useEffect, useRef, useState } from 'react'
import { DotChartOutlined } from '@ant-design/icons'
import { Card, Avatar, Button, Switch, Row, Col, Skeleton, Spin } from 'antd'
import { useDispatch } from 'react-redux'
import {
	EnvironmentOutlined,
	GithubOutlined,
	ReadOutlined,
	MailOutlined
} from '@ant-design/icons'
import FloatNav from './FloatNav' 
import HomeLoading from './HomeLoading'
import avatarImg from '/images/avatar.jpg'
import './index.less'
import {
	open as openFloatNav,
	close as closeFloatNav
} from '@/store/floatNav.js'
import RouterTransition from '@/components/RouterTransition'

const Home = () => {
	const dispatch = useDispatch()
	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const floatNavList = [
		{
			bgc: 'rgb(99, 211, 99)',
			title: '职业',
			route: '/career'
		},
		// {
		// 	bgc: '#1c6679',
		// 	title: '足迹',
		// 	route: '/travel'
		// },
		// {
		// 	bgc: 'yellowgreen',
		// 	title: '兴趣',
		// 	route: '/hobby'
		// },
		{
			bgc: 'rgb(80, 193, 208)',
			title: '作品',
			route: '/works'
		},
		{
			bgc: 'rgb(252, 83, 47)',
			title: '日记',
			route: '/recent'
		}
	]
	const ChangeFloatNav = (mode) => {
		mode ? dispatch(openFloatNav()) : dispatch(closeFloatNav())
	}

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [])
	const [loading, setLoading] = useState(true) //是否加载中

	return (
		// 	{/* 骨架屏 */}
		// 	{/* {
		// 	loading
		// 	?
		// 	<div className="Skeleton">
		// 					<Skeleton.Image active={true} className='avatarSkt'/>
		// 					<div className="floatNavSkt">
		// 					<Skeleton.Node active={true} className='floatNavSktItem'>
		// 					<Avatar
		// 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
		// 				>
		// 				</Avatar>
    //     </Skeleton.Node>
		// 		<Skeleton.Node active={true} className='floatNavSktItem'>
		// 					<Avatar
		// 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
		// 				>
		// 				</Avatar>
    //     </Skeleton.Node>
		// 		<Skeleton.Node active={true} className='floatNavSktItem'>
		// 					<Avatar
		// 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
		// 				>
		// 				</Avatar>
    //     </Skeleton.Node>
		// 					</div>
		// 					<div className="spin">
		// 					<Spin size='large'>
		// 					</Spin>
		// 					<div className='text'>加载中</div>
		// 					</div>
		// 		</div>
		// 	:
		// 	''
		// } */}
			<Row>
				<Col span={24}>
					<div className='home'>
						<div className='item item1'>
							{/* <HomeLoading></HomeLoading> */}
							{loading ? (
								<div className='Skeleton'>
									<Skeleton.Image active={true} className='avatarSkt'/>
									<div className='floatNavSkt'></div>
									<div className='spin'>
										<Spin size='large'></Spin>
										<div className='text'>加载中</div>
									</div>
								</div>
							) : (
								<>
									<FloatNav list={floatNavList}></FloatNav>
									<Switch
										defaultChecked
										onChange={(mode) => {
											ChangeFloatNav(mode)
										}}
										checkedChildren='动态'
										unCheckedChildren='静止'
										className='changeFloatNav'
									/>
									<Card
										hoverable
										cover={<img alt='example' src={avatarImg} style={{borderRadius:'50%',width: '15vmax'}}/>}
										className='my-card'
									>
										<div className='title'>
											<div className='name'>风无迁</div>
											<div className='location'>
												<EnvironmentOutlined />
												<span>中国-上海</span>
											</div>
											<div className='email'>
												<MailOutlined />
												<span>&nbsp;2790751195@qq.com</span>
											</div>
											<div className='job'>前端工程师</div>
											<div className='csdn'>
												<a
													href='https://blog.csdn.net/Aays2790'
													target='_blank'
												>
													<ReadOutlined />
													CSDN技术博客
												</a>
											</div>
											<div className='github'>
												<a href='https://github.com/Escaay' target='_blank'>
													<GithubOutlined />
													Github主页
												</a>
											</div>
										</div>
									</Card>
								</>
							)}
						</div>

						{/* <div className='item item2'>
			<Card
				hoverable
				style={{
					width: '10vmax'
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
