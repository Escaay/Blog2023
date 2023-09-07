import './index.less'
import React, { useEffect, useState, useImperativeHandle } from 'react'
import { Card, Avatar, Button } from 'antd'
import randomInt from '@/utils/randomInt.js'

let FloatNav = (props, ref) => {
	//   useImperativeHandle(ref, () => ({ // 暴露给父组件的方法
	//     useChangeFloatNav,
	//      refreshInfo: () => {
	//        console.log("子组件refreshInfo方法")
	//    }
	//  }))
	//    function useChangeFloatNav(){
	//     console.log(123);
	//     if(activeTimer){
	//       clearInterval(activeTimer)
	//       setActiveTimer(null)
	//     }else{
	//       // 先执行一次
	//       setLeft(`${randomInt(5,95)}vw`)
	//       setTop(`${randomInt(5,95)}vh`)

	//       setActiveTimer(setInterval(()=>{
	//         setLeft(`${randomInt(5,95)}vw`)
	//         setTop(`${randomInt(5,95)}vh`)
	//       },4000))
	//     }
	//   }
	const { list } = props
	const [floatClass, setFloatClass] = useState(['float-nav'])
	const [left, setLeft] = useState(
		new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`)
	)
	const [top, setTop] = useState(
		new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`)
	)
	const [opacity, setOpacity] = useState(1)
	const [activeTimer, setActiveTimer] = useState(null)

	useEffect(() => {
		setLeft(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`))
		setTop(new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`))

		setActiveTimer(
			setInterval(() => {
				setLeft(
					new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vw`)
				)
				setTop(
					new Array(list.length).fill(0).map(() => `${randomInt(20, 80)}vh`)
				)
			}, 5000)
		)
	}, [])
	return (
		<div>
			{list.map((v, i) => {
				const { imageSrc, bgc, title } = v
				return (
					<Avatar
						size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
						src={imageSrc ? imageSrc : null}
						className={floatClass}
						style={{
							left: left[i],
							top: top[i],
							backgroundColor: bgc,
							opacity
						}}
						key={`floatNav${i}`}
					>
						{title}
					</Avatar>
				)
			})}
		</div>
	)
}
// FloatNav = forwardRef(FloatNav)
export default FloatNav
