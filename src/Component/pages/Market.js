import React,{useEffect} from 'react'
import { client } from '../../axios'
import Product from '../Product'
import "./../../styles/Market.css";
const Market = ({data ,search,setSearch,setData}) => {

  useEffect(() => {
   
    client.get(`/search?q=${search}`).then((res) => setData(res.data.products))
}, [search])
  return (
    <div className='market-container'>
       <div className='market-info'>
       <h2>Store</h2>
       <p>Welcomme in my market</p>
       </div>
       <div className='market-search'>
        <span>{data.length} Products</span>
        <input placeholder='search product' value={search} onChange={e=>setSearch(e.target.value)} type='text'/>
       </div>
      
            {
            data.length >0 ? <div className='Products-Container'> {data.map((item,index) => {


            return( <Product  key={index} item={item} />)})  }</div>
            :<div className='message'><p>No product found .</p></div>}

       </div>
     
  
  )
}

export default Market
