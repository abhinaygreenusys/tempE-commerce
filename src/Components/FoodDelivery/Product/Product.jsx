import React from 'react';
import { useCart } from '../CartContext';

const Product = ({ product, restaurantName }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, restaurantName);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
