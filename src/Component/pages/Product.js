import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./../../styles/Product.css";
function Product({item}) {
    const cart=useSelector((state)=>state.Cart)
    const selectItem=cart.find(i=>i.id===item.id)
    const disabled=selectItem ? true :false;
    const dis=useDispatch()
 
  return (
    <div className='Product-Container'  >
                      <div className='img-product'>
                        <img src={item.images[0]} alt=' '/>
                      </div>
                      <div className='product-info'>
                      <h3>{item.title}</h3>
                      <span>$ {item.price}</span>
                       <div className='groupe-btn'>
                       <Link to={`/ProductDetail/${item.id}`}>detail</Link>
                       <button className='Add-item'
                        disabled={disabled} 
                        
                        
                        onClick={()=>{ dis({type:"ADD",payload:item,Prices:{q:1,price:item.price,id:item.id}} ) ;
                      
                                                }}
                        
                        
                        
                        >add to carte</button>
                     
                       
                       </div>
                      </div>
                  </div>
  )
}

export default Product
