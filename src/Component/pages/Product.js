import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Product({item}) {
    const cart=useSelector((state)=>state.Cart)
    const selectItem=cart.find(i=>i.id===item.id)
    const disabled=selectItem ? true :false;
    const dis=useDispatch()
   
  return (
    <div  >
                      <h2>{item.title}</h2>
                      <p>{item.price}</p>
                       <button disabled={disabled}  onClick={()=>{dis({type:"ADD",payload:item});dis({type:"ADD_PRICE",payload:{q:1,price:item.price,id:item.id}})}}>add to carte</button>
                  </div>
  )
}

export default Product
