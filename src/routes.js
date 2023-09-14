// 导入路由组件
import Home from './pages/home'
import React from 'react'
const Career = React.lazy(() => import('./pages/career'))
const Travel = React.lazy(() => import('./pages/travel'))
const Hobby = React.lazy(() => import('./pages/hobby'))
const Recent = React.lazy(() => import('./pages/recent'))
const Works = React.lazy(() => import('./pages/works'))

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/recent',
		component: Recent
	},
	{
		path: '/career',
		component: Career
	},
	{
		path: '/works',
		component: Works
	},
]

export default routes;