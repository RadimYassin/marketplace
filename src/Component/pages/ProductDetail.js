import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./../../styles/ProductDetail.css";
import { useDispatch ,useSelector} from 'react-redux'

import { client } from '../../axios'
import Img from '../Img';
import Sepinner from '../Sepinner';

const ProductDetail = () => {
    const {id}=useParams()
   
    const [data,setData] = useState ([])
    useEffect (() =>{
        setLoading(true)
        client.get(id)
       .then(res => {
          
            setData(res.data)
        })
        .finally(()=> setLoading(false))
    },[])
  const dis=useDispatch()
  const cart=useSelector((state)=>state.Cart)
  const selectItem=cart.find(i=>i.id===data.id)
  const rsult=selectItem ? true :false;
  const [loading,setLoading] = useState(false)
  return (
  <div>
    {
      loading ? <div className='containerS'>
          <Sepinner/>
      </div>:<div className='container'>
      <Img id={id} data={data.images}/>
      <div className='col2'>
           <div className='info'>
              <h1>{data.title}</h1>
              <span> ${data.price}</span>
           </div>
         
          <div className='desc'>
          <p> description :{data.description}</p>
          </div>
          <div className='btn'>
            {rsult ?  <button className='del' onClick={()=>dis({ type: "Del_from_cart", payload: data.id } )}>delete</button> :   <button className='add'  onClick={()=>dis({type:"ADD",payload:data,Prices:{q:1,price:data.price,id:data.id}} )}>add to cart</button>}
          
          </div>
      </div>
</div>
    }
  </div>
  )
}

export default ProductDetail
