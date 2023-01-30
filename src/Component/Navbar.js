import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cart=useSelector((state)=>state.Cart)
  return (
      <div style={{display:"flex" ,justifyContent:"space-around",alignItems:"center"}}>
       <div>
        <h2>logo </h2>
       </div>
      <div style={{display:"flex" ,justifyContent:"space-around",alignItems:"center",gap:"40px"}}>
        <Link  to='/'>Market</Link>
         <NavLink to="shopingCart" >carte {cart.length ? cart.length :null}</NavLink>
      </div>

      </div>
  )
}

export default Navbar
