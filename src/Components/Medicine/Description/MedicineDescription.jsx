import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicineDescription.css';
import Header from '../../Header/Header';

const MedicineDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const [isHeartChecked, setIsHeartChecked] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [selectedSize, setSelectedSize] = useState('1L');
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const unitPrice= 100;
  const navigate = useNavigate();

  const handleBuyNowClick = () =>{
    const productDetails = {
      name: 'Medicine1',
      size: '100ml',
      total: unitPrice * quantity,
      quantity: quantity,
    };
    navigate('/buy-now', { state: { product: productDetails } });
  };
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleHeart = () => setIsHeartChecked(!isHeartChecked);

  const handleShareClick = () => setIsSharing(true);

  const handleWriteReviewClick = () => setShowReviewInput(!showReviewInput);

  const handleReplyClick = () => setShowReplyInput(!showReplyInput);

  return (
    <div className="medicine1-page">
      <Header />
      <div className="medicine1-content">
        <div className="medicine1-images">
          <img src="assets/medicine1.png" alt="Amul Milk Product" className="medicine1-image" />
          <img src="assets/medicine1.png" alt="Amul Milk Product" className="medicine1-image" />
          <img src="assets/medicine1.png" alt="Amul Milk Product" className="medicine1-image" />
          <img src="assets/medicine1.png" alt="Amul Milk Product" className="medicine1-image" />
        </div>
        <div className="medicine1-info">
          <div className="medicine1-box">
            <img src="assets/medicine1.png" alt="Amul Milk Product" className="medicine1-box-image" />
          </div>
          <div className="medicine1-description">
            <p className="bold-text">Allegra Suspension- ferrofenadine hydrocloride suspension</p>
            <p>10k+ sold</p>
            <div className="medicine1-rating">
              <span>★★★★</span> 4
            </div>
            <p style={{color:'blue'}}>188 reviews</p>
            <p>In Stock</p>
            <p className="medicine1-discount">
              <span className="cancelled-price">RS 110</span> <span className="productdiscount">10% off</span>
              <div className="current-price">RS {unitPrice}</div>
            </p>
            <div className="medicine1-quantity">
              <button onClick={decreaseQuantity} className="quantity-btn">-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={increaseQuantity} className="quantity-btn">+</button>
              <p>Only 12 left. Don’t miss it!</p>
            </div>
            <p className="medicine1-size"><strong>Size</strong></p>
            <div className="medicine1-sizes">
              <div className={`size-box ${selectedSize === '100ml' ? 'selected' : ''}`} onClick={() => setSelectedSize('100ml')}>
                100ml
              </div>
            </div>
            <div className="medicine1-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn" onClick={handleBuyNowClick}>Buy Now</button>
            </div>
            <div className="medicine1-extra-actions">
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
            <div className="medicine1-extra-info">
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
            <div className="medicine1-special-offers">
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
            <div className="medicine1-about-product">
              <h2>About Product</h2>
              <p>
              Allegra Suspension is a pharmaceutical formulation containing Fexofenadine Hydrochloride, an effective antihistamine used to alleviate symptoms associated with seasonal allergies and chronic urticaria (hives). This suspension is particularly beneficial for individuals who prefer a liquid form of medication, such as children or those who have difficulty swallowing tablets. Allegra works by blocking the action of histamine, a substance in the body that causes allergic symptoms like itching, sneezing, runny nose, and watery eyes. It provides fast and long-lasting relief without causing significant drowsiness, making it a convenient choice for daytime use.
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
      <div className="medicine1-review-section">
        <div className="medicine1-left">
          <h2>Rating and Review of Amul product</h2>
          <div className="medicine1-review-box">
            <p className="review-text">Write a review of this Product</p>
            <button className="write-review-btn" onClick={handleWriteReviewClick}>Write Your Review</button>
          </div>
          {showReviewInput && (
            <div className="review-input">
              <textarea placeholder="Write your review here..."></textarea>
              <button className="submit-review-btn">Submit</button>
            </div>
          )}
          <div className="medicine1-review-box">
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
        <div className="medicine1-right">
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

export default MedicineDescription;
