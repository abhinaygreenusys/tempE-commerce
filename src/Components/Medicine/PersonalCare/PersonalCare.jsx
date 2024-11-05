import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Cart/CartContext';
import Header from '../../Header/Header';
import PersonalSidebar from './PersonalSidebar';

const PersonalCare = () => {
  const { addToCart,cartItems, updateCartItemQuantity } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState('');
  const navigate = useNavigate();

  const productsPerPage = 4;
  const totalProducts = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productList = [
    {
      name: 'Oral Suspension USP Claribid',
      image: 'assets/personal.png',
      price: 235,
      originalPrice: 260,
      discount: '5% OFF',
      quantity: '125 ml',
    },
    {
      name: 'Zyrtec Allergy Tablets',
      image: 'assets/personal.png',
      price: 300,
      quantity: '1L',
    },
    {
      name: 'Allegra Suspension',
      image: 'assets/personal.png',
      price: 200,
      originalPrice: 190,
      discount: '5% OFF',
      quantity: '10 mg',
    },
    {
      name: 'Levicetrizine Dehrdrochloride Syrup',
      image: 'assets/personal.png',
      price: 235,
      originalPrice: 260,
      discount: '5% OFF',
      quantity: '60 ml',
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
      name: 'Mother DAiry Cow Milk',
      image: 'assets/motherdairy2.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
  ];

  const currentProducts = productList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleAddToCart = (product) => {addToCart(product);};
  const handleProductClick = (productName) => {
    if (productName === 'Amul Taza Toned Milky Milk') {navigate('/amul2-product-description');}
  };
  return (
    <div className="medicine-page">
      <header className="page-header">
        <Header />
      </header>
      <div className="dairy-eggs-body">
        <div className="breadcrumb">
          <p>Home / Grocery / Dairy & Eggs</p>
        </div>
        <hr className="black-line" />
        <div className="content-wrapper">
          <PersonalSidebar />
          <div className="content">
            <div className="left-section">
              <h2>Medicine</h2>
              <p>Show 1-40 of 100</p>
            </div>
            <div className="right-section">
              <div className="sort-box">
                <span>Sort by: Featured</span>
                <button className="dropdown-button">
                  ▼
                </button>
              </div>
            </div>
            <div className="medicine">
              <div className="product-row">
                {currentProducts.map((product, index) => (
                  <div key={index} className="product-box">
                    <span className="heart-emoji">❤️</span>
                    <img src={product.image} alt={product.name} className="medicine-product-image" onClick={() => handleProductClick(product.name)} />
                    <div className="product-rating">
                      <span>★★★★</span> 4
                    </div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">
                      <span>₹{product.price}</span>
                      {product.originalPrice && (
                        <>
                          {' '}
                          <span className="discount">₹{product.originalPrice}</span>
                          <span className="discount-rate">{product.discount}</span>
                        </>
                      )}
                    </div>
                    <div className="product-quantity">Quantity: {product.quantity}</div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination">
              <button className="page-button"disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}>
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1}className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              ))}
              <button className="page-button"disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}>
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="health-care-section">
          <h2>Your Trusted Partner for Your Health Care Solution</h2>
          <div className="box-row">
            <div className="rectangular-box">
              <img src="assets/amul3.png" alt="Product 1" className="box-image1" />
      <div className="box-text">Amul Cow Milk</div>
      <div className="box-price">
        <span>₹250</span> <span className="cancelled-price">₹300</span>
        <span className="discount-rate">20% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 1L</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    <div className="rectangular-box">
      <img src="assets/motherdairy4.png" alt="Product 2" className="box-image" />
      <div className="box-text">Mother Dairy Low Fat Milk</div>
      <div className="box-price">
        <span>₹50</span> <span className="cancelled-price">₹55</span>
        <span className="discount-rate">10% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 500ml</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    <div className="rectangular-box">
      <img src="assets/health-product-2.png" alt="Product 3" className="box-image" />
      <div className="box-text">Paracetamol fast Acting pain-releiver</div>
      <div className="box-price">
        <span>₹40</span> <span className="cancelled-price">₹60</span>
        <span className="discount-rate">500% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 100ml</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    <div className="rectangular-box">
      <img src="assets/health-product-1.png" alt="Product 4" className="box-image2" />
      <div className="box-text">Paracetamol fast Acting pain-releiver</div>
      <div className="box-price">
        <span>₹250</span> <span className="cancelled-price">₹300</span>
        <span className="discount-rate">30% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 2L</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    <div className="rectangular-box">
      <img src="assets/amul5.png" alt="Product 5" className="box-image" />
      <div className="box-text">Amul Low Fat Milk</div>
      <div className="box-price">
        <span>₹250</span> <span className="cancelled-price">₹300</span>
        <span className="discount-rate">20% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 1L</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    <div className="rectangular-box">
      <img src="assets/motherdairy2.png" alt="Product 6" className="box-image" />
      <div className="box-text">Mother DAiry Cow Milk</div>
      <div className="box-price">
        <span>₹250</span> <span className="cancelled-price">₹300</span>
        <span className="discount-rate">20% OFF</span>
      </div>
      <div className="box-quantity">Quantity: 1L</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};
export default PersonalCare;
