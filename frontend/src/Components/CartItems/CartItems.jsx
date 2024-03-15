import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './CartItems.css'

export const CartItems = () => {
  const {products, cart, removeCart} = useContext(ShopContext);

  // Check if there are any items in the cart
  const cartEmpty = Object.values(cart).every(quantity => quantity <= 0);

  return (
    <div className="cartitems">
      <h2>Cart Items</h2>
      <hr />
      {products.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div className="classitems-item-list" key={product.id}>
              <div className="cartitems-item">
                <div className="cartitems-item-left">
                  <img className="cartitems-item-left-image" src={product.image} alt=""/>
                </div>
                <div className="cartitems-item-right">
                  <p className="cartitems-item-right-title">{product.title}</p>
                  <div className="cartitems-item-right-cost">
                    <p className="cartitems-item-right-price">{product.price} x </p>
                    <button className="cartitems-item-quantity">{cart[product.id]}</button>
                    <p className="cartitems-item-right-total"> = {product.price * cart[product.id]}</p>
                  </div>
                  <button className="cartitems-item-right-remove" onClick={() => { removeCart(product.id) }}>Remove <FontAwesomeIcon className="cartitems-remove-icon" icon={faXmark} /></button>
                </div>
              </div>
            </div>
          );
        } else {
          return null; // Don't render anything for products not in the cart
        }
      })}

      {cartEmpty && <p>No items in cart</p>}
    </div>
  )
}
