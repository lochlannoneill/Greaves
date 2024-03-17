import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartCheckout.css';

export const CartCheckout = () => {
    const { products, cart } = useContext(ShopContext);
    const cartEmpty = Object.values(cart).every(quantity => quantity <= 0);

    // Calculate subtotal
    let subtotal = 0;
    for (const product of products) {
        subtotal += product.price * cart[product.id];
    }

    // Discounts
    const discounts = [
        { code: 'LOCHLANN', discountPercentage: 10 },
        { code: 'GREAVES', discountPercentage: 20 },
        { code: 'REACT', discountPercentage: 30 },
        // Add more discounts here
    ];

    const [appliedDiscount, setAppliedDiscount] = useState(null);
    const [couponCode, setCouponCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);

    const applyDiscount = () => {
        const discount = discounts.find(d => d.code === couponCode.toUpperCase());
        if (discount) {
            setAppliedDiscount(discount);
            setDiscountAmount(subtotal * (discount.discountPercentage / 100));
        } else {
            setAppliedDiscount(null);
            setDiscountAmount(0);
        }
    };

    // Calculate tax (assuming taxRate is a constant)
    const VAT = 0.23; // Example tax rate
    const tax = subtotal * VAT;

    // Delivery cost
    const delivery = cartEmpty ? 0 : 4.95;

    // Calculate total
    const total = subtotal + tax - discountAmount + delivery;

    return (
        <div className="cartcheckout">
            <div className="cartcheckout-child">
                <h2>Coupon</h2>
                <p>Try a coupon code if you have one.</p>
                <div className="cartcheckout-coupon">
                    <input
                        type="text"
                        placeholder="Coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button onClick={applyDiscount}>Apply</button>
                </div>
                {appliedDiscount && (
                    <p className="cartcheckout-coupon-confirmation">Coupon code applied: {appliedDiscount.code} ({appliedDiscount.discountPercentage}% off)</p>
                )}
            </div>
            <div className="cartcheckout-child">
                <h2>Checkout</h2>
                <div className="cartcheckout-text">
                    <p><span>Total</span><span className="cartcheckout-currency">&euro;{subtotal.toFixed(2)}</span></p>
                    {discountAmount > 0 && (
                        <p><span>Discount</span><span className="cartcheckout-currency cartcheckout-currency-discount">- &euro;{discountAmount.toFixed(2)}</span></p>
                    )}
                    <p><span>Tax (+{VAT * 100}% VAT)</span><span className="cartcheckout-currency">&euro;{tax.toFixed(2)}</span></p>
                    <p><span>Delivery</span><span className="cartcheckout-currency">&euro;{delivery.toFixed(2)}</span></p>
                    <hr />
                    <p><span>Total</span><span className="cartcheckout-currency">&euro;{total.toFixed(2)}</span></p>
                </div>
                {/* Display "Confirm Purchase" button after the list if there are items in the cart */}
                {!cartEmpty ? (
                    <button className="cartcheckout-confirm">Confirm Purchase</button>
                ) : (
                    <p className="cartcheckout-notification">You haven't added anything to your cart yet.</p>
                )}
            </div>
        </div>
    );
};
