import React from 'react'
import { useSelector } from 'react-redux'

const ShopingCart = () => {

  const cart=useSelector((state)=>state.Cart)
  
  return (
    <div>
      {cart.map(item=><h2 key={item.id}>{item.title}</h2>)}
    </div>
  )
}

export default ShopingCart
