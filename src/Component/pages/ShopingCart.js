import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import TotalPrice from './TotalPrice';
const ShopingCart = () => {
  const cart=useSelector((state)=>state.Cart)
 
;




  return (
    <div> 
        <div>

            {cart.map(item=><Cart   key={item.id} item={item}    />)}

        </div>
        <TotalPrice/>
      
    
  </div>)
}

export default ShopingCart
