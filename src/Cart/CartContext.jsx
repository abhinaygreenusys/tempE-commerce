import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      updateCartItemQuantity(product.name, existingProduct.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, total: product.price }]);
    }
  };

  const updateCartItemQuantity = (productName, quantity) => {
    setCartItems(cartItems.map(item =>
      item.name === productName ? { ...item, quantity, total: item.price * quantity } : item
    ));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartCount, updateCartItemQuantity, getSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
