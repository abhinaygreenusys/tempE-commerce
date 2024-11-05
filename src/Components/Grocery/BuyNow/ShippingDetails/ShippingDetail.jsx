import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShippingDetail.css';
import Header from '../../../Header/Header';
import SubHeader from '../SubHeader';

const ShippingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal } = location.state || { cart: [], subtotal: 0 };

  const shippingCharges = 0.00; // Replace with actual shipping charges if applicable
  const taxes = 0.00; // Replace with actual taxes if applicable
  const total = subtotal + shippingCharges + taxes; // Calculate the total amount

  const handlePayment = () => {
    navigate('/payment', { 
      state: { 
        cart, 
        subtotal, 
        shippingCharges, 
        taxes, 
        total 
      } 
    });
  };

  return (
    <>
      <Header />
      <div className="shipping-details-container">
        <SubHeader />
        <div className="line"></div>
        <div className="shipping-rectangles-container">
          <div className="shipping-rectangle shipping-left-rectangle">
            <h2 className="shipping-rectangle-title">Shipping Details</h2>
            <div className="shipping-address">
              <div className="address-field">
                <select id="country" name="country" className="address-dropdown">
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="za">South Africa</option>
                </select>
              </div>
              <div className="name-fields">
                <input type="text" placeholder="First Name" className="name-input" />
                <input type="text" placeholder="Last Name" className="name-input" />
              </div>
              <div className="address-fields">
                <input type="text" placeholder="Address" className="address-input" />
              </div>
              <div className="city-fields">
                <input type="text" placeholder="City" className="city-input" />
              </div>
              <div className="contact-fields">
                <input type="text" placeholder="Phone No" className="contact-input" />
                <input type="text" placeholder="Pin Code" className="contact-input" />
              </div>
              <div className="email-section">
                <input type="email" placeholder="Email ID" className="email-input" />
              </div>
              <div className="save-info">
                <input type="checkbox" id="save-info" className="save-checkbox" />
                <label htmlFor="save-info" className="save-label">Save this information for faster checkout next time</label>
              </div>
            </div>
          </div>
          <div className="shipping-rectangle shipping-right-rectangle">
            <h2 className="order-summary-title">Order Summary</h2>
            <div className="order-summary-line"></div>
            <div className="order-summary-content">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="order-summary-item">
                    <div className="order-summary-item-content">
                      <img src={item.image} alt={item.name} className="order-summary-image" />
                      <div className="order-summary-details">
                        <h3 className="product-title">{item.name}</h3>
                        <p className="product-total">Quantity: {item.quantity}</p>
                        <p className="product-price">Price: RS {item.total}</p>
                      </div>
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
                <span>{shippingCharges} Rs</span>
              </div>
              <div className="subtotal-row">
                <span>Taxes</span>
                <span>{taxes} Rs</span>
              </div>
              <div className="line"></div>
              <div className="subtotal-row total">
                <span>Total</span>
                <span>{total} Rs</span>
              </div>
            </div>
            <div className="payment-methods">
              <div className="payment-method">
                <input type="radio" id="bank" name="payment" className="payment-radio" />
                <label htmlFor="bank" className="payment-label">Bank</label>
              </div>
              <div className="payment-method">
                <input type="radio" id="cod" name="payment" className="payment-radio" />
                <label htmlFor="cod" className="payment-label">Cash on Delivery</label>
              </div>
            </div>
            <div className="continue-payment">
              <button className="continue-button" onClick={handlePayment}>
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
