import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartCheckout.css';

export const CartCheckout = () => {
    const { products, cart, removeCart } = useContext(ShopContext);
    const cartEmpty = Object.values(cart).every(quantity => quantity <= 0);

    // Calculate subtotal
    let subtotal = 0;
    for (const product of products) {
        subtotal += product.price * cart[product.id];
    }

    // Calculate tax (assuming taxRate is a constant)
    const VAT = 0.23; // Example tax rate
    const tax = subtotal * VAT;

    // Delivery cost
    const delivery = cartEmpty ? 0 : 4.95

    // Calculate total
    const total = subtotal + tax + delivery;

    // Check if there are any items in the cart

    return (
        <div className="cartcheckout">
            <h2>Checkout</h2>
            <div className="cartcheckout-text">
                <p><span>Total</span><span className="cartcheckout-currency">&euro;{subtotal.toFixed(2)}</span></p>
                <p><span>Tax (+{VAT * 100}% VAT)</span><span className="cartcheckout-currency">&euro;{tax.toFixed(2)}</span></p>
                <p><span>Delivery</span><span className="cartcheckout-currency">&euro;{delivery.toFixed(2)}</span></p>
                <hr />
                <p><span>SubTotal</span><span className="cartcheckout-currency">&euro;{total.toFixed(2)}</span></p>
            </div>
            {/* Display "Confirm Purchase" button after the list if there are items in the cart */}
            {!cartEmpty ? (
                <button className="cartcheckout-confirm">Confirm Purchase</button>
            ) : (
                <p className="cartcheckout-notification">You haven't added anything to your cart yet.</p>
            )}
        </div>
    );
}
