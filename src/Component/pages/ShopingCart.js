import React  from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Cart'
import TotalPrice from '../TotalPrice';
import "../../styles/ShopingCart.css";
const ShopingCart = () => {
  const cart=useSelector((state)=>state.Cart)
 
;




  return (
<>
{
  cart.length ?   <div className='cart-container'> 
  {

  }
  <div className='cart-products'>
      
      {cart.map(item=><Cart   key={item.id} item={item}    />)}

  </div>
  <TotalPrice/>


</div>        :     <p className='messgeCart'>cart is empty </p>
}
</>
  
   )
}

export default ShopingCart
