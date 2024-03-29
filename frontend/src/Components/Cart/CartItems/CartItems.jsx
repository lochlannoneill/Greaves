import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CartItems.css";

export const CartItems = () => {
  const { products, cart, addCart, removeCart, removeAllCart } =
    useContext(ShopContext); // Added removeAllCart
  const cartEmpty = Object.values(cart).every((quantity) => quantity <= 0); // Check if there are any items in the cart

  return (
    <div className="cartitems">
      <h1>My Cart</h1>
      {products.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div className="cartitems-list" key={product.id}>
              <div className="cartitems-item">
                <div className="cartitems-item-left">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="cartitems-item-left-image"
                      src={product.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="cartitems-item-right">
                  <p className="cartitems-item-right-title">
                    <Link
                      to={`/products/${product.id}`}
                      className="cartitems-item-right-link"
                    >
                      {product.title}
                    </Link>
                  </p>
                  <p className="cartitems-item-right-size">
                    Size: product.size
                  </p>
                  <div className="cartitems-item-right-cost">
                    <p className="cartitems-item-right-quantity">
                      {cart[product.id]}
                    </p>
                    <p>x</p>
                    <p className="cartitems-item-price">
                      &euro;{product.price}
                    </p>
                    <p>=</p>
                    <p className="cartitems-item-right-total">
                      &euro;{(product.price * cart[product.id]).toFixed(2)}
                    </p>
                  </div>
                  <div className="cartitems-right-actions">
                    <button
                      className="cartitems-item-right-add"
                      onClick={() => {
                        addCart(product.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button
                      className="cartitems-item-right-remove"
                      onClick={() => {
                        removeCart(product.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button
                      className="cartitems-item-right-delete"
                      onClick={() => {
                        removeAllCart(product.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>{" "}
                    {/* Added Delete button */}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null; // Don't render anything for products not in the cart
        }
      })}

      {cartEmpty && <p className="cartitems-message">No items in cart</p>}
    </div>
  );
};
