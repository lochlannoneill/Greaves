import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './CartItems.css'

export const CartItems = () => {
  const {products, cart, addCart, removeCart} = useContext(ShopContext);

  // Check if there are any items in the cart
  const cartEmpty = Object.values(cart).every(quantity => quantity <= 0);

  return (
    <div className="cartitems">
      <h2>My Cart</h2>
      <hr />
      {products.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div className="cartitems-list" key={product.id}>
              <div className="cartitems-item">
                <div className="cartitems-item-left">
                  <img className="cartitems-item-left-image" src={product.image} alt=""/>
                </div>
                <div className="cartitems-item-right">
                  <p className="cartitems-item-right-title">{product.title}</p>
                  <div className="cartitems-item-right-cost">
                    <p className="cartitems-item-right-price">{product.price} x </p>
                    <button className="cartitems-item-quantity">{cart[product.id]}</button>
                    <p className="cartitems-item-right-total"> = &euro;{product.price * cart[product.id]}</p>
                  </div>
                  <div className="cartitems-right-actions">
                    <button className="cartitems-item-right-add" onClick={() => { addCart(product.id) }}>Add <FontAwesomeIcon icon={faPlus} /></button>
                    <p>or</p>
                    <button className="cartitems-item-right-remove" onClick={() => { removeCart(product.id) }}>Remove <FontAwesomeIcon icon={faXmark} /></button>
                  </div>
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
