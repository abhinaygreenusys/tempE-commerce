import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DigitalShowroom.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DigitalShowroom = () => {
  const [selectedOption, setSelectedOption] = useState("Car");
  const [additionalBoxes, setAdditionalBoxes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const options = [
    { value: "Car", label: "Car" },
    { value: "Bike", label: "Bike" },
    { value: "Electric Vehicle", label: "Electric Vehicle" },
    { value: "Luxury Cars", label: "Luxury Cars" }
  ];

  const fetchMoreBoxes = async () => {
    const response = await fetch('/api/more-vehicles');
    const data = await response.json();
    setAdditionalBoxes(data);
    setShowAll(true);
  };

  return (
    <div className="digital-showroom">
      <Header />
      <div className="digital-header">
        <img src="assets/digitalHeaderPic.png" alt="Digital Header" />
        <div className="header-text">
          <h1>Your One-stop Shop for 2 & 4 Wheelers</h1>
          <div className="browse-selection-box">
            <h2>Browse our Selection</h2>
            <div className="vehicle-images">
              <div className="vehicle-item">
                <Link to="/two-wheelers">
                  <img src="assets/digitalBike.png" alt="2 Wheelers" />
                  <p>2 Wheelers</p>
                </Link>
              </div>
              <div className="vehicle-item">
                <Link to="/four-wheelers">
                  <img src="assets/digitalCar.png" alt="4 Wheelers" />
                  <p>4 Wheelers</p>
                </Link>
              </div>
              <div className="vehicle-item">
                <Link to="/electric-vehicles">
                  <img src="assets/digitalEVCar.png" alt="Electric Vehicle" />
                  <p>Electric Vehicle</p>
                </Link>
              </div>
              <div className="vehicle-item">
                <Link to="/commercial-vehicles">
                  <img src="assets/digitalTruck.png" alt="Commercial Vehicle" />
                  <p>Commercial Vehicle</p>
                </Link>
              </div>
              <div className="vehicle-item">
                <Link to="/luxury-vehicles">
                  <img src="assets/digitalLuxuryVehicle.png" alt="Luxury Vehicle" />
                  <p>Luxury Vehicle</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topsell-bigdiscount">
        <h2>Top Sell at Big Discount</h2>
        <div className="discount-section">
          <div className="discount-item">
            <p><strong>Honda live bike at 80500</strong></p>
            <Link to="/honda-live-bike">
              <img src="assets/digitalHonda.png" alt="Honda Live Bike" />
            </Link>
          </div>
          <div className="discount-item">
            <p><strong>R15 live bike at 150500</strong></p>
            <Link to="/r15-live-bike">
              <img src="assets/DigitalKawasaki.png" alt="R15 Live Bike" />
            </Link>
          </div>
          <div className="discount-item">
            <p><strong>Royal Enfield live bike at 350000</strong></p>
            <Link to="/royal-enfield-live-bike">
              <img src="assets/digitalRoyalEnfield.png" alt="Royal Enfield Live Bike" />
            </Link>
          </div>
        </div>
        <div className="discount-section">
          <div className="discount-item">
            <p><strong>Harley Davidson bike Starting at 200500</strong></p>
            <Link to="/harley-davidson-bike">
              <img src="assets/digitalHonda.png" alt="Harley Live Bike" />
            </Link>
          </div>
          <div className="discount-item">
            <p><strong>Triumph bike starting at 150500</strong></p>
            <Link to="/triumph-bike">
              <img src="assets/digitalHonda.png" alt="R15 Live Bike" />
            </Link>
          </div>
          <div className="discount-item">
            <p><strong>BMW Bike Starting at 350000</strong></p>
            <Link to="/bmw-bike">
              <img src="assets/digitalHonda.png" alt="Royal Enfield Live Bike" />
            </Link>
          </div>
        </div>
      </div>
      <div className="just-for-you">
        <div className="just-for-you-title">
          <h2><strong>Just for You</strong></h2>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="just-for-you-boxes">
          <div className="just-for-you-box">
            <Link to="/honda-car">
              <img src="assets/digitalCar.png" alt="Honda Car" />
              <p>Honda Car</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/chevrolet">
              <img src="assets/digitalCar.png" alt="Chevrolet" />
              <p>Chevrolet</p>
              <p>300000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/fiat">
              <img src="assets/digitalCar.png" alt="Fiat" />
              <p>Fiat</p>
              <p>250000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/suzuki">
              <img src="assets/digitalCar.png" alt="Suzuki" />
              <p>Suzuki</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/toyota">
              <img src="assets/digitalCar.png" alt="Toyota" />
              <p>Toyota</p>
              <p>90000</p>
            </Link>
          </div>
        </div>
        <div className="just-for-you-boxes">
          <div className="just-for-you-box">
            <Link to="/hyundai">
              <img src="assets/digitalCar.png" alt="Hyundai" />
              <p>Hyundai</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/ford">
              <img src="assets/digitalCar.png" alt="Ford" />
              <p>Ford</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/tesla">
              <img src="assets/digitalCar.png" alt="Tesla" />
              <p>Tesla</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/bmw">
              <img src="assets/digitalCar.png" alt="BMW" />
              <p>BMW</p>
              <p>90000</p>
            </Link>
          </div>
          <div className="just-for-you-box">
            <Link to="/mercedes">
              <img src="assets/digitalCar.png" alt="Mercedes" />
              <p>Mercedes</p>
              <p>90000</p>
            </Link>
          </div>
        </div>
        {showAll && (
          <div className="just-for-you-boxes">
            {additionalBoxes.map((box, index) => (
              <div className="just-for-you-box" key={index}>
                <Link to={box.link}>
                  <img src={box.image} alt={box.alt} />
                  <p>{box.name}</p>
                  <p>{box.price}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {!showAll && (
          <div className="just-see-all-link">
            <button onClick={fetchMoreBoxes}>See All</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DigitalShowroom;
