import React,{useEffect} from 'react'
import { client } from '../../axios'
import Product from './Product'
const Market = ({data ,search,setSearch,setData}) => {

  useEffect(() => {
   
    client.get(`/search?q=${search}`).then((res) => setData(res.data.products))
}, [search])
  return (
    <div>
      search :
        <input value={search} onChange={e=>setSearch(e.target.value)} type='text'/>
      {data.map((item,index) => {


        return( <Product key={index} item={item} />)
      })}
    </div>
  )
}

export default Market
