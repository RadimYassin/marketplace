import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart({item}) {
    
    const total=useSelector((state)=>state.total)
    const deletProdect=useDispatch()
    const deletPrice=useDispatch()

let x=0
for (let i = 0; i <total.length; i++) {
     x += Number(total[i]);
  
}





  return (
    <div>
         <div key={item.id}>
         <h2>{item.title}</h2>
         <button onClick={(e)=>{
          deletProdect({type:"Del_from_cart",payload:item.id});
          deletPrice({type:"Del_PRICE",payload:item.price})
          }
          
          }>delete</button><br/><br/>
          
       
        <button  >+</button>
       
         <button>-</button>

       

      </div>
   
       {x}
    </div>
  )
}
