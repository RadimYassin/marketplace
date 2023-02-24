
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {AiFillDelete} from 'react-icons/ai'

export default function Cart({ item }) {
  
  const Listprice = useSelector((state) => state.Listprice)
  const dispatch = useDispatch()


  let q = 1
  for (let i = 0; i < Listprice.length; i++) {
    if (item.id == Listprice[i].id) {
      q = (Listprice[i].q);
    }

  }

  useEffect(()=>{
    dispatch({type:'Calc_total_Prices',payload:item.id})
  },[q])

  return (
    
    
    <div className='item'>
      <div className='cart-detail' >
        <div className='cart-product'>

          <img src={item.images[0]} alt={item.title} />
          <div className='product-title'>
             <h2>{item.title}</h2>
             <span> $ {item.price}</span>
          </div>
        </div>
       
        <div className='Qty'>

          <button className='addQty' onClick={() => {dispatch({ type: "ADD_Q", payload: item.id});
                                                    dispatch({type:'a',payload:{q:q,price:item.price}})
        }}  >+</button>

          <span> {q}</span>
          <button className='deleteQty' disabled={q <= 1 ? true : false} onClick={() => dispatch({ type: "DEL_Q", payload: item.id })} >-</button>

        </div>


      </div>

      <AiFillDelete className='delete' onClick={(e) => {
        dispatch({ type: "Del_from_cart", payload: item.id });
        dispatch({ type: "Del_PRICE", payload: item.price })
      }}/>


    </div>




  )
}
