
import './buildcontrol.css'
import React from 'react'

export default function Buildcontrol(props) {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.label}</div>
      <div className='Less'>Less</div>
      <div className='More' onClick={() => { console.log(props)}}>More</div>
    </div>
  )
}


// console.log(props.qosh.ozgar)

// var result = Object.keys(props.qosh.ozgar).map((key) => [props.qosh.ozgar(key), props.qosh.ozgar[key]]) }


