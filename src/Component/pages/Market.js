import React from 'react'
import Product from './Product'
const Market = ({data }) => {



  return (
    <div>
      {data.map((item,index) => {


        return( <Product key={index} item={item} />)
      })}
    </div>
  )
}

export default Market
