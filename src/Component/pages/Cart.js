import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function Cart({item}) {
    
    const Listprice=useSelector((state)=>state.Listprice)
    const dispatch=useDispatch()
  

   let q=0
    for (let i = 0; i < Listprice.length; i++) {
        if (item.id==Listprice[i].id) {
            q=(Listprice[i].q);
        }
      
    }


useEffect(()=>{
  dispatch({type:"Create_PriceFinal",payload:{id:item.id,some:0}})
},[item])
useEffect(()=>{
  dispatch({type:"Update_PriceFinal",payload:{id:item.id,q:q,price:item.price}})
},[q])
  return (
    <div>
         <div key={item.id}>
         <h2>{item.title}</h2>
         <button onClick={(e)=>{
          dispatch({type:"Del_from_cart",payload:item.id});
          dispatch({type:"Del_PRICE",payload:item.price})
          }
          
          }>delete</button>
          
       
        <button onClick={()=>dispatch({type:"ADD_Q",payload:item.id})}  >+</button>
         
          {
          q
          }
         <button disabled={q<=1 ? true :false} onClick={()=>dispatch({type:"DEL_Q",payload:item.id})} >-</button>
         
       

      </div>
   
       
    </div>
  )
}
