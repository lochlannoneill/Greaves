import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUser_regular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeart_solid, faCartShopping as faCartShopping_solid } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import flag_ireland from '../Assets/flags/ireland.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { cart, getCartCount } = useContext(ShopContext); // Access the ShopContext

    // State for total cart items count
    const [totalCartItems, setTotalCartItems] = useState(0);

    // Update total cart items count when cart changes
    useEffect(() => {
        const count = getCartCount();
        setTotalCartItems(count);
    }, [cart, getCartCount]);

    return (
        <div className='navbar-parent'>
            <div className='navbar'>
                <div className='nav-logo'>
                    {/* <img src={logo} alt='logo' /> */}
                    <p onClick={() => { setMenu("shop") }}><Link to="/">Greaves</Link></p>
                </div>
                <ul className='nav-menu nav-menu-large'>
                    <li onClick={() => { setMenu("women") }}><Link to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("men") }}><Link to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("girls") }}><Link to="/girls">Girls</Link>{menu === "girls" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("boys") }}><Link to="/boys">Boys</Link>{menu === "boys" ? <hr /> : <></>}</li>
                </ul>
                <div className='nav-state'>
                    <img className='nav-state-flag' src={flag_ireland} alt='ireland' />
                    <Link className="nav-state-login" to="/signup"><FontAwesomeIcon icon={faUser_regular} /></Link>
                    <Link className="nav-state-favourite" to="/favourites"><FontAwesomeIcon icon={faHeart_solid} /></Link>
                    <div>
                        <Link className="nav-state-cart" to="/cart"><FontAwesomeIcon className="nav-cart" icon={faCartShopping_solid} /></Link>
                        {totalCartItems > 0 ? (
                            <div className='nav-cart-count'>{totalCartItems}</div> // Display total cart items count if greater than 0 - ternary operator
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="navbar navbar-mobile">
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu("women") }}><Link to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("men") }}><Link to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("girls") }}><Link to="/girls">Girls</Link>{menu === "girls" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("boys") }}><Link to="/boys">Boys</Link>{menu === "boys" ? <hr /> : <></>}</li>
                </ul>
            </div>
        </div>
    )
};
