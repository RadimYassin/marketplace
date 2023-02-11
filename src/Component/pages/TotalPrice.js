import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./../../styles/Total.css";
export default function TotalPrice() {


let prices=useSelector(state=>state.prices)
let dis=useDispatch()
let total=0;
for (let i = 0; i < prices.length; i++) {
         total+=prices[i].some
  
}
  return (
    <div className='total'>
      <p> total: {total} $</p>
      <button onClick={()=>dis({type:"Delete_All_CART"})}>delete All </button>
    </div>
  )
}
