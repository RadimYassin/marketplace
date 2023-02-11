import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./../../styles/ShopingCart.css";
import Cart from './Cart'
import TotalPrice from './TotalPrice';
const ShopingCart = () => {
  const cart=useSelector((state)=>state.Cart)
 
;




  return (
    <div className='cart-container'> 
        <div className='cart-products'>

            {cart.map(item=><Cart   key={item.id} item={item}    />)}

        </div>
        <TotalPrice/>
      
    
  </div>)
}

export default ShopingCart
