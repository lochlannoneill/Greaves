import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo192.png'
import icon_search from '../Assets/icon_search.png'
import icon_user  from '../Assets/icon_user.png'
import icon_cart from '../Assets/icon_cart.png'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>Greaves</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <img className='nav-search' src={icon_search} alt='search' />
            <img className='nav-login' src={icon_user} alt='user' />
            <img className='nav-cart' src={icon_cart} alt='cart' />
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
