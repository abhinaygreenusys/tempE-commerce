import React, { useState } from 'react';
import Header from '../Header/Header';
import { FaTshirt, FaSoap, FaHandsWash, } from 'react-icons/fa';
import './Laundry.css';
import { useNavigate } from 'react-router-dom';

const Laundry = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRequestServiceClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleServiceClick = (route) => {
    navigate(route);
    setShowModal(false);
  };

  return (
    <div className='laundry-page'>
      <Header />
      <div className='laundry'>
        <div className='laundry-left'>
          <h1>Premium Laundry and Dry Cleaning, </h1>
          <h1 style={{ color: 'blue' }}>Delivered to You</h1>
          <p>Your laundry gets delivered to your preferred expert in a click.</p>
          <button className='request-service-btn' onClick={handleRequestServiceClick}>Request a Service</button>
        </div>
        <div className='laundry-right'>
          <img src={`${process.env.PUBLIC_URL}/assets/bedsheet.png`} alt='Bedsheet' className='bedsheet' />
          <img src={`${process.env.PUBLIC_URL}/assets/girl.png`} alt='Girl' className='girl' />
          <img src={`${process.env.PUBLIC_URL}/assets/bedsheet1.png`} alt='Bedsheet1' className='bedsheet1' />
        </div>
      </div>
      <div className="rectangle-box">
        <h2>Select Our Home Service</h2>
        <div className="image-row">
          <img src={`${process.env.PUBLIC_URL}/assets/group11.png`} alt="Group 11" className="clickable-image" />
          <img src={`${process.env.PUBLIC_URL}/assets/group12.png`} alt="Group 12" className="clickable-image" />
          <img src={`${process.env.PUBLIC_URL}/assets/group13.png`} alt="Group 13" className="clickable-image" />
          <img src={`${process.env.PUBLIC_URL}/assets/group14.png`} alt="Group 14" className="clickable-image" />
          <img src={`${process.env.PUBLIC_URL}/assets/group15.png`} alt="Group 15" className="clickable-image" />
        </div>
      </div>
      <div className="service-section">
        <div className="service-left">
          <div className="rectangle-images">
            <img src={`${process.env.PUBLIC_URL}/assets/rectangle11.png`} alt="Rectangle 11" className="rectangle11" />
            <div className="rectangle12-wrapper">
              <img src={`${process.env.PUBLIC_URL}/assets/overlay.png`} alt="Overlay" className="overlay" />
            </div>
          </div>
        </div>
        <div className="service-right">
          <h2>Dependable Laundry Care for Effortless Clean Clothes</h2>
          <p>Dependable Cleaners makes laundry and dry cleaning more convenient than ever, providing reliable, <br />expert services for fresh, spotless clothes effortlessly.</p>
          <div className="service-details">
            <img src={`${process.env.PUBLIC_URL}/assets/group16.png`} alt="Wash & Fold" className="service-icon" />
            <p>Wash & Fold By The Pound</p>
          </div>
          <div className="service-details">
            <img src={`${process.env.PUBLIC_URL}/assets/vector11.png`} alt="Free Pickup & Delivery" className="service-icon" />
            <p>Free Pickup & Delivery Dry Cleaning & Laundry</p>
          </div>
          <div className="image-section">
            <img src={`${process.env.PUBLIC_URL}/assets/groupp.png`} alt="Group P" className="service-image" />
          </div>
        </div>
      </div>
      <div className="background-image-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background2.png)` }}>
        <h2 className="service-overview-text">Service Process Overview</h2>
        <div className="centered-box">
          <div className="image-row">
            <div className="rect-image-container">
              <img src={`${process.env.PUBLIC_URL}/assets/square1.png`} alt="Square 1" className="square-image" />
            </div>
            <div className="square-box">
              <div className="circle-number">02</div>
              <img src={`${process.env.PUBLIC_URL}/assets/vector.png`} alt="Vector" className="square-image1" />
              <p className="rect-text-title">We Wash And Iron</p>
              <p className="rect-text-description">Pick up dirty clothes, return fresh and<br /> clean, hassle-free.</p>
            </div>
            <div className="square-box">
              <div className="circle-number">03</div>
              <img src={`${process.env.PUBLIC_URL}/assets/vector1.png`} alt="Vector 1" className="square-image2" />
              <p className="rect-text-title">Pick Up Your Laundry</p>
              <p className="rect-text-description">Pick up dirty clothes, return fresh and<br /> clean, hassle-free.</p>
            </div>
          </div>
        </div>
        <div className="request-service-section">
          <div className="request-box">
            <h2>Request for Service</h2>
            <p>Request laundry services quickly for fresh, clean clothes, delivered promptly.</p>
            <button className="request-service-btn" onClick={handleRequestServiceClick}>Request for Service</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <button className='close-modal-btn' onClick={handleCloseModal}>X</button>
            <h2>Select Our Home Services</h2>
            <div className='services-grid'>
              <div className='service-item' onClick={() => handleServiceClick('/dry-clean')}>
                <div className='circle-background'>
                  <FaTshirt className='service-icon' />
                </div>
                <p>Dry Clean</p>
              </div>
              <div className='service-item' onClick={() => handleServiceClick('/laundry-services')}>
                <div className='circle-background'>
                  <FaSoap className='service-icon' />
                </div>
                <p>Laundry</p>
              </div>
              <div className='service-item' onClick={() => handleServiceClick('/iron-cloth')}>
                <div className='circle-background'>
                <FaSoap className='service-icon' />
                </div>
                <p>Iron Clothes</p>
              </div>
              <div className='service-item' onClick={() => handleServiceClick('/wash-fold')}>
                <div className='circle-background'>
                  <FaHandsWash className='service-icon' />
                </div>
                <p>Wash & Fold</p>
              </div>
            </div>
            <div className='service-item' onClick={() => handleServiceClick('/cloth-sewing')}>
              <div className='circle-background'>
              <FaHandsWash className='service-icon' />
              </div>
              <p>Cloth Sewing</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laundry;