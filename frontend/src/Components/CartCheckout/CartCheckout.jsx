import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartCheckout.css";

export const CartCheckout = () => {
  const { products, cart, getCartCount } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Calculate subtotal
  useEffect(() => {
    let sub = 0;
    for (const product of products) {
      sub += product.price * cart[product.id];
    }
    setSubtotal(sub);
  }, [products, cart]);

  // Discounts
  const discounts = [
    { code: "LOCHLANN", discountPercentage: 10 },
    { code: "GREAVES", discountPercentage: 20 },
    { code: "REACT", discountPercentage: 30 },
  ];
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const applyDiscount = () => {
    const discount = discounts.find((d) => d.code === couponCode.toUpperCase());
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
  const delivery = getCartCount() > 0 ? 4.95 : 0;

  // Calculate total
  const total = Math.max(0, subtotal + tax - discountAmount + delivery);

  return (
    <div className="cartcheckout">
      {getCartCount() > 0 && (
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
            <p className="cartcheckout-coupon-confirmation">
              Coupon code applied: {appliedDiscount.code} (
              {appliedDiscount.discountPercentage}% off)
            </p>
          )}
        </div>
      )}
      <div className="cartcheckout-child">
        <h2>Checkout</h2>
        <div className="cartcheckout-text">
          <p>
            <span>Subtotal</span>
            <span className="cartcheckout-currency">
              &euro;{subtotal.toFixed(2)}
            </span>
          </p>
          {discountAmount > 0 && (
            <p>
              <span>Discount</span>
              <span className="cartcheckout-currency cartcheckout-currency-discount">
                - &euro;{discountAmount.toFixed(2)}
              </span>
            </p>
          )}
          {/* Display "Tax" info if there are items in the cart */}
          {getCartCount() > 0 && (
            <p>
              <span>Tax (+{VAT * 100}% VAT)</span>
              <span className="cartcheckout-currency">
                &euro;{tax.toFixed(2)}
              </span>
            </p>
          )}
          <p>
            <span>Delivery</span>
            <span className="cartcheckout-currency">
              &euro;{delivery.toFixed(2)}
            </span>
          </p>
          <hr />
          <p>
            <span>Total</span>
            <span className="cartcheckout-currency">
              &euro;{total.toFixed(2)}
            </span>
          </p>
        </div>
        {/* Display "Confirm Purchase" button after the list if there are items in the cart */}
        {getCartCount() > 0 ? (
          <button className="cartcheckout-confirm">Confirm Purchase</button>
        ) : (
          <p className="cartcheckout-notification">
            You haven't added anything to your cart yet.
          </p>
        )}
      </div>
    </div>
  );
};
