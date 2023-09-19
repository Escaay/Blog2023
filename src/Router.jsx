import React, { useState } from 'react'
import Home from './pages/home'
import {Suspense} from 'react'
const Career = React.lazy(() => import('./pages/career'))
const Travel = React.lazy(() => import('./pages/travel'))
const Hobby = React.lazy(() => import('./pages/hobby'))
const Recent = React.lazy(() => import('./pages/recent'))
const Works = React.lazy(() => import('./pages/works'))
import './Router.less'
import { Routes, Route, Outlet, useLocation, Link } from 'react-router-dom'
import { Dropdown, Space, Avatar } from 'antd'
import NavBar from '@/components/NavBar'

const items = [
  {
    label: <a href='/'>首页</a>,
    key: 'home',
  },
  {
    label: <Link to='/career'>职业</Link>,
    key: 'career',
  },
  {
    label: <a href='/recent'>最近</a>,
    key: 'recent',
  },
	{
    label: <a href='/works'>作品</a>,
    key: 'works',
  },
];


function Router() {
	const location = useLocation();
  return (
    <div className='router'>
			<NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/career' element={<Suspense><Career /></Suspense>}></Route>
        <Route path='/travel' element={<Suspense><Travel /></Suspense>}></Route>
        <Route path='/hobby' element={<Suspense><Hobby /></Suspense>}></Route>
        <Route path='/recent' element={<Suspense><Recent /></Suspense>}></Route>
        <Route path='/works' element={<Suspense><Works /></Suspense>}></Route>
      </Routes>
    </div>
  )
}

export default Router
