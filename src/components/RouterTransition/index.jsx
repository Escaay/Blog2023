import React, { useEffect, useState } from 'react'
import './index.less'
const RouterTransition= (props)=> {
  const [transitionClass,setClass] =useState(['routerTransition'])
  useEffect(()=>{

  },[])
  console.log(props);
  return (
    <div className={transitionClass}>
      {props.children[1]}
    </div>
  )
}
export default RouterTransition
