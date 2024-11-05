import React, { useState } from 'react';
import { FaMapMarkerAlt, FaMicrophone, FaSearch, FaCheckCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ACServicesProvided.css';

const ACServicesProvided = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;
  const [activeService, setActiveService] = useState('acRepair');

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
      <div className="servicesImageContainer">
        <img src="assets/servicetopRating4.png" alt="Service" className="servicesImage" />
        <div className="serviceOverlay">
          <div className="searchContainer">
            <div className="inputGroup">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Enter your location" className="inputField" />
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="Search your services" className="inputField" />
              <FaMicrophone className="icon" />
              <FaSearch className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="acServicesBody">
        <h2>AC & Appliance Reapir</h2>
        <div className="acServicesBodyMainBody">
          <div className="sidebar">
            <div className="serviceItem" onClick={() => handleServiceClick('acRepair')}>
              <div className="circle">
                <img src="path/to/firstImg.png" />
              </div>
              <span>AC Reapir</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('chimney')}>
              <div className="circle">
                <img src="path/to/secondImg.png" />
              </div>
              <span>Chimney Reoair & Services</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('geyser')}>
              <div className="circle">
                <img src="path/to/circleImg3.png" />
              </div>
              <span>Geyser Repair & Services</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('inverter')}>
              <div className="circle">
                <img src="path/to/image5.png" />
              </div>
              <span>Inverter Repair & Services</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('waterPurifier')}>
              <div className="circle">
                <img src="path/to/image5.png" />
              </div>
              <span>Water Purifier Repair</span>
            </div>
            <div className="serviceItem" onClick={() => handleServiceClick('microwaveRepair')}>
              <div className="circle">
                <img src="path/to/image5.png"/>
              </div>
              <span>Microwave Repair</span>
            </div>
          </div>
          <div className="mainContent">
            {activeService === 'acRepair' && (
              <>
                <h3>AC Reapir</h3>
                <div className="acServiceBoxes">
                  <div className="acServiceBox">
                    <img src="assets/ServiceAC.png" alt="Dry Clean Hub" className="acServiceImage" />
                    <div className="acServiceDetails">
                      <h4>Dry Clean Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        5.0 <FaStar className="starIcon" /> 46 Reviews
                      </div>
                      <div className="acAddress">
                        Sector 14, Faridabad (NIT), Haryana
                      </div>
                      <p>Providing top talent through expert recruitment and efficient staffing solution.</p>
                      <div className="acActionButtons">
                        <button className="connectButton" onClick={() => handleNavigationClick('Dry Clean Hub')}>Connect Now</button>
                        <button className="bookButton" onClick={() => handleNavigationClick('Dry Clean Hub')}>Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="acServiceBox">
                    <img src="assets/ServiceAC2.png" alt="Laundry Hub" className="acServiceImage" />
                    <div className="acServiceDetails">
                      <h4>Laundry Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        5.0 <FaStar className="starIcon" /> 30 Reviews
                      </div>
                      <div className="acAddress">
                        Sector 15, Faridabad, Haryana
                      </div>
                      <p>Reliable laundry services for all your needs.</p>
                      <div className="acActionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="acServiceBoxes">
                  <div className="acServiceBox">
                    <img src="assets/ServiceAC3.png" alt="Laundry Point" className="acServiceImage" />
                    <div className="acServiceDetails">
                      <h4>Laundry Point <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        4.8 <FaStar className="starIcon" /> 25 Reviews
                      </div>
                      <div className="acAddress">
                        Sector 18, Faridabad, Haryana
                      </div>
                      <p>Expert laundry and dry cleaning services you can trust.</p>
                      <div className="acActionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="acServiceBox">
                    <img src="assets/ServiceAC4.png" alt="Laundry House" className="acServiceImage" />
                    <div className="acServiceDetails">
                      <h4>Laundry House <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                      <div className="rating">
                        4.9 <FaStar className="starIcon" /> 38 Reviews
                      </div>
                      <div className="acAddress">
                        Sector 12, Faridabad, Haryana
                      </div>
                      <p>Professional laundry services with a personal touch.</p>
                      <div className="acActionButtons">
                        <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                        <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeService === 'chimney' && (
              <>
                <div className="acSection">
                  <h3>Chimney Reoair & Services</h3>
                  <div className="acDryServices">
                    <div className="acServiceBox">
                      <img src="assets/serviceChimney.png" alt="Laundry Point" className="acServiceImage" />
                      <div className="acServiceDetails">
                        <h4>Laundry Point <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          4.8 <FaStar className="starIcon" /> 25 Reviews
                        </div>
                        <div className="acAddress">
                          Sector 18, Faridabad, Haryana
                        </div>
                        <p>Expert laundry and dry cleaning services you can trust.</p>
                        <div className="acActionButtons">
                          <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                          <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                        </div>
                      </div>
                    </div>
                    <div className="acServiceBox">
                      <img src="assets/serviceChimney.png" alt="Laundry Hub" className="acServiceImage" />
                      <div className="acServiceDetails">
                        <h4>Laundry Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          5.0 <FaStar className="starIcon" /> 30 Reviews
                        </div>
                        <div className="acAddress">
                          Sector 15, Faridabad, Haryana
                        </div>
                        <p>Reliable laundry services for all your needs.</p>
                        <div className="acActionButtons">
                          <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                          <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeService === 'geyser' && (
              <>
                <div className="acSection">
                  <h3>Geyser Repair & Services</h3>
                  <div className="acDryServices">
                    <div className="acServiceBox">
                      <img src="assets/serviceChimney1.png" alt="Laundry Point" className="acServiceImage" />
                      <div className="acServiceDetails">
                        <h4>Laundry Point <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          4.8 <FaStar className="starIcon" /> 25 Reviews
                        </div>
                        <div className="acAddress">
                          Sector 18, Faridabad, Haryana
                        </div>
                        <p>Expert laundry and dry cleaning services you can trust.</p>
                        <div className="acActionButtons">
                          <button className="connectButton" onClick={handleConnectNowClick}>Connect Now</button>
                          <button className="bookButton" onClick={handleBookNowClick}>Book Now</button>
                        </div>
                      </div>
                    </div>
                    <div className="acServiceBox">
                      <img src="assets/serviceChimney1.png" alt="Laundry Hub" className="acServiceImage" />
                      <div className="acServiceDetails">
                        <h4>Laundry Hub <FaCheckCircle className="verifiedIcon" /> Verified</h4>
                        <div className="rating">
                          5.0 <FaStar className="starIcon" /> 30 Reviews
                        </div>
                        <div className="acAddress">
                          Sector 15, Faridabad, Haryana
                        </div>
                        <p>Reliable laundry services for all your needs.</p>
                        <div className="acActionButtons">
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

export default ACServicesProvided;
