import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartCheckout.css';

export const CartCheckout = () => {
    const { products, cart, removeCart } = useContext(ShopContext);

    // Check if there are any items in the cart
    const cartEmpty = Object.values(cart).every(quantity => quantity <= 0);

    return (
        <div className="cartcheckout">
            <h2>Checkout</h2>
            <p>Subtotal: <span className="cartcheckout-currency">&euro;0</span></p>
            <p>Tax: <span className="cartcheckout-currency">&euro;0</span></p>
            <p>Total: <span className="cartcheckout-currency">&euro;0</span></p>
            <hr />
            {/* Display "Confirm Purchase" button after the list if there are items in the cart */}
            {!cartEmpty ? (
                <button className="cartcheckout-confirm">Confirm Purchase</button>
            ) : (
                <p>You haven't added anything to your cart yet.</p>
            )}
        </div>
    );
}
