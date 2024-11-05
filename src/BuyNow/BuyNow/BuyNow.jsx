import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BuyNow.css';
import Header from '../../Components/Header/Header';
import SubHeader from '../../Components/Grocery/BuyNow/SubHeader';

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal } = location.state || { cart: [], subtotal: 0 };

  const [cartItems, setCartItems] = useState(cart);

  const handleQuantityChange = (index, change) => {
    const newCartItems = [...cartItems];
    const item = newCartItems[index];
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      item.total = newQuantity * (item.total / item.quantity);
      item.quantity = newQuantity;
      setCartItems(newCartItems);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const handleContinue = () => {
    navigate('/shipping-details', { state: { cart: cartItems, subtotal: calculateSubtotal() } });
  };

  return (
    <>
      <Header />
      <div className="buy-now-container">
        <SubHeader />
        <div className="line"></div>
        <div className="buy-rectangles-container">
          <div className="buy-left-rectangle-container">
            <div className="buy-rectangle left-rectangle">
              <h2>Cart</h2>
              <div className="cart-details">
                <span>Product</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
              <div className="line"></div>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="product-details">
                    <div className="product-info">
                      <img src={item.image} alt={item.name} className="product-image" />
                      <div>
                        <span>{item.name} - {item.size}</span>
                      </div>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(index, -1)} className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(index, 1)} className="quantity-btn">+</button>
                    </div>
                    <span>{item.total} Rs</span>
                  </div>
                ))
              ) : (
                <div>No products in cart</div>
              )}
            </div>
          </div>
          <div className="buy-rectangle right-rectangle">
            <h2>Subtotal</h2>
            <div className="line"></div>
            <div className="subtotal-details">
              <div className="subtotal-row">
                <span>Subtotal</span>
                <span>{calculateSubtotal()} Rs</span>
              </div>
              <div className="subtotal-row">
                <span>Shipping Charges</span>
                <span>0.00 Rs</span>
              </div>
              <div className="subtotal-row">
                <span>Taxes</span>
                <span>0.00 Rs</span>
              </div>
              <div className="subtotal-row total">
                <span>Total</span>
                <span>{calculateSubtotal()} Rs</span>
              </div>
            </div>
            <button className="continue-btn" onClick={handleContinue}>Continue</button>
            <div className="discount-section">
              <div className="discount-info">
                <div className="discount-circle">%</div>
                <span>Use discount code</span>
              </div>
              <div className="discount-input-container">
                <input type="text" placeholder="Enter code" className="discount-input" />
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
