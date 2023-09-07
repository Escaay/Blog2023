import './index.less'
import React, { useEffect, useState } from 'react'
import { Card, Avatar, Button } from 'antd'
export default function HomeLoading(props) {
	useEffect(() => {}, [])
	const circleList = new Array(10).fill(0)
	return (
		<div className='homeLoading'>
			{circleList.map((v, i) => {
				console.log(i)
				return (
					<div
						key={`circle${i}`}
						className='circle'
						style={{ width: `${i * 5}vw`, height: `${i * 5}vw` }}
					></div>
				)
			})}
		</div>
	)
}
