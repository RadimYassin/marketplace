import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShopingCart = () => {

  const cart=useSelector((state)=>state.Cart)
  const total=useSelector((state)=>state.totale)
  const deletProdect=useDispatch()
  const AddTotal=useDispatch()
   console.log(total);
  return (
    <div>
      {cart.map(item=><div key={item.id}>
         <h2>{item.title}</h2>
         <button onClick={e=>deletProdect({type:"Del_from_cart",payload:item.id})}>delete</button><br/><br/>
          

        <button onClick={e=>AddTotal({type:"ADD_PRICE",payload:item.price})}>+</button>
         <input type="text" min={0} />
         <button>-</button>

       

      </div>)}
      <p>total :</p>
      
    </div>
  )
}

export default ShopingCart
