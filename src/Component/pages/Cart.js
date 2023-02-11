
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    dispatch({type:'a',payload:item.id})
  },[q])

  return (

    
    <section className='cart-container'>
      <div className='cart-detail' key={item.id}>
        <h2>{item.title}+++++{item.price}</h2>
        <div className='Qty'>

          <button className='addQty' onClick={() => {dispatch({ type: "ADD_Q", payload: item.id});
                                                    dispatch({type:'a',payload:{q:q,price:item.price}})
        }}  >+</button>

          <span> {q}</span>
          <button className='deleteQty' disabled={q <= 1 ? true : false} onClick={() => dispatch({ type: "DEL_Q", payload: item.id })} >-</button>

        </div>


      </div>

      <button className='delete' onClick={(e) => {
        dispatch({ type: "Del_from_cart", payload: item.id });
        dispatch({ type: "Del_PRICE", payload: item.price })
      }}>delete</button>


    </section>




  )
}
