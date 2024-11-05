import React, { useState } from 'react';
import './DairyEggs.css';
import Header from '../Header/Header';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const WholeMilk = () => {
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
  ];
  const currentProducts = productList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'Amul') {
      navigate('/amul-products'); 
    }
    if  (buttonName === 'Mother Dairy'){
      navigate('/mother-dairy')
    }
    if  (buttonName === 'Whole Milk'){
        navigate('/whole-milk')
      }
  }
  return (
    <div className="dairy-eggs-page">
      <header className="page-header">
        <Header />
      </header>
      <div className="dairy-eggs-body">
        <div className="breadcrumb">
          <p>Home / Grocery / Dairy & Eggs</p>
        </div>
        <hr className="black-line" />
        <div className="content-wrapper">
          <Sidebar />
          <div className="content">
            <div className="left-section">
              <h2>Grocery</h2>
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
            <div className="button-section">
              {['Amul', 'Mother Dairy', 'Whole Milk', 'Almond Milk', 'Skim Milk', 'Goat Milk', 'Soya Milk', 'Oat Milk', 'Lactose-Free Milk', '2% Milk', '1% Milk'].map((name) => (
                <button
                  key={name}
                  className={`product-button round-corners ${selectedButton === name ? 'active' : ''}`}
                  onClick={() => handleButtonClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className='amul-product'>
              <div className="product-row">
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul1.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul2.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★★</span> 4.5
                  </div>
                  <div className="product-name">Amul Taza Whole Milk</div>
                  <div className="product-price">
                    <span>₹300</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul3.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Skimmed Milk</div>
                  <div className="product-price">
                    <span>₹200</span> <span className="discount">₹190</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul4.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-row">
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul5.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul6.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★★</span> 4.5
                  </div>
                  <div className="product-name">Amul Taza Whole Milk</div>
                  <div className="product-price">
                    <span>₹300</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul1.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Skimmed Milk</div>
                  <div className="product-price">
                    <span>₹200</span> <span className="discount">₹190</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul2.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-row">
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul3.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul4.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★★</span> 4.5
                  </div>
                  <div className="product-name">Amul Taza Whole Milk</div>
                  <div className="product-price">
                    <span>₹300</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul5.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Skimmed Milk</div>
                  <div className="product-price">
                    <span>₹200</span> <span className="discount">₹190</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul6.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-row">
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul2.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul1.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★★</span> 4.5
                  </div>
                  <div className="product-name">Amul Taza Whole Milk</div>
                  <div className="product-price">
                    <span>₹300</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul2.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Skimmed Milk</div>
                  <div className="product-price">
                    <span>₹200</span> <span className="discount">₹190</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 1L</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-box">
                  <span className="heart-emoji">❤️</span>
                  <img src="assets/amul3.png" alt="Amul Product" className="product-image" />
                  <div className="product-rating">
                    <span>★★★★</span> 4
                  </div>
                  <div className="product-name">Amul Taza Toned Milky Milk</div>
                  <div className="product-price">
                    <span>₹235</span> <span className="discount">₹260</span>
                    <span className="discount-rate">5% OFF</span>
                  </div>
                  <div className="product-quantity">Quantity: 500 ml</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
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
export default WholeMilk;
