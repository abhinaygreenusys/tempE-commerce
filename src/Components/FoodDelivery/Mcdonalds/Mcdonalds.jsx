import React, { useContext, useState } from 'react';
import './Mcdonalds.css';
import Header from '../../Header/Header';
import { CartContext } from '../../../Cart/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Mcdonalds = () => {
  const [activeMenu, setActiveMenu] = useState('offer');
  const [wishlist, setWishlist] = useState(Array(5).fill(false));
  const { addToCart, cartItems, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist[index] = !newWishlist[index];
    setWishlist(newWishlist);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleProductClick = (productName) => {
    if (productName === 'Amul Taza Toned Milky Milk') {
      navigate('/amul2-product-description');
    }
  };

  const products = [
    {
      image: 'assets/foodpic2.png',
      name: 'Juicy Chicken Burger',
      description: 'Delicious fresh, flavourful, perfect for every bite',
      price: 250,
      cancelPrice: 300,
      discount: '20% OFF'
    },
    {
      image: 'assets/foodpic1.png',
      name: 'Juicy Veg Burger',
      description: 'Delicious fresh, flavourful, perfect for every bite',
      price: 150,
      cancelPrice: 200,
      discount: '20% OFF'
    },
    {
      image: 'assets/foodpic1.png',
      name: 'Juicy Cheese Burger',
      description: 'Delicious fresh, flavourful, perfect for every bite',
      price: 350,
      cancelPrice: 400,
      discount: '20% OFF'
    },
    {
      image: 'assets/foodpic1.png',
      name: 'Juicy Paneer Burger',
      description: 'Delicious fresh, flavourful, perfect for every bite',
      price: 50,
      cancelPrice: 100,
      discount: '20% OFF'
    },
    {
      image: 'assets/foodpic1.png',
      name: 'Juicy Allo Burger',
      description: 'Delicious fresh, flavourful, perfect for every bite',
      price: 150,
      cancelPrice: 200,
      discount: '20% OFF'
    },
  ];

  return (
    <>
      <Header />
      <div className="mcdonalds-container">
        <div className="image-container">
          <img src="assets/foodpic3.png" alt="Food" className="food-image" />
          <div className="overlay1">
            <div className="text-container">
              <p className="small-text">I'm loving it!</p>
              <p className="large-text">McDonald's East London</p>
            </div>
            <div className="delivery-box">
              <p>Delivery in 20-25 minutes</p>
            </div>
            <div className="right-image-container">
              <img src="assets/foodpic3.png" alt="Food" className="right-food-image" />
            </div>
            <div className="rating-container">
              <div className="rating-box">
                <p className="rating-score">3.4</p>
                <div className="rating-star">★★★★☆</div>
                <p className="rating-reviews">1360 reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-title">
            <h2>Explore Menu</h2>
            <img src="assets/explore-menu.png" alt="Explore Menu" className="explore-menu-image" />
          </div>
          <div className="menu-grid">
            <div className={`square-box ${activeMenu === 'offer' ? 'active' : ''}`} onClick={() => setActiveMenu('offer')}>
              <img src="assets/offer.png" alt="Offer" />
              <p>Offer</p>
            </div>
            <div className={`square-box ${activeMenu === 'burger' ? 'active' : ''}`} onClick={() => setActiveMenu('burger')}>
              <img src="assets/burgerss.png" alt="Burger" />
              <p>Burger</p>
            </div>
            <div className={`square-box ${activeMenu === 'fries' ? 'active' : ''}`} onClick={() => setActiveMenu('fries')}>
              <img src="assets/fries.png" alt="Fries" />
              <p>Fries</p>
            </div>
            <div className={`square-box ${activeMenu === 'snacks' ? 'active' : ''}`} onClick={() => setActiveMenu('snacks')}>
              <img src="assets/snack.png" alt="Snacks" />
              <p>Snacks</p>
            </div>
            <div className={`square-box ${activeMenu === 'salad' ? 'active' : ''}`} onClick={() => setActiveMenu('salad')}>
              <img src="assets/salads.png" alt="Salad" />
              <p>Salad</p>
            </div>
            <div className={`square-box ${activeMenu === 'coldDrink' ? 'active' : ''}`} onClick={() => setActiveMenu('coldDrink')}>
              <img src="assets/cold-drinks.png" alt="Cold Drinks" />
              <p>Cold Drinks</p>
            </div>
            <div className={`square-box ${activeMenu === 'happyMeal' ? 'active' : ''}`} onClick={() => setActiveMenu('happyMeal')}>
              <img src="assets/happy-meal.png" alt="Happy Meal" />
              <p>Happy Meal</p>
            </div>
            <div className={`square-box ${activeMenu === 'sauces' ? 'active' : ''}`} onClick={() => setActiveMenu('sauces')}>
              <img src="assets/sauces.png" alt="Sauces" />
              <p>Sauces</p>
            </div>
            <div className={`square-box ${activeMenu === 'orbitFood' ? 'active' : ''}`} onClick={() => setActiveMenu('orbitfood')}>
              <img src="assets/orbit-food.png" alt="Orbit Food" />
              <p>Orbit Food</p>
            </div>
            <div className={`square-box ${activeMenu === 'thali' ? 'active' : ''}`} onClick={() => setActiveMenu('thali')}>
              <img src="assets/thali.png" alt="Thali" />
              <p>Thali</p>
            </div>
          </div>
        </div>
        {activeMenu === 'offer' && (
          <div className="offer-section">
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
            <div className="be-continue-section">
              <h2>Be Continue</h2>
              <div className="row">
                {products.map((product, index) => (
                  <div className="rectangular-box" key={index}>
                    <div className="wishlist-icon" onClick={() => toggleWishlist(index)}>
                      {wishlist[index] ? '❤️' : '♡'}
                    </div>
                    <img src={product.image}alt={product.name}className="macdonal"/>
                    <div className="star-rating">
                      <p className="star-icon">★★★★☆</p>4.0
                    </div>
                    <div className="product-info">
                      <p>{product.description}</p>
                    </div>
                    <div className="price-info">
                      <div className="price-left">
                        <span className="original-price">₹{product.price}</span>
                        <span className="cancel-price">₹{product.cancelPrice}</span>
                      </div>
                      <span className="discount">{product.discount}</span>
                    </div>
                    <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeMenu === 'burger' && (
          <div className="burger-section">
            <h3>Burgers</h3>
            <div className="row">
                {products.map((product, index) => (
                  <div className="rectangular-box" key={index}>
                    <div className="wishlist-icon" onClick={() => toggleWishlist(index)}>
                      {wishlist[index] ? '❤️' : '♡'}
                    </div>
                    <img src={product.image}alt={product.name}className="dairy-product-image"/>
                    <div className="star-rating">
                      <p className="star-icon">★★★★☆</p>4.0
                    </div>
                    <div className="product-info">
                      <p>{product.description}</p>
                    </div>
                    <div className="price-info">
                      <div className="price-left">
                        <span className="original-price">₹{product.price}</span>
                        <span className="cancel-price">₹{product.cancelPrice}</span>
                      </div>
                      <span className="discount">{product.discount}</span>
                    </div>
                    <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                ))}
              </div>
          </div>
        )}
        <div className="info-box-wrapper">
          <div className="info-section">
            <div className="info-container">
              <div className="info-column">
                <div className="info-box">
                  <h3>Delivery Information</h3>
                  <p>Monday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Tuesday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Wednesday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Thursday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Friday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Saturday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                  <p>Sunday: 11:00 am-3:00 pm, 4:00 pm-12:00 am</p>
                </div>
              </div>
              <div className="info-column">
                <div className="info-box">
                  <h3>Contact Information</h3>
                  <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-related information on your request.</p>
                  <p>Phone No: +913e8943984</p>
                </div>
              </div>
              <div className="info-column">
                <div className="info-box1">
                  <h3 style={{color:"white"}}>Operational Timing</h3>
                  <p style={{color:"white"}}>Monday: 11:00 am to 10:00 pm</p>
                  <p style={{color:"white"}}>Tuesday: 11:00 am to 9:00 pm</p>
                  <p style={{color:"white"}}>Wednesday: 11:00 am to 9:00 pm</p>
                  <p style={{color:"white"}}>Thursday: 11:00 am to 9:00 pm</p>
                  <p style={{color:"white"}}>Friday: 11:00 am to 10:00 pm</p>
                  <p style={{color:"white"}}>Saturday: 1:00 pm to 1:00 am</p>
                  <p style={{color:"white"}}>Sunday: 11:00 am to 2:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-box-container">
          <div className="customer-review-section">
            <div className="review-header">
              <h3>Customer Review</h3>
              <div className="review-nav-buttons">
                <button className="nav-button">&lt;</button>
                <button className="nav-button">&gt;</button>
              </div>
            </div>
            <div className="review-grid">
              <div className="review-box">
                <p className="review-text">Customer 1 review text goes here...</p>
                <div className="customer-info">
                  <img src="assets/customer1.png" alt="Customer 1" className="customer-image" />
                  <div className="customer-details">
                    <p className="customer-name">Customer 1</p>
                    <p className="customer-id">ID: 001</p>
                  </div>
                </div>
              </div>
              <div className="review-box">
                <p className="review-text">Customer 2 review text goes here...</p>
                <div className="customer-info">
                  <img src="assets/customer2.png" alt="Customer 2" className="customer-image" />
                  <div className="customer-details">
                    <p className="customer-name">Customer 2</p>
                    <p className="customer-id">ID: 002</p>
                  </div>
                </div>
              </div>
              <div className="review-box">
                <p className="review-text">Customer 3 review text goes here...</p>
                <div className="customer-info">
                  <img src="assets/customer3.png" alt="Customer 3" className="customer-image" />
                  <div className="customer-details">
                    <p className="customer-name">Customer 3</p>
                    <p className="customer-id">ID: 003</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-resturants">
        <h2 className="popular-title-resturants">Similar Resturants</h2>
        <div className="categories-rows">
          <div className="category-boxs">
            <div className="image-part">
              <Link to="/mcdonalds">
                <img src="assets/texas.png" alt="Burger and Salad" className="category-image" />
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
      </div>
    </>
  );
};
export default Mcdonalds;
