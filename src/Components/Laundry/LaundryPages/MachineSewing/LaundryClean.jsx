import React, { useState } from 'react';
import { FaMapMarkerAlt, FaMicrophone, FaSearch, FaCheckCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LaundryClean.css';

const LaundryClean = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;
  const [activeService, setActiveService] = useState('dryClean');

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
    };
  }

  const handleMicrophoneClick = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);
      }
    } else {
      alert('Speech recognition not supported in this browser.');
    }
  };

  const handleServiceClick = (service) => {
    setActiveService(service);
  };
  const handleNavigationClick = (serviceName) => {
    navigate(`/laundry-booking?service=${serviceName}`);
  };

  const handleConnectNowClick = () => {
    navigate('/laundry-booking');
  };

  const handleBookNowClick = () => {
    navigate('/laundry-booking');
  };

  return (
    <div className="clothSewing">
      <div className="clothSewingImageContainer">
        <img src="assets/busBooking2.png" alt="clothSewing" className="clothSewingTopImage" />
        <div className="searchOverlay">
          <div className="locationInputContainer">
            <input type="text" placeholder="Enter your location" className="locationInput" />
            <FaMapMarkerAlt className="locationIcon" />
          </div>
          <div className="searchInputContainer">
            <input type="text" placeholder="Search laundry services" className="searchInput"
              value={searchText} onChange={(e) => setSearchText(e.target.value)}
            />
            <FaMicrophone className="microphoneIcon" onClick={handleMicrophoneClick} />
            <FaSearch className="searchIcon" />
          </div>
        </div>
      </div>
      <div className="laundryAndDryClean">
        <h2>Fresh and Clean Laundry Every Time</h2>
        <div className="laundrySidebarAndMainContent">
          <div className="sidebar">
            <div className="serviceItem" onClick={() => handleServiceClick('dryClean')}>
              <div className="circle">
                <img src="path/to/firstImg.png" alt="Dry Clean" />
              </div>
              <span>Dry Clean</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('laundry')}>
              <div className="circle">
                <img src="path/to/secondImg.png" alt="Laundry" />
              </div>
              <span>Laundry</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('iron')}>
              <div className="circle">
                <img src="path/to/circleImg3.png" alt="Iron Clothes" />
              </div>
              <span>Iron Clothes</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('washFold')}>
              <div className="circle">
                <img src="path/to/image5.png" alt="Wash and Fold" />
              </div>
              <span>Wash and Fold</span>
            </div>
          </div>
          <div className="mainContent">
            {activeService === 'dryClean' && (
              <>
                <h3>Dry Clean</h3>
                <div className="laundryServiceBoxes">
                  <div className="laundryServiceBox">
                    <img src="assets/LaunderyServices.png" alt="Dry Clean Hub" className="serviceImage" />
                    <div className="serviceDetails">
                      <h4>Dry Clean Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        5.0 <FaStar className="starIcon" /> 46 Reviews
                      </div>
                      <div className="address">
                        Sector 14, Faridabad (NIT), Haryana
                      </div>
                      <p>Providing top talent through expert recruitment and efficient staffing solution.</p>
                      <div className="actionButtons">
                        <button className="connectButton" onClick={() => handleNavigationClick('Dry Clean Hub')}>Connect Now</button>
                        <button className="bookButton" onClick={() => handleNavigationClick('Dry Clean Hub')}>Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="laundryServiceBox">
                    <img src="assets/LaundryServices1.png" alt="Laundry Hub" className="serviceImage" />
                    <div className="serviceDetails">
                      <h4>Laundry Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        5.0 <FaStar className="starIcon" /> 30 Reviews
                      </div>
                      <div className="address">
                        Sector 15, Faridabad, Haryana
                      </div>
                      <p>Reliable laundry services for all your needs.</p>
                      <div className="actionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laundryServiceBoxes">
                  <div className="laundryServiceBox">
                    <img src="assets/LaunderyServices.png" alt="Laundry Point" className="serviceImage" />
                    <div className="serviceDetails">
                      <h4>Laundry Point <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        4.8 <FaStar className="starIcon" /> 25 Reviews
                      </div>
                      <div className="address">
                        Sector 18, Faridabad, Haryana
                      </div>
                      <p>Expert laundry and dry cleaning services you can trust.</p>
                      <div className="actionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="laundryServiceBox">
                    <img src="assets/LaundryServices1.png" alt="Laundry House" className="serviceImage" />
                    <div className="serviceDetails">
                      <h4>Laundry House <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        4.9 <FaStar className="starIcon" /> 38 Reviews
                      </div>
                      <div className="address">
                        Sector 12, Faridabad, Haryana
                      </div>
                      <p>Professional laundry services with a personal touch.</p>
                      <div className="actionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeService === 'laundry' && (
              <>
                <div className="laundrySection">
                  <h3>Laundry Services</h3>
                  <div className="laundryDryServices">
                    <div className="laundryServiceBox">
                      <img src="assets/LaundryServices2.png" alt="Laundry Point" className="serviceImage" />
                      <div className="serviceDetails">
                        <h4>Laundry Point <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          4.8 <FaStar className="starIcon" /> 25 Reviews
                        </div>
                        <div className="address">
                          Sector 18, Faridabad, Haryana
                        </div>
                        <p>Expert laundry and dry cleaning services you can trust.</p>
                        <div className="actionButtons">
                          <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                          <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                        </div>
                      </div>
                    </div>
                    <div className="laundryServiceBox">
                      <img src="assets/LaundryServices3.png" alt="Laundry Hub" className="serviceImage" />
                      <div className="serviceDetails">
                        <h4>Laundry Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          5.0 <FaStar className="starIcon" /> 30 Reviews
                        </div>
                        <div className="address">
                          Sector 15, Faridabad, Haryana
                        </div>
                        <p>Reliable laundry services for all your needs.</p>
                        <div className="actionButtons">
                          <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                          <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryClean;
