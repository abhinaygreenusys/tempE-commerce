import React from 'react';
import './Medicine.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Medicine = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/prescription');
  };
  const handleCounterClick = () => {
    navigate('/over-the-counter');
  };
  const handleVitaminClick = () => {
    navigate('/vitamins-suppliments');
  };
  const handlepersonalCareClick = () => {
    navigate('/personal-hygine');
  };
  const handleHealthClick = () => {
    navigate('/health-device-equipments');
  };
  const handleBabyHealthClick = () => {
    navigate('/baby-health-medication');
  };
  const handleSexualHealthClick = () => {
    navigate('/sexual-medication');
  };
  const handleWeightClick = () => {
    navigate('/weight-loss-medication');
  };
  const handleHomeoClick = () => {
    navigate('/home-medication');
  };
  const handleMentalHealthClick = () => {
    navigate('/mental-health-medication');
  };
  const handlePetHealthClick = () => {
    navigate('/pet-medication');
  };
  return (
    <div className="grocery-page">
      <Header />
      <div className='grocery'>
      <div className="image-section">
        <img src="assets/rectangle.png" alt="Featured" className="featured-image" />
        <div className="centered-text">Medicine</div>
      </div>
      <div className="category-section1">
        <h2>Select Your Category</h2>
        <div className="row1">
          <div className="category-item1" onClick={handleCategoryClick}>
            <img src="assets/prescription.png" alt="Category 1" />
            <p>Prescription & Medication</p>
          </div>
          <div className="category-item1" onClick={handleCounterClick}>
            <img src="assets/countermedicine.png" alt="Category 1" />
            <p>Over the Counter Medicine</p>
          </div>
          <div className="category-item1" onClick={handleVitaminClick}>
            <img src="assets/vitamin.png" alt="Category 2" />
            <p>Vitamin & Suppliments</p>
          </div>
          <div className="category-item1" onClick={handlepersonalCareClick}>
            <img src="assets/personal.png" alt="Category 3" />
            <p>Personal Care & Hygine</p>
          </div>
          <div className="category-item1" onClick={handleHealthClick}>
            <img src="assets/healthdevice.png" alt="Category 4" />
            <p>Health Device & Equipment</p>
          </div>
          
        </div>
        <div className="row1">
          <div className="category-item1" onClick={handleBabyHealthClick}>
            <img src="assets/sexualhealth.png" alt="Category 5" />
            <p>Baby & Health Care</p>
          </div>
          <div className="category-item1" onClick={handleSexualHealthClick}>
            <img src="assets/sexualhealth.png" alt="Category 1" />
            <p>Sexual Health</p>
          </div>
          <div className="category-item1" onClick={handleWeightClick}>
            <img src="assets/weightmanagment.png" alt="Category 6" />
            <p>Weight Managment</p>
          </div>
          <div className="category-item1" onClick={handleHomeoClick}>
            <img src="assets/homeo.png" alt="Category 7" />
            <p>Homeopathic & Alternative</p>
          </div>
          <div className="category-item1" onClick={handleMentalHealthClick}>
            <img src="assets/canned.png" alt="Category 8" />
            <p>Mental Health & Congnitive</p>
          </div>
        </div>
        <div className="row new-category-row1">
            <div className="small-category-item" onClick={handlePetHealthClick}>
              <img src="assets/petmedication.png" alt="Sample" className="small-category-image" />
              <p>Pet Medication</p>
            </div>
          </div>
      </div>
        <div className="new-section">
          <div className="new-section-left">
            <div className="new-box">
              <div className="new-box-content">
                <h4>Colgate MaxFresh with Whitening</h4>
                <p className="discount-text">Up to 20% off</p>
                <button className="shop-now-button">Shop Now</button>
              </div>
              <img src="assets/colgate.png" alt="Colgate MaxFresh" className="new-box-image" />
            </div>
          </div>
          <div className="new-section-right">
            <div className="new-row">
              <div className="new-row-content">
                <h4>Himalaya Neem Purifying Face Wash</h4>
                <p className="discount-text">Up to 20% off</p>
                <button className="shop-now-button">Shop Now</button>
              </div>
              <img src="assets/himalaya.png" alt="Himalaya Face Wash" className="new-row-image" />
            </div>
            <div className="new-row1">
              <div className="new-row-content">
                <h4>Himalaya Neem Purifying Face Wash</h4>
                <p className="discount-text">Up to 20% off</p>
                <button className="shop-now-button">Shop Now</button>
              </div>
              <img src="assets/detoll.png" alt="Himalaya Face Wash" className="new-row-image" />
            </div>
          </div>
        </div>
        <div className="full-width-image-section">
          <img src="assets/fitness.png" alt="Full Width" className="full-width-image" />
        </div>
      </div>
    </div>
  );
};

export default Medicine;
