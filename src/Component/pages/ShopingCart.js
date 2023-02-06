import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
const ShopingCart = () => {

  const cart=useSelector((state)=>state.Cart)
 
;

const total=useSelector((state)=>state.total)


  return (
    <div>
      {cart.map(item=><Cart total={total}  key={item.id} item={item}    />)}
      
        <p>total :</p>
  </div>)
}

export default ShopingCart
