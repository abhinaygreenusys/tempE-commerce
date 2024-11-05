import React from 'react';
import './Grocery.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Grocery = () => {
  const navigate = useNavigate();
  
  const handlefruitClick = () => {
    navigate('/fruits-vegetables');
  }
  const handleDairyEggClick = () => {
    navigate('/dairy-eggs');
  }
  const handlekitchenClick = () => {
    navigate('/kitchen-essentials');
  }
  const handleHouseholdClick = () => {
    navigate('/household-essentials');
  }
  const handleMeatClick = () => {
    navigate('/meat-essentials');
  }
  const handleBabyCareClick = () => {
    navigate('/baby-care');
  }
  const handlePetClick = () => {
    navigate('/pet-care');
  }
  const handleBakeryClick = () => {
    navigate('/bakery');
  }
  const handleBeautyClick = () => {
    navigate('/health-beauty-product');
  }
  const handleBevargeClick = () => {
    navigate('/beverage-product');
  }
  const handleSnacksClick = () => {
    navigate('/snacks');
  }
  const handleBreakfastClick = () => {
    navigate('/breakfast');
  }
  const handleFrozenClick = () => {
    navigate('/frozen-product');
  }
  const handleInternationalClick = () => {
    navigate('/international-product');
  }
  const handleOrganicClick = () => {
    navigate('/organic-product');
  }
  return (
    <div className="grocery-page">
      <Header />
      <div className='grocery'>
      <div className="image-section">
        <img src="assets/rectangle.png" alt="Featured" className="featured-image" />
        <div className="centered-text1">Grocerry</div>
      </div>
      <div className="category-section1">
        <h2>Select Your Category</h2>
        <div className="row1">
          <div className="category-item" onClick={handlefruitClick}>
            <img src="assets/vegetables.png" alt="Category 1" />
            <p>Fruits & Vegetables</p>
          </div>
          <div className="category-item" onClick={handleDairyEggClick}>
            <img src="assets/vegetables.png" alt="Category 1" />
            <p>Dairy & Egg</p>
          </div>
          <div className="category-item" onClick={handlekitchenClick}>
            <img src="assets/grocery.png" alt="Category 2" />
            <p>Kitchen Essential</p>
          </div>
          <div className="category-item" onClick={handleHouseholdClick}>
            <img src="assets/household.png" alt="Category 3" />
            <p>Household Items</p>
          </div>
          <div className="category-item" onClick={handleMeatClick}>
            <img src="assets/seafood.jpg" alt="Category 4" />
            <p>Meat & Seafood</p>
          </div>
        </div>
        <div className="row">
          <div className="category-item" onClick={handleBabyCareClick}>
            <img src="assets/babycare.png" alt="Category 5" />
            <p>Baby & Child Care</p>
          </div>
          <div className="category-item" onClick={handlePetClick}>
            <img src="assets/petsupplies.png" alt="Category 1" />
            <p>Pet Supplies</p>
          </div>
          <div className="category-item" onClick={handleBakeryClick}>
            <img src="assets/bakery.png" alt="Category 6" />
            <p>Bakery</p>
          </div>
          <div className="category-item" onClick={handleBeautyClick}>
            <img src="assets/household.png" alt="Category 7" />
            <p>Healt & Beauty</p>
          </div>
          <div className="category-item" onClick={handleBevargeClick}>
            <img src="assets/canned.png" alt="Category 8" />
            <p>Bevarge</p>
          </div>
        </div>
        <div className="row">
          <div className="category-item" onClick={handleSnacksClick}>
            <img src="assets/snacks.png" alt="Category 9" />
            <p>Snacks</p>
          </div>
          <div className="category-item"onClick={handleBreakfastClick} >
            <img src="assets/breakfast.png" alt="Category 1" />
            <p>Breakfast</p>
          </div>
          <div className="category-item" onClick={handleFrozenClick}>
            <img src="assets/frozen.png" alt="Category 10" />
            <p>Frozen Food</p>
          </div>
          <div className="category-item" onClick={handleInternationalClick}>
            <img src="assets/international.png" alt="Category 11" />
            <p>Internation Foods</p>
          </div>
          <div className="category-item" onClick={handleOrganicClick}>
            <img src="assets/organicfood.png" alt="Category 12" />
            <p>Organic & Special Diet</p>
          </div>
        </div>
      </div>
      <div className="best-offer-section">
          <div className="offer-text">
            <h2>Recommended Best Offer for You</h2>
          </div>
          <div className="offer-background-image">
            <div className="offer-content">
              <h3>100% Pure Desi Ghee</h3>
              <p>Be Healthy Your Life</p>
              <div className="offer-discount">
                <span>10% off</span>
              </div>
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
              <img src="assets/fruitdry.png" alt="Himalaya Face Wash" className="new-row-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
