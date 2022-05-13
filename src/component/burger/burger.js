
// import React, { Component } from 'react'
import Crburger from '../crburger/crburger'
import './burger.css'

import React from 'react'

export default function Burger(props) {
  let transformedingridients = Object.keys(props.ingridients).map(inkey => {
    return [...Array(props.ingridients[inkey])].map((_,i) => {
      return <Crburger key ={inkey + i} type={inkey} />
    })
  }).reduce((arr,ell) => {
    return arr.concat(ell)
  })
  
  if (transformedingridients.length === 0) {
    transformedingridients = <p>Iltimos pishloq solmang...</p>
  }
  
  return (
    <div className='Burger'>
      <Crburger type="BreadTop"></Crburger>
      {transformedingridients}
      <Crburger type="BreadBottom"></Crburger>
    </div>
  )
}







// export default class Burger extends Component {

//   render() {
//     return (
//       <div className='Burger'>
//         <Crburger type="BreadTop"></Crburger>
//         <Crburger type="Meat"></Crburger>
//         <Crburger type="Salad"></Crburger>
//         <Crburger type="BreadBottom"></Crburger>
//       </div>
//     )
//   }
// }














