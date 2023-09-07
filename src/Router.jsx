import { useState } from 'react'
import Home from './pages/home'
import Career from './pages/career'
import Travel from './pages/travel'
import Hobby from './pages/hobby'
import Emotion from './pages/emotion'

import { Routes, Route, Outlet } from 'react-router-dom'

function Router() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/travel' element={<Travel />}></Route>
        <Route path='/hobby' element={<Hobby />}></Route>
        <Route path='/emotion' element={<Emotion />}></Route>
      </Routes>
    </>
  )
}

export default Router
