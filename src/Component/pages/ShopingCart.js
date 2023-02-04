import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShopingCart = () => {

  const cart=useSelector((state)=>state.Cart)
  const deletProdect=useDispatch()

  console.log(cart);
  return (
    <div>
      {cart.map(item=><div key={item.id}>
         <h2>{item.title}</h2>
         <button onClick={e=>deletProdect({type:"Del_from_cart",payload:item.id})}>delete</button>
      </div>)}
      
    </div>
  )
}

export default ShopingCart
