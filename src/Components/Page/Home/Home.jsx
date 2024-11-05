import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faArrowRight, faUndo, faWallet, faTruck, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import Header from '../../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Cart/CartContext';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import Footer from '../../Footer/Footer';

const Home = () => {
  const { addToCart, cartItems, updateCartItemQuantity } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => { setIsExpanded(!isExpanded); };
  const handleAddToCart = (product) => { addToCart(product); };

  const fashiondeals = [
    {name: 'Shorts for girls',image: 'assets/fashion-product-1.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
    { name: 'Shirt for Boys',image: 'assets/fashion-product-2.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
    {name: 'onepiece for girls',image: 'assets/onepiece.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
    {name: 'Cotto Shirt for Boys',image: 'assets/fashion-product-2.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
    {name: 'onepiece for girls',image: 'assets/onepiece.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
    {name: 'Formal Dreess',image: 'assets/shuit.png',price: 250,originalPrice: 300,discount: '20% OFF',quantity: '1',},
  ];

  const toprating = [
    {name: '24 carate Gold Bangle',image: 'assets/goldbangle.png',price: 70000,originalPrice: 300,discount: '20% OFF',quantity: '10gm',},
    {
      name: '22 carate Gold Neckring',
      image: 'assets/goldneckring.png',
      price: 158000,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '20gm',
    },
    {
      name: '24 carate Gold Ear Ring',
      image: 'assets/gold1.png',
      price: 50000,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '8gm',
    }
  ];

  const topdeal = [
    {
      name: '24 carate Gold Neck Ring',
      // image: 'assets/goldneckring.png',
      price: 210000,
      originalPrice: 240000,
      discount: '20% OFF',
      quantity: '25gm',
    },
    {
      name: 'Mother Dairy Low Fat Milk',
      // image: 'assets/gold1.png',
      price: 50,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '500ml',
    },
    {
      name: '24 Carate Gold Bangle',
      // image: 'assets/goldbangle.png',
      price: 50,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '500ml',
    }
  ];
  const electronicdeals = [
    {
      name: 'Bajaj Iron 1000W',
      image: 'assets/electronic-product-1.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Water Heater 800W',
      image: 'assets/electronic-product-2.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'LG Ac 5star',
      image: 'assets/aircondition.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Samsung Laptop i5',
      image: 'assets/laotop.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'LG Refrigerator',
      image: 'assets/refrigerator.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Washing Machine',
      image: 'assets/washingmachine.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
  ];

  const smartwatch = [
    {
      name: 'Smartwatch for Boys',
      image: 'assets/smartwatch.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Smartwatch for Girls',
      image: 'assets/smartwatch1.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Smartwatch for Children',
      image: 'assets/smartwatch.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Smartwatch for Women',
      image: 'assets/smartwatch1.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Smartwatch for girls',
      image: 'assets/smartwatch.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
    {
      name: 'Smartwatch for Boys',
      image: 'assets/smartwatch1.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1',
    },
  ];
  const healthCareProducts = [
    {
      name: 'Amul Cow Milk',
      image: 'assets/amul3.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1L',
    },
    {
      name: 'Mother Dairy Low Fat Milk',
      image: 'assets/motherdairy4.png',
      price: 50,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '500ml',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-2.png',
      price: 40,
      originalPrice: 60,
      discount: '500% OFF',
      quantity: '100ml',
    },
    {
      name: 'Amul Low Fat Milk',
      image: 'assets/amul5.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-1.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '10 tablets',
    },
    {
      name: 'Mother Dairy Cow Milk',
      image: 'assets/motherdairy2.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
  ];
  const recentlyview = [
    {
      name: 'Amul Cow Milk',
      image: 'assets/amul3.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1L',
    },
    {
      name: 'Mother Dairy Low Fat Milk',
      image: 'assets/motherdairy4.png',
      price: 50,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '500ml',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-2.png',
      price: 40,
      originalPrice: 60,
      discount: '500% OFF',
      quantity: '100ml',
    },
    {
      name: 'Amul Low Fat Milk',
      image: 'assets/amul5.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-1.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '10 tablets',
    },
    {
      name: 'Mother Dairy Cow Milk',
      image: 'assets/motherdairy2.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
  ];

  return (
    <div className="home-page">
      <Header />
      <div className="main-row">
        <div className="left-side">
          <div className="sale-box">
            <p>Big Sale Grocery 10% Off</p>
          </div>
          <h1>
            Smart Your Groceries <br />
            Convenience at <span>Your Finger</span>
          </h1>
          <h5>
            Fresh Groceries Online: Premium fresh, organic groceries delivered to your doorstep
            <br />
            Enjoy Convenience, quality, and health with every order.
          </h5>
          <button className="show-now-button">Shop Now</button>
        </div>
        <div className="right-side">
          <img src="assets/jutebags.png" alt="Jute Bags" className="example-pic" />
        </div>
      </div>
      <div className="boxes-row">
        <div className="box">
          <div className="box-text">
            <h3><b>MicroSoft<br />Surface Laptop 14</b></h3>
            <p>up to 30% off</p>
          </div>
          <div className="box-image">
            <img src="assets/laotop.png" alt="Box 1" />
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <h3><b>Canyon Star<br />Rider</b></h3>
            <p>up to 30% off</p>
          </div>
          <div className="box-image">
            <img src="assets/headphone.png" alt="Box 2" />
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <h3><b>MicroSoft<br />Surface Laptop 14</b></h3>
            <p>up to 30% off</p>
          </div>
          <div className="box-image">
            <img src="assets/phone.png" alt="Box 3" />
          </div>
        </div>
      </div>
      <div className="review-section1">
        <h2>Best Review Product of the Month</h2>
        <div className="review-boxes-row1">
          <div className="best-review-box">
            <h5>Best Selling Summer Cloth for Men</h5>
            <div className="image-grid-with-text">
              <div className="image-item">
                <img src="assets/tshirt.png" alt="T-Shirt" />
                <p>T-Shirt</p>
              </div>
              <div className="image-item">
                <img src="assets/shirt.png" alt="Shirt" />
                <p>Shirt</p>
              </div>
              <div className="image-item">
                <img src="assets/tshirt1.png" alt="T-Shirt" />
                <p>T-Shirt</p>
              </div>
              <div className="image-item">
                <img src="assets/shirt1.png" alt="Shirt" />
                <p>Shirt</p>
              </div>
            </div>
          </div>
          <div className="best-review-box">
            <div className="hover-image-container">
              <img src="assets/tshirt.png" alt="T-Shirt" />
              <div className="hover-overlay">
                <FontAwesomeIcon icon={faStar} size="sm" className="star-icon" /> 4.5
                <div className="icon-group">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="best-review-box">
            <h5>Top Rated Home Appliance</h5>
            <div className="image-grid-with-text">
              <div className="image-item">
                <img src="assets/refrigerator.png" alt="Refrigerator" />
                <p>Refrigerator</p>
              </div>
              <div className="image-item">
                <img src="assets/aircondition.png" alt="Air Condition" />
                <p>Air Condition</p>
              </div>
              <div className="image-item">
                <img src="assets/refrigerator.png" alt="Refrigerator" />
                <p>Refrigerator</p>
              </div>
              <div className="image-item">
                <img src="assets/washingmachine.png" alt="Washing Machine" />
                <p>Washing Machine</p>
              </div>
            </div>
          </div>
          <div className="best-review-box">
            <h5>Top Selling Grocery Items</h5>
            <div className="image-with-text">
              <img src="assets/namkeen.png" alt="Namkeen" />
              <p>Namkeen</p>
            </div>
            <div className="image-with-text1">
              <img src="assets/dryfruits.png" alt="Dry Fruits" />
              <p>Dry Fruits</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="product-header">
          <h2>Must have Fashion Deal</h2>
          <Link to="/see-all" className="see-all-link">See All</Link>
        </div>
        <div className="box-row">
            {fashiondeals.map((product, index) => (
              <div key={index} className="rectangular-box">
                <img src={product.image} alt={product.name} className="box-image" />
                <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                <div className="box-text">{product.name}</div>
                <div className="box-price">
                  <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                  <span className="discount-rate">{product.discount}</span>
                </div>
                <div className="box-quantity">Quantity: {product.quantity}</div>
                <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
      </div>
      <div className="gold-new-section">
        <div className="gold-topdeal-section">
          <div className="gold-rating-new-box1">
            <h3>Top Rating Product</h3>
            <div className="rating-box-row">
              {toprating.map((product, index) => (
                <div key={index} className="toprating rating-product-box">
                  <img src={product.image} alt={product.name} className="rating-image" />
                  <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                  <div className="box-text">{product.name}</div>
                  <div className="box-price">
                    <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                    <span className="discount-rate">{product.discount}</span>
                  </div>
                  <div className="box-quantity">Quantity: {product.quantity}</div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="gold-bangle-box">
            <h3>Top Deals Today</h3>
            {/* <div className="gold-deal-box-row">
              {topdeal.map((product, index) => (
                <div key={index} className="topdeal deal-product-box">
                  <img src={product.image} alt={product.name} className="deal-image" />
                  <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                  <div className="box-text">{product.name}</div>
                  <div className="box-price">
                    <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                    <span className="discount-rate">{product.discount}</span>
                  </div>
                  <div className="box-quantity">Quantity: {product.quantity}</div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="additional-section">
  <div className="additional-section-boxes-row">
    <div className="additional-box1">
      <div className="box-text"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h3 style={{color:'white'}}>Laptop </h3>
        <p style={{color:'white'}}>Experience the latest technology with Samsung Laptop.<br/> Get yours now!</p>
        <button className="show-now-button">Shop Now</button>
      </div>
      <img src="assets/laotop.png" alt=" " />
    </div>
    <div className="additional-box2">
      <div className="row">
        <div className="box-text">
          <h3 style={{color:'white'}}>Headphone</h3>
          <p style={{color:'white'}}>Enjoy crystal clear sound with our premium headphones.</p>
          <br/>
          <button className="show-now-button">Shop Now</button>
        </div>
        <img src="assets/headphone.png" alt="Headphone" />
      </div>
      <div className="row">
        <div className="box-text">
          <h3 style={{color:'white'}}>Smartwatch</h3>
          <p style={{color:'white'}}>Stay connected and fit with our stylish smartwatches.</p>
          <br/>
          <button className="show-now-button">Shop Now</button>
        </div>
        <img src="assets/smartwatch.png" alt="Smartwatch" />
      </div>
    </div>
  </div>
      </div>
      <div className="journey-section">
        <div className="journey-content">
          <br/>
          <h5>Let's start on your journey</h5>
          <p className='journey-description'>Your Journey Begins Here Book <br/>Flights Effortlessly</p>
          <p className="journey-text">Effortlesly book light to top destinamtions with our seamless service,<br/>
            Discover the best deal and start your journey today.
          </p>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
      <div className="top-sale-section">
        <h2>Top Sale on Smart Phone</h2>
        <div className="top-sale-content">
          <div className="sale-item main-sale-item">
            <img src="assets/iphone.png" alt="Smartphone" className="sale-item-image" />
            <div className="sale-item-details">
              <h3>Apple iPad Mini 4.5.7 inch with Wi-Fi 64 GB</h3>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price1">100000</span>
                <span className="original-price1">(120000)</span>
                <span className="discount1">20% off</span>
              </div>
              <p>jdahsfkjfsdvbjfsdbvjkfsbv</p>
              <p>fjhfhjshs</p>
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          <div className="small-sale-items">
            <div className="row">
              <div className="small-sale-item">
                <img src="assets/iphone1.png" alt="Item 1" />
                <div className="sale-item-details">
              <h4>iPhone 14 pro max <br/>64 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
              <div className="small-sale-item">
                <img src="assets/iphone2.png" alt="Item 2" />
                <div className="sale-item-details">
              <h4>iPhone 11 pro max <br/>64 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
              <div className="small-sale-item">
                <img src="assets/iphone3.png" alt="Item 3" />
                <div className="sale-item-details">
              <h4>iPhone 12 pro max <br/>64 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
            </div>
            <div className="row">
              <div className="small-sale-item">
                <img src="assets/iphone3.png" alt="Item 4" />
                <div className="sale-item-details">
              <h4>iPhone 13 pro max <br/>64 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
              <div className="small-sale-item">
                <img src="assets/iphone2.png" alt="Item 5" />
                <div className="sale-item-details">
              <h4>iPhone 14 pro max <br/>64 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
              <div className="small-sale-item">
                <img src="assets/iphone1.png" alt="Item 6" />
                <div className="sale-item-details">
              <h4>iPhone 13 <br/>128 gb gold</h4>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <div className="price">
                <span className="current-price">100000</span>
                <span className="original-price">(120000)</span>
                <span className="discount">20% off</span>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`product-section ${isExpanded ? 'expanded' : ''}`}>
        <div className="product-header">
          <h2>Must have Electronic Deals</h2>
          <Link to="/see-all" className="see-all-link">See All</Link>
        </div>
        <div className="box-row">
            {electronicdeals.map((product, index) => (
              <div key={index} className="rectangular-box">
                <img src={product.image} alt={product.name} className="product-box-image" />
                <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                <div className="box-text">{product.name}</div>
                <div className="box-price">
                  <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                  <span className="discount-rate">{product.discount}</span>
                </div>
                <div className="box-quantity">Quantity: {product.quantity}</div>
                <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
      <div className="expand-icon" onClick={handleToggle}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </div>
     </div>
     <div className="deal-section">
  <div className="background-image-container">
    <img src={`${process.env.PUBLIC_URL}/assets/background-image.png`} alt="Main" className="background-image1" />
    <div className="deal-content">
      <div className="left-content">
        <h2>Best Deal - Save on Your Favourite <br /> Grocery</h2>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className="right-content">
        <img src="assets/discount.png" alt="Discount" className="discount-image" />
        <img src="assets/grocery.png" alt="Grocery" className="grocery-image" />
      </div>
    </div>
  </div>
     </div>
     <div className="new-section">
        <div className="new-section-boxes-row">
        <div className="new-box1">
            <h3>Shop Now Save Big on SmartWatch</h3>
            <div className="box-row">
            {smartwatch.map((product, index) => (
              <div key={index} className="rectangular-box">
                <img src={product.image} alt={product.name} className="product-box-image" />
                <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                <div className="box-text">{product.name}</div>
                <div className="box-price">
                  <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                  <span className="discount-rate">{product.discount}</span>
                </div>
                <div className="box-quantity">Quantity: {product.quantity}</div>
                <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className={`product-section1 ${isExpanded ? 'expanded' : ''}`}>
  <div className="product-header">
    <h2>Your Trusted Partner in Healthcare Solutions</h2>
    <Link to="/see-all" className="see-all-link">See All</Link>
  </div>
  <div className="box-row">
            {healthCareProducts.map((product, index) => (
              <div key={index} className="rectangular-box">
                <img src={product.image} alt={product.name} className="box-image" />
                <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                <div className="box-text">{product.name}</div>
                <div className="box-price">
                  <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                  <span className="discount-rate">{product.discount}</span>
                </div>
                <div className="box-quantity">Quantity: {product.quantity}</div>
                <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
  <div className="expand-icon" onClick={handleToggle}>
    <FontAwesomeIcon icon={faArrowRight} size="lg" />
  </div>
</div>
     <div className={`product-section ${isExpanded ? 'expanded' : ''}`}>
        <div className="product-header">
          <h2>Recently Viewed Items</h2>
          <Link to="/see-all" className="see-all-link">See All</Link>
        </div>
        <div className="box-row">
            {recentlyview.map((product, index) => (
              <div key={index} className="rectangular-box">
                <img src={product.image} alt={product.name} className="box-image" />
                <div className="product-rating">
                  <span>★★★★</span> 4
                </div>
                <div className="box-text">{product.name}</div>
                <div className="box-price">
                  <span>₹{product.price}</span> <span className="cancelled-price">₹{product.originalPrice}</span>
                  <span className="discount-rate">{product.discount}</span>
                </div>
                <div className="box-quantity">Quantity: {product.quantity}</div>
                <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
      <div className="expand-icon" onClick={handleToggle}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </div>
     </div>
     <div className="features-section">
        <div className="feature-box">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faTruck} size="2x" />
          </div>
          <div className="feature-text">
            <p className="feature-title">Delivery Charge</p>
            <p className="feature-description">For all orders below 500 rupees</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faUndo} size="2x" />
          </div>
          <div className="feature-text">
            <p className="feature-title">30 Days Return</p>
            <p className="feature-description">Money back in 30 days</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faWallet} size="2x" />
          </div>
          <div className="feature-text">
            <p className="feature-title">Secure Payment</p>
            <p className="feature-description">Your information is safe</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
