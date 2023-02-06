import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
const ShopingCart = () => {
  const [t,setT]=useState(null)
  const cart=useSelector((state)=>state.Cart)
 
;

 

  return (
    <div>
      {cart.map(item=><Cart setT={setT} key={item.id} item={item}    />)}
      
        <p>total :{t}</p>
  </div>)
}

export default ShopingCart
