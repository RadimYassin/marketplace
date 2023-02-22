import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./../../styles/ProductDetail.css";

import { client } from '../../axios'
import Img from './Img';
import axios from 'axios';
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


  return (
    <div className='container'>
          <Img id={id} data={data.images}/>
    </div>
  )
}

export default ProductDetail
