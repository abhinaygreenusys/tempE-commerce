import React from 'react';
import { Link } from 'react-router-dom';
import './FoodDelivery.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const FoodDelivery = () => {
  return (
    <div className="food-delivery-page">
      <Header />
      <div className="image-section">
        <img src="assets/fooddelivery.png" alt="Main Featured" className="main-image" />
      </div>
      <div className="three-images-section">
        <div className="image-item">
          <img src="assets/foodpic3.png" alt="Burger 1" className="burger-image" />
          <div className="discount-box">-30% OFF</div>
          <div className="image-caption">
            <p className="delicious-text">Delicious Cheese Burger</p>
            <h2 className="brand-text">Burger King</h2>
          </div>
        </div>
        <div className="image-item">
          <img src="assets/foodpic1.png" alt="Burger 2" className="burger-image" />
          <div className="discount-box">-10% OFF</div>
          <div className="image-caption">
            <p className="delicious-text">Delicious Cheese Burger</p>
            <h2 className="brand-text">Burger King</h2>
          </div>
        </div>
        <div className="image-item">
          <img src="assets/foodpic2.png" alt="Burger 3" className="burger-image" />
          <div className="discount-box">-20% OFF</div>
          <div className="image-caption">
            <p className="delicious-text">Delicious Cheese Burger</p>
            <h2 className="brand-text">Burger King</h2>
          </div>
        </div>
      </div>
      <div className="popular-categories-section">
        <h2 className="popular-title">Order from Popular Categories</h2>
        <div className="categories-row">
          <div className="category-box">
            <div className="image-part">
              <img src="assets/burgers.png" alt="Burger and Salad" className="category-image" />
            </div>
            <div className="text-part">
              <p>Burger and Salad</p>
            </div>
          </div>
          <div className="category-box">
            <div className="image-part">
              <img src="assets/salad.png" alt="Salad" className="category-image" />
            </div>
            <div className="text-part">
              <p>Salad</p>
            </div>
          </div>
          <div className="category-box">
            <div className="image-part">
              <img src="assets/pasta.png" alt="Pasta" className="category-image" />
            </div>
            <div className="text-part">
              <p>Pasta</p>
            </div>
          </div>
          <div className="category-box">
            <div className="image-part">
              <img src="assets/pizza.png" alt="Pizza" className="category-image" />
            </div>
            <div className="text-part">
              <p>Pizza</p>
            </div>
          </div>
          <div className="category-box">
            <div className="image-part">
              <img src="assets/breakfastsoup.png" alt="Breakfast and Soup" className="category-image" />
            </div>
            <div className="text-part">
              <p>Breakfast</p>
            </div>
          </div>
          <div className="category-box">
            <div className="image-part">
              <img src="assets/soup.png" alt="Soup" className="category-image" />
            </div>
            <div className="text-part">
              <p>Soup</p>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-resturants">
        <h2 className="popular-title-resturants">Choose Popular Resturants</h2>
        <div className="categories-rows">
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/mcdonalds">
                <img src="assets/mc.png" alt="Burger and Salad" className="category-image" />
              </Link>
            </div>
            <div className="text-parts">
              <Link to="/mcdonalds">
                <p>Mc Donald's London</p>
              </Link>
            </div>
          </div>
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/papajohns">
                <img src="assets/papajohns.png" alt="Salad" className="category-image" />
              </Link>
            </div>
            <div className="text-parts">
              <Link to="/papajohns">
                <p>Papa Johns</p>
              </Link>
            </div>
          </div>
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/kfcwestlondon">
                <img src="assets/shaurma1.png" alt="Pasta" className="category-image" />
              </Link>
            </div>
            <div className="text-parts">
              <Link to="/kfcwestlondon">
                <p>KFC West London</p>
              </Link>
            </div>
          </div>
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/texaschicken">
                <img src="assets/texas.png" alt="Pizza" className="category-image" />
              </Link>
            </div>
            <div className="text-parts">
              <Link to="/texaschicken">
                <p>Texas Chicken</p>
              </Link>
            </div>
          </div>
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/burgerking">
                <img src="assets/papaJohns.png" alt="Breakfast and Soup" className="category-image" />
              </Link>
            </div>
            <div className="text-parts">
              <Link to="/burgerking">
                <p>Burger King</p>
              </Link>
            </div>
          </div>
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/shaurma1">
                <img src="assets/shaurma1.png" alt="Soup" className="category-image" />
              </Link>
            </div>
            <div className="text-part">
              <Link to="/shaurma1">
                <p>Shaurma1</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fast-ordering-section">
        <div className="fast-ordering-image">
          <img src="assets/friends.png" alt="Fast Ordering" />
        </div>
        <div className="fast-ordering-text">
          <h2>Fast ordering is more</h2>
          <div className="personalise-box">
            Personalise <span className="instaant-text"> & Instant</span>
          </div>
          <p>Download the app for fast ordering</p>
          <div className="app-buttons">
            <img src="assets/appstore.png" alt="Download on the App Store" />
            <img src="assets/googleplay.png" alt="Download it from Google Playstore" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FoodDelivery;
