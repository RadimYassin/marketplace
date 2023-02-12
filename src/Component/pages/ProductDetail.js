import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./../../styles/ProductDetail.css";

import { client } from '../../axios'
const ProductDetail = () => {

  const [data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{

         client.get(`/${id}`).then(res=>setData(res.data))

    },[])

  return (
    <div className='container'>
         <div className='img'>
                <button>-</button>
                   <img src={data.images[1]} alt={data.title}/>
                   <button>+</button>
         </div>

         <div className='info'>
            <h1>{data.title}</h1>
            <p>{data.price}</p>
            
         </div>
    </div>
  )
}

export default ProductDetail
