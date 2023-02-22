import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./../../styles/ProductDetail.css";

import { client } from '../../axios'
import Img from './Img';

const ProductDetail = () => {
    const {id}=useParams()
  
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState ([])
    useEffect (() =>{
        setLoading(true)
        client.get("1")
       .then(res => {
          
            setData(res.data)
        })
        .finally(()=> setLoading(false))
    },[])

console.log(data);
  return (
    <div className='container'>
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
                <button>add to cart</button>
              </div>
          </div>
    </div>
  )
}

export default ProductDetail
