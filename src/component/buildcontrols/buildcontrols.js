
import React from 'react'
import Buildcontrol from './buildcontrol/buildcontrol'
import './buildcontrols.css'

const control = [
  {label:"Salad",type:"Salad"},
  {label:"Meat",type:"Meat"},
  {label:"Cheese",type:"Cheese"},
  {label:"Bacon",type:"Bacon"},
]


export default function Buildcontrols(props) {
  return (
    <div className='BuildControls'>
      {control.map(ctrl =>(
        // <Buildcontrols></Buildcontrols>
        <Buildcontrol key={ctrl.label} label={ctrl.label} qosh={props}/>

      ))}
    </div>
  )
}
