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
                <p onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none', color: '#171717'}}>Greaves</Link></p>
            </div>
            <ul className='nav-menu nav-menu-large'>
                {/* <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none', color: '#171717'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("women")}}><Link to="/women" style={{ textDecoration: 'none', color: '#171717'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men" style={{ textDecoration: 'none', color: '#171717'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("girls")}}><Link to="/girls" style={{ textDecoration: 'none', color: '#171717'}}>Girls</Link>{menu==="girls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("boys")}}><Link to="/boys" style={{ textDecoration: 'none', color: '#171717'}}>Boys</Link>{menu==="boys"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <img className='nav-flag' src={flag_ireland} alt='ireland' />
                <Link to="/signup" style={{ textDecoration: 'none'}}><FontAwesomeIcon className="nav-login" icon={faUser_regular} /></Link>
                <Link to="/favourites" style={{ textDecoration: 'none'}}><FontAwesomeIcon className="nav-favourite" icon={faHeart_solid} /></Link>
                <Link to="/cart" style={{ textDecoration: 'none'}}><FontAwesomeIcon className="nav-cart" icon={faCartShopping_solid} /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
        <div className="navbar navbar-mobile">
            <ul className='nav-menu'>
                {/* <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none', color: '#171717'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("women")}}><Link to="/women" style={{ textDecoration: 'none', color: '#171717'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men" style={{ textDecoration: 'none', color: '#171717'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("girls")}}><Link to="/girls" style={{ textDecoration: 'none', color: '#171717'}}>Girls</Link>{menu==="girls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("boys")}}><Link to="/boys" style={{ textDecoration: 'none', color: '#171717'}}>Boys</Link>{menu==="boys"?<hr/>:<></>}</li>
            </ul>
        </div>
    </div>
  )
}
