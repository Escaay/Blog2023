import React, { useState, useRef } from 'react'
import Home from './pages/home'
import './router.less'
const Career = React.lazy(() => import('./pages/career'))
const Travel = React.lazy(() => import('./pages/travel'))
const Hobby = React.lazy(() => import('./pages/hobby'))
const Recent = React.lazy(() => import('./pages/recent'))
const Works = React.lazy(() => import('./pages/works'))

import { Routes, Route, Outlet } from 'react-router-dom'

function Router() {
	return (
		<>
		{/* <RouterTransition ref1={ref1} ref2={ref2} class1="class1" class2="class2"> */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/career' element={<Career />}></Route>
				<Route path='/travel' element={<Travel />}></Route>
				<Route path='/hobby' element={<Hobby />}></Route>
				<Route path='/recent' element={<Recent />}></Route>
				<Route path='/works' element={<Works />}></Route>
			</Routes>
		{/* </RouterTransition> */}
		</>
	)
}

export default Router
