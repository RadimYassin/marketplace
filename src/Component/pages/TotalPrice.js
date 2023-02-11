import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TotalPrice() {


let prices=useSelector(state=>state.prices)
let total=0;
for (let i = 0; i < prices.length; i++) {
         total+=prices[i].some
  
}
  return (
    <div className='total'>
        total: {total} $
    </div>
  )
}
