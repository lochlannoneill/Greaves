import React from 'react'
import { useEffect } from 'react'
import { CartItems } from '../Components/CartItems/CartItems'
import { CartCheckout } from '../Components/CartCheckout/CartCheckout'
import { Related } from '../Components/Related/Related'
import './CSS/Cart.css'

export const Cart = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
}, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="cart">
      <div className="cart-main">
        <CartItems />
        <CartCheckout />
      </div>
      <Related />
    </div>
  )
}

export default Cart