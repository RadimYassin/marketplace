import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import "./../../styles/Product.css";
function Product({item}) {
    const cart=useSelector((state)=>state.Cart)
    const selectItem=cart.find(i=>i.id===item.id)
    const disabled=selectItem ? true :false;
    const dis=useDispatch()
   
  return (
    <div className='Product-Container'  >
                      <h2>{item.title}</h2>
                      <p>{item.price}</p>
                       <button disabled={disabled}  onClick={()=>{dis({type:"ADD",payload:item,Prices:{q:1,price:item.price,id:item.id}})}}>add to carte</button>
                  </div>
  )
}

export default Product
