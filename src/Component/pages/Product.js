import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Product({item}) {
    const cart=useSelector((state)=>state.Cart)
    const disbladBtn=cart.find(i=>i.id===item.id)
    const btn=disbladBtn ? true :false;
    console.log(disbladBtn)
    const dis=useDispatch()
  return (
    <div  >
                      <h2>{item.title}</h2>
                       <button disabled={btn}  onClick={()=>dis({type:"ADD",payload:item})}>add to carte</button>
                  </div>
  )
}

export default Product
