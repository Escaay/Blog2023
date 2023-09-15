import './index.less'
import React, {
	useEffect,
	useState,
	useImperativeHandle,
	forwardRef
} from 'react'
import { Card, Avatar, Button } from 'antd'
import randomInt from '@/utils/randomInt.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//保存定时器,可以知道是否在计时过程中
let activeTimer = null
let ifActive = true

let FloatNav = (props, ref)=>{
	const { list } = props
	const navigate = useNavigate()
	// const [ifActive, setIfActive] = useState(useSelector((store) => store.floatNav.ifOpen))
	const [floatClass, setFloatClass] = useState(['float-nav', 'floatAnimation'])
	const [left, setLeft] = useState(
		new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`)
	)
	const [top, setTop] = useState(
		new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`)
	)
	//打开浮动定时器
	const openActiveTimer = () => {
		activeTimer = setTimeout(() => {
			if (ifActive) {
				// if(floatClass.indexOf('floatAnimation') === -1){
					// setFloatClass(['float-nav', 'floatAnimation'])
				// }
				setLeft(
					new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`)
				)
				setTop(
					new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`)
				)
				openActiveTimer()
			} else {
				console.log(ifActive, 'ifActive')
				setFloatClass(['float-nav'])
				activeTimer = null
			}
		}, 5000)
	}

	ifActive = useSelector((store) =>{
		let {ifOpen} = store.floatNav
		if(ifOpen) {
			if(!activeTimer) {
				setFloatClass(['float-nav', 'floatAnimation'])
				setLeft(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`))
				setTop(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`))
				openActiveTimer()
			}
		}
		return ifOpen
	})

	useEffect(() => {
		setLeft(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`))
		setTop(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`))
		openActiveTimer()
	}, [])
	return (
		<div>
			{list.map((v, i) => {
				const { imageSrc, bgc, title, route } = v
				return (
					<a href='' key={`floatNav${i}`}>
						<Avatar
							size={{ xs: 50, sm: 50, md: 60, lg: 70, xl: 80, xxl: 100 }}
							src={imageSrc ? imageSrc : null}
							className={floatClass}
							style={{
								left: left[i],
								top: top[i],
								backgroundColor: bgc
							}}
							onClick={() => {
								navigate(route)
							}}
						>
							{title}
						</Avatar>
					</a>
				)
			})}
		</div>
	)
}
FloatNav = forwardRef(FloatNav)
export default FloatNav
