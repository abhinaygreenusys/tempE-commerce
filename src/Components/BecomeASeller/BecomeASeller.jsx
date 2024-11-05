import React, { useState } from 'react';
import './BecomeASeller.css';
import { FaWallet, FaArrowLeft, FaArrowRight, FaProductHunt } from 'react-icons/fa';
import SellerHeader from './SellerHeader/SellerHeader';
import { AiOutlinePlusCircle, AiOutlineSelect, AiOutlineUser } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const reviews = [
  {companyName: 'Resia',rating: 4,reviewText: "Grow your brand and evaluate your product with Resia. Our innovative strategies and expert support drive success, helping to expand your market presence and achieve exceptional results. Partner with us to unlock your brand's full potential and accelerate growth.",image: 'assets/becomeSellerPic4.png',},
  {companyName: 'Another Company',rating: 5,reviewText: "Fantastic experience! They helped me scale my business effectively.",image: 'assets/someOtherImage.png',},
  {companyName: 'Third Company',rating: 4,reviewText: "Great support and services! Highly recommend for any seller.",image: 'assets/yetAnotherImage.png',},
];

const BecomeASeller = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const handleNextReview = () => {setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);};
  const handlePrevReview = () => {setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);};
  const currentReview = reviews[currentReviewIndex];
  const navigate = useNavigate();
  const handleStartSelling = () => {
    navigate('/seller-log-in');
  };

  return (
    <div className='seller'>
      <SellerHeader />
      <div className='become-seller-main-body'>
        <div className="seller-image-section">
          <img src="assets/rectangle.png" alt="Featured" className="seller-featured-image" />
          <div className="sky-overlay">
            <div className="text-section">
              <h1>Launch your online selling</h1>
              <h1>Business with confidence</h1>
              <button className="seller-start-selling-button" onClick={handleStartSelling}>Start Selling</button>
            </div>
            <img src="assets/sellerPic.png" alt="Seller" className="seller-image" />
          </div>
        </div>
        <div className='seller-additional-section'>
          <img src="assets/becomeSellerPic1.png" alt="Become a Seller" className="seller-additional-image" />
          <div className="seller-additional-text-content">
            <h2>Your one-stop shop for quality products</h2>
            <p>Discover top quality products in one place. Our curated selection offers high-</p>
            <p>resolution images, descriptions, and easy navigation to ensure a</p>
            <p>seamless shopping experience for all your needs.</p>
          </div>
        </div>
        <div className='seller-additional-section'>
          <div className="seller-additional-text-content">
            <h2>Simplified Payment Solution</h2>
            <p>Experience effortless and transparent payment management with our</p>
            <p>streamlined system. Simplify transactions, gain clear insight, and confidently</p>
            <p>focus on scaling your business. Our solution ensures smooth financial</p>
            <p>operations, letting you dedicate more time to growing your business effectively.</p>
            <div className='commission-section'>
              <FaWallet className="wallet-icon" />
              <p className="commission-text">0% commission</p>
            </div>
          </div>
          <img src="assets/becomeSellerPic2.png" alt="Become a Seller" className="seller-additional-image" />
        </div>
        <div className='seller-additional-section'>
          <img src="assets/becomeSellerPic3.png" alt="Become a Seller" className="seller-additional-image" />
          <div className="seller-additional-text-content">
            <h2>Focus on Your Brand's <span style={{ color: 'green' }}>Success</span></h2>
            <p>Focus on your brand's success. We offer tailored solutions and expert support</p>
            <p>to help your brand thrive. Our commitment to innovation and growth ensures</p>
            <p>we drive your business forward, maximizing your brand's potential and</p>
            <p>achieving outstanding results.</p>
          </div>
        </div>
        <div className='seller-review'>
          <div className='review-box'>
            <div className='seller-company-name'>
              <p className='company-name'>{currentReview.companyName}</p>
              <div className='seller-additional-section'>
                <div className="seller-additional-text-content">
                  <h3>What customers say about us</h3>
                  <div className='seller-review-text'>
                    <div className='star-section'>
                      {Array.from({ length: currentReview.rating }).map((_, index) => (
                        <div className='star-box' key={index}>★</div>
                      ))}
                    </div>
                    <p>{currentReview.reviewText}</p>
                  </div>
                  <div className="review-arrows">
                    <FaArrowLeft className="arrow-icon" onClick={handlePrevReview} />
                    <FaArrowRight className="arrow-icon" onClick={handleNextReview} />
                  </div>
                </div>
              <img src={currentReview.image} alt="Become a Seller" className="review-seller-image" />
            </div>
          </div>
        </div>
       </div>
       <div className="steps-section">
        <h2 className="steps-title">How to Start Your Online Business</h2>
        <div className="steps-written">
          <div className="step">
            <div className="circle white">
              <div className="step-number">1</div>
              <AiOutlineUser className="step-icon" />
            </div>
            <p className="step-text">Create your account</p>
            <div className="forward-arrow"> ➜ </div>
          </div>
          <div className="step">
            <div className="circle white">
              <div className="step-number">2</div>
              <AiOutlineSelect className="step-icon" />
            </div>
            <p className="step-text">Select your storage and shipping options</p>
            <div className="forward-arrow"> ➜ </div>
          </div>
          <div className="step">
            <div className="circle white">
              <div className="step-number">3</div>
              <AiOutlinePlusCircle className="step-icon" />
            </div>
            <p className="step-text">Add your Product to our platform</p>
            <div className="forward-arrow"> ➜ </div>
          </div>
          <div className="step">
            <div className="circle white">
              <div className="step-number">4</div>
              <FaTruck className="step-icon" />
            </div>
            <p className="step-text">Deliver order and collect payment</p>
          </div>
          </div>
        </div>
        <div className="seller-overlay-section">
          <img src="assets/becomeSellerPic6.png" alt="Become a Seller" className="seller-full-width-image" />
          <div className="seller-overlay">
            <h2 className="sedller-overlay-title">Let's Become an Online Seller & grow Business</h2>
            <button className="seller-start-selling-button">Start Selling</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default BecomeASeller;