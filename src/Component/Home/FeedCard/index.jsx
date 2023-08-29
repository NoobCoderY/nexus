import React from 'react'
import "./index.css"
import FeedCard from './FeedCard'
import Client from './Client'
import { feedCardArr } from '../../helper/helper'

const index = () => {
  console.log(feedCardArr);
  return (
    <div style={{position:"relative" ,zIndex:"3" ,backgroundColor:"#16181c"}}>
      {feedCardArr.map((feedCardArrData,index) => {
        return (
          <FeedCard feedCardArrData={ feedCardArrData} index={index} />
        )
      })}
      <Client/>
    </div>
  )
}

export default index