import React, { useState } from 'react';
import Header from '../../../Header/Header';
import SubHeader from '../SubHeader';
import './PaymentPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal, total } = location.state || { cart: [], subtotal: 0, total: 0 };
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleContinueShopping = () => {
    navigate('/home');
  };

  return (
    <>
      <Header />
      <div className="payment-details-container">
        <SubHeader />
        <div className="payment-line"></div>
        {orderPlaced ? (
          <div className="order-confirmation">
            <h2>Thank you for shopping with us!</h2>
            <button onClick={handleContinueShopping} className="continue-shopping-button">
              Click here to continue shopping
            </button>
          </div>
        ) : (
          <div className="rectangles-container-payment">
            <div className="payment-rectangle payment-left-rectangle">
              <h2 className="rectangle-title-payment">Payment</h2>
              <h3 className="payment-method-title">Choose your payment method</h3>
              <div className="payment-method-box">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={() => setPaymentMethod('creditCard')}
                  />
                  <label htmlFor="creditCard">Credit Card</label>
                </div>
                {paymentMethod === 'creditCard' && (
                  <div className="credit-card-details">
                    <div className="input-section">
                      <input type="text" placeholder="Card Number" className="input-field" />
                    </div>
                    <div className="input-section">
                      <input type="text" placeholder="Card Holder Name" className="input-field" />
                    </div>
                    <div className="expiry-cvv-section">
                      <select className="expiry-dropdown">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select className="expiry-dropdown">
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                      <div className="cvv-input">
                        <input type="text" placeholder="CVV" className="input-field" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="payment-line"></div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                  />
                  <label htmlFor="paypal">PayPal</label>
                </div>
              </div>
            </div>
            <div className="payment-rectangle payment-right-rectangle">
              <h2 className="order-summary-title">Order Summary</h2>
              <div className="order-summary-line"></div>
              <div className="order-summary-content">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="order-summary-item">
                      <img src={item.image} alt={item.name} className="order-summary-image" />
                      <div className="order-summary-details">
                        <h3 className="product-title">{item.name}</h3>
                        <p className="product-total">Quantity: {item.quantity}</p>
                        <p className="product-price">Price: RS {item.total}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No product details available</div>
                )}
              </div>
              <div className="order-summary-subtotal-details">
                <div className="subtotal-row">
                  <span>Subtotal</span>
                  <span>{subtotal} Rs</span>
                </div>
                <div className="subtotal-row">
                  <span>Shipping Charges</span>
                  <span>0.00 Rs</span>
                </div>
                <div className="subtotal-row">
                  <span>Taxes</span>
                  <span>0.00 Rs</span>
                </div>
                <div className="line"></div>
                <div className="subtotal-row total">
                  <span>Total</span>
                  <span>{total} Rs</span>
                </div>
              </div>
              <div className="place-order-button">
                <button onClick={handlePlaceOrder} className="continue-button">
                  Place Your Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentPage;
