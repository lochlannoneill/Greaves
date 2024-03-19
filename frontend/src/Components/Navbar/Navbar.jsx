import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as faUser_regular,
  faHeart as faHeart_regular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeart_solid,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import flag_ireland from "../Assets/flags/ireland.png";
import { ShopContext } from "../../Context/ShopContext";
import "./Navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  // const [showSettings] = useState(false); // State to track whether settings dropdown is open
  const { cart, getCartCount, getFavoriteCount } = useContext(ShopContext); // Access the ShopContext
  const [totalCartItems, setTotalCartItems] = useState(0);

  // Update total cart items count when cart changes
  useEffect(() => {
    const count = getCartCount();
    setTotalCartItems(count);
  }, [cart, getCartCount]);

  return (
    <div className="navbar-parent">
      <div className="navbar">
        <div className="nav-logo">
          <p
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Greaves</Link>
          </p>
        </div>
        <ul className="nav-menu nav-menu-large">
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">Women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men">Men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("girls");
            }}
          >
            <Link to="/girls">Girls</Link>
            {menu === "girls" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("boys");
            }}
          >
            <Link to="/boys">Boys</Link>
            {menu === "boys" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-state">
          <div className="nav-state-flag">
            <img className="nav-state-flag" src={flag_ireland} alt="ireland" />
          </div>
          {/* <div className="nav-state-gear">
                        <FontAwesomeIcon icon={faGear} />
                        <div className="settings-dropdown">
                            <ul>
                                <li>Settings 1</li>
                                <li>Settings 2</li>
                                <hr />
                                <li>Settings 3</li>
                                <li>Settings 4</li>
                            </ul>
                        </div>
                    </div> */}
          <div className="nav-state-user">
            <Link to="/signup">
              <FontAwesomeIcon icon={faUser_regular} />
            </Link>
          </div>
          <div className="nav-state-favourites">
            <Link to="/favourites">
              {getFavoriteCount() > 0 ? (
                <FontAwesomeIcon icon={faHeart_solid} />
              ) : (
                <FontAwesomeIcon icon={faHeart_regular} />
              )}
            </Link>
          </div>
          <div className="nav-state-cart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping_solid} />
              {totalCartItems > 0 ? (
                <div className="nav-state-cart-count">{totalCartItems}</div> // Display total cart items count if greater than 0 - ternary operator
              ) : null}
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar navbar-mobile">
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">Women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men">Men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("girls");
            }}
          >
            <Link to="/girls">Girls</Link>
            {menu === "girls" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("boys");
            }}
          >
            <Link to="/boys">Boys</Link>
            {menu === "boys" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </div>
  );
};
