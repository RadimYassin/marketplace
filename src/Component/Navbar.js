import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "../styles/Navbar.css"
const Navbar = () => {
  const cart=useSelector((state)=>state.Cart)
  return (
      <div className='Navbar'>
         <ul>
          <li> <Link  to='/'>store</Link></li>
          <li><NavLink to='/about'>about</NavLink></li>
          <li><NavLink to="shopingCart" ><AiOutlineShoppingCart/>{cart.length ? <span className='Pull'>{cart.length}</span> :null}</NavLink></li>
         

         </ul>
       
      </div>
  )
}

export default Navbar
