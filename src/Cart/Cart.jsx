import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { CartContext } from './CartContext';

const Cart = ({ onClose }) => {
  const { cartItems, updateCartItemQuantity, getSubtotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productName, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(productName, newQuantity);
    }
  };

  const handleProceedToBuy = () => {
    navigate('/buy-now', { state: { cart: cartItems, subtotal: getSubtotal() } });
  };
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h4>Shopping Cart</h4>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <span className="item-name">{item.name}</span>
            <div className="quantity-controls">
              <button className="decrease-quantity"onClick={() => handleQuantityChange(item.name, item.quantity - 1)}>
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="increase-quantity"onClick={() => handleQuantityChange(item.name, item.quantity + 1)}>
                +
              </button>
            </div>
            <span className="item-price">₹{item.total}</span>
          </div>
        </div>
      ))}
      <div className="cart-subtotal">
        <span>Subtotal:</span>
        <span>₹{getSubtotal()}</span>
      </div>
      <button className="proceed-to-buy" onClick={handleProceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};

export default Cart;
