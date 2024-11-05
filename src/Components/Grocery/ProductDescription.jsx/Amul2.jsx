import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Amul2.css';
import Header from '../../Header/Header';
import { CartContext } from '../../../Cart/CartContext';

const Amul2 = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [isHeartChecked, setIsHeartChecked] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [selectedSize, setSelectedSize] = useState('1L');
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const navigate = useNavigate();

  const productPrices = {
    '500ml': 100,
    '1L': 200,
    '2L': 350,
  };

  const productData = {
    name: 'Amul Milk',
    size: selectedSize,
    price: productPrices[selectedSize],
    quantity,
    total: productPrices[selectedSize] * quantity,
  };
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {if (quantity > 1) setQuantity(quantity - 1);};
  const toggleHeart = () => setIsHeartChecked(!isHeartChecked);
  const handleShareClick = () => setIsSharing(true);
  const handleBuyNowClick = () => {navigate('/buy-now', { state: { product: productData } });};
  const handleAddToCart = () => {addToCart(productData);}
  const handleWriteReviewClick = () => setShowReviewInput(!showReviewInput);
  const handleReplyClick = () => setShowReplyInput(!showReplyInput);

  return (
    <div className="amul2-page">
      <Header />
      <div className="amul2-content">
        <div className="amul2-images">
          <img src="assets/amul2.png" alt="Amul Milk Product" className="amul2-image" />
          <img src="assets/amul2.png" alt="Amul Milk Product" className="amul2-image" />
          <img src="assets/amul2.png" alt="Amul Milk Product" className="amul2-image" />
          <img src="assets/amul2.png" alt="Amul Milk Product" className="amul2-image" />
        </div>
        <div className="amul2-info">
          <div className="amul2-box">
            <img src="assets/amul2.png" alt="Amul Milk Product" className="amul2-box-image" />
          </div>
          <div className="amul2-description">
            <p className="bold-text">Amul Milk is the best milk product and it is highly effective.</p>
            <p>10k+ sold</p>
            <div className="amul2-rating">
              <span>★★★★</span> 4
            </div>
            <p style={{color:'blue'}}>188 reviews</p>
            <p>In Stock</p>
            <p className="amul2-price">
              <strong>RS {productPrices[selectedSize]}</strong>
            </p>
            <p className="amul2-discount">
              <span className="cancelled-price">RS 220</span> <span className="productdiscount">10% off</span>
            </p>
            <div className="amul2-quantity">
              <button onClick={decreaseQuantity} className="quantity-btn">-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={increaseQuantity} className="quantity-btn">+</button>
              <p>Only 12 left. Don’t miss it!</p>
            </div>
            <p className="amul2-size"><strong>Size</strong></p>
            <div className="amul2-sizes">
              <div  className={`size-box ${selectedSize === '500ml' ? 'selected' : ''}`} onClick={() => setSelectedSize('500ml')}>
                500ml
              </div>
              <div className={`size-box ${selectedSize === '1L' ? 'selected' : ''}`} onClick={() => setSelectedSize('1L')}>
                1L
              </div>
              <div className={`size-box ${selectedSize === '2L' ? 'selected' : ''}`} onClick={() => setSelectedSize('2L')}>
                2L
              </div>
            </div>
            <div className="amul2-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
              <button className="buy-now-btn" onClick={handleBuyNowClick}>Buy Now</button>
            </div>
            <div className="amul2-extra-actions">
              <button className={`heart-btn ${isHeartChecked ? 'checked' : ''}`} onClick={toggleHeart}>
                ❤️
              </button>
              <span className="wishlist-text">Add to Wishlist</span>
              <span className="divider">|</span>
              <button className="share-btn" onClick={handleShareClick}>
                {isSharing ? 'Sharing...' : 'Share'} 📤
              </button>
            </div>
            <hr className="divider-line" />
            <div className="amul2-extra-info">
              <p>Inclusive of all Taxes</p>
              <p className="emi-text"><strong>EMI </strong>starts from 150 per month</p>
              <p className="emi-criteria">
                Determine the eligible criteria for customers to avail of EMI options 
                <span className="emi-dropdown-btn" onClick={() => setIsSharing(!isSharing)}>▼</span>
              </p>
              {isSharing && (
                <div className="emi-options">
                  <ul>
                    <li>Option 1: ₹150/month</li>
                    <li>Option 2: ₹300/month</li>
                    <li>Option 3: ₹450/month</li>
                  </ul>
                </div>
              )}
            </div>
            <hr className="divider-line" />
            <div className="amul2-special-offers">
              <div className="special-offer-header">
                <div className="offer-circle">%</div>
                <span className="special-offers-text">Special Offers</span>
              </div>
              <div className="offer-box">
                <p className="offer-title">Bank Offer</p>
                <p className="offer-description">
                  Our offers cover major banks including HDFC, ICICI, SBI, Axis, and more, ensuring plenty of options.
                </p>
                <hr className="offer-divider" />
                <p className="offer-title">Cashback Offer</p>
                <p className="offer-description">
                  Earn cashback on EMI transactions. Use your bank credit card to avail of exclusive cashback offers on a wide range of products.
                </p>
              </div>
            </div>
            <div className="amul2-about-product">
              <h2>About Product</h2>
              <p>
                Amul is a premium range of dairy products that emphasizes wholesome nutrition and superior quality. 
                Crafted with care, these products are enriched with essential vitamins and minerals, making them an 
                ideal choice for health-conscious individuals and families. From low-fat milk to nutrient-rich yogurt, 
                Each product is carefully processed to retain its natural goodness while ensuring a fresh 
                and tasty experience. Whether you're looking to boost your daily intake of essential nutrients or simply 
                enjoy high-quality dairy.
              </p>
              <h3>Uses and Tips</h3>
              <ul>
                <li>
                  Rich in essential nutrients like calcium, protein, and vitamins, Amul milk is a staple for a balanced diet.
                </li>
                <li>
                  Amul Paneer: A great source of protein, Amul paneer is often used in a variety of dishes and is a good choice for vegetarians.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="amul2-review-section">
        <div className="amul2-left">
          <h2>Rating and Review of Amul product</h2>
          <div className="amul2-review-box">
            <p className="review-text">Write a review of this Product</p>
            <button className="write-review-btn" onClick={handleWriteReviewClick}>Write Your Review</button>
          </div>
          {showReviewInput && (
            <div className="review-input">
              <textarea placeholder="Write your review here..."></textarea>
              <button className="submit-review-btn">Submit</button>
            </div>
          )}
          <div className="amul2-review-box">
            <p className="review-title">Reviews</p>
            <button className="latest-review-btn">Latest</button>
            <p className="review-count">5 from 70 reviews</p>
            <hr className="review-divider" />
            <div className="review-item">
              <p className="review-author">Amit Kumar</p>
              <p className="review-content">This product is really good. I am using it for the last 2 months and I can say that this is the best milk available in the market.</p>
              <div className="review-actions">
                <button className="reply-btn" onClick={handleReplyClick}>Reply</button>
                <p className="reply-text">Like</p>
                <button className="like-btn">Like</button>
                <p className="like-count">1</p>
              </div>
              {showReplyInput && (
                <div className="reply-input">
                  <textarea placeholder="Write your reply here..."></textarea>
                  <button className="submit-reply-btn">Submit</button>
                </div>
              )}
            </div>
            <div className="review-item">
              <p className="review-author">Rohit Sharma</p>
              <p className="review-content">I tried this product for the first time and I am very satisfied with the quality.</p>
              <div className="review-actions">
                <button className="reply-btn" onClick={handleReplyClick}>Reply</button>
                <p className="reply-text">Like</p>
                <button className="like-btn">Like</button>
                <p className="like-count">1</p>
              </div>
              {showReplyInput && (
                <div className="reply-input">
                  <textarea placeholder="Write your reply here..."></textarea>
                  <button className="submit-reply-btn">Submit</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="amul2-right">
          <h3>Customer Questions and Answers</h3>
          <div className="customer-qa">
            <textarea placeholder="Ask your question here..."></textarea>
            <button className="submit-question-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amul2;
