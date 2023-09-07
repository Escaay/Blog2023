import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import './global.less'

ReactDOM.createRoot(document.getElementById('root')).render(
	// 严格模式检测是否改变本应为只读的属性,state,props,context
	<React.StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.StrictMode>
)
