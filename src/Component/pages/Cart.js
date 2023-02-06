import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart({item,total}) {
    

    const deletProdect=useDispatch()
    const deletPrice=useDispatch()

    const addq=useDispatch()
    const delq=useDispatch()

   let q=0
    for (let i = 0; i < total.length; i++) {
        if (item.id==total[i].id) {
            q=(total[i].q);
        }
      
    }
console.log(total);
  return (
    <div>
         <div key={item.id}>
         <h2>{item.title}</h2>
         <button onClick={(e)=>{
          deletProdect({type:"Del_from_cart",payload:item.id});
          deletPrice({type:"Del_PRICE",payload:item.price})
          }
          
          }>delete</button>
          
       
        <button onClick={()=>addq({type:"ADD_Q",payload:item.id})}  >+</button>
         
          {
          q
          }
         <button disabled={a<=1 ? true :false} onClick={()=>delq({type:"DEL_Q",payload:item.id})} >-</button>

       

      </div>
   
       
    </div>
  )
}
