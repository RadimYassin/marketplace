import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Product({item}) {
    const cart=useSelector((state)=>state.Cart)
    const disbladBtn=cart.find(i=>i.id===item.id)
    const btn=disbladBtn ? true :false;
    const dis=useDispatch()
    const AddPrice=useDispatch()
  return (
    <div  >
                      <h2>{item.title}</h2>
                      <p>{item.price}</p>
                       <button disabled={btn}  onClick={()=>{dis({type:"ADD",payload:item});AddPrice({type:"ADD_PRICE",payload:item.price})}}>add to carte</button>
                  </div>
  )
}

export default Product
