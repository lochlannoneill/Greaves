import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUser_regular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeart_solid , faCartShopping as faCartShopping_solid } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import flag_ireland from '../Assets/flags/ireland.png'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar-parent'>
        <div className='navbar'>
            <div className='nav-logo'>
                {/* <img src={logo} alt='logo' /> */}
                <p onClick={()=>{setMenu("shop")}}><Link to="/">Greaves</Link></p>
            </div>
            <ul className='nav-menu nav-menu-large'>
                {/* <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none', color: '#171717'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("girls")}}><Link to="/girls">Girls</Link>{menu==="girls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("boys")}}><Link to="/boys">Boys</Link>{menu==="boys"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <img className='nav-login-cart-child nav-flag' src={flag_ireland} alt='ireland' />
                <Link className='nav-login-cart-child' to="/signup"><FontAwesomeIcon className="nav-login" icon={faUser_regular} /></Link>
                <Link className='nav-login-cart-child' to="/favourites"><FontAwesomeIcon className="nav-favourite" icon={faHeart_solid} /></Link>
                <div className='nav-login-cart-child'>
                    <Link to="/cart"><FontAwesomeIcon className="nav-cart" icon={faCartShopping_solid} /></Link>
                    <div className='nav-cart-count'>0</div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-mobile">
            <ul className='nav-menu'>
                {/* <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("girls")}}><Link to="/girls">Girls</Link>{menu==="girls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("boys")}}><Link to="/boys">Boys</Link>{menu==="boys"?<hr/>:<></>}</li>
            </ul>
        </div>
    </div>
  )
}
