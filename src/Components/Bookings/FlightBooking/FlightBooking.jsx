import React, { useState } from 'react';
import './FlightBooking.css';
import { Link, useNavigate } from 'react-router-dom';

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState('flight');
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [flightClass, setFlightClass] = useState(' ');
  const [journeyDate, setJourneyDate] = useState('');
  const stations = [
    'New Delhi',
    'Mumbai',
    'Chennai',
    'Kolkata',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Lucknow',
  ];
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setShowFromSuggestions(true);
  };
  const handleFromFocus = () => {
    setShowFromSuggestions(true);
  };
  const handleFromBlur = () => {
    setTimeout(() => setShowFromSuggestions(false), 100);
  };
  const handleToChange = (e) => {
    setTo(e.target.value);
    setShowToSuggestions(true);
  };
  const handleToFocus = () => {
    setShowToSuggestions(true);
  };
  const handleToBlur = () => {
    setTimeout(() => setShowToSuggestions(false), 100);
  };
  const filteredFromStations = stations.filter((station) =>
    station.toLowerCase().startsWith(from.toLowerCase())
  );
  const filteredToStations = stations.filter((station) =>
    station.toLowerCase().startsWith(to.toLowerCase())
  );

  const handleFlightSearch = (e) => {
    e.preventDefault();
    if (!from || !to) {
      alert('Please enter both departure and destination stations.');
      return;
    }
    if (from === to) {
      alert('Departure and destination stations cannot be the same.');
      return;
    }
    if (!journeyDate) {
      alert('Please select a journey date.');
      return;
    }
    navigate('/flight-details', { state: { from, to, journeyDate } });
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    
    switch (tab) {
      case 'flight':
        navigate('/flight-booking');
        break;
      case 'train':
        navigate('/train-booking');
        break;
      case 'bus':
        navigate('/bus');
        break;
      case 'hotel':
        navigate('/hotel-booking');
        break;
      case 'holiday':
        navigate('/holiday-packages');
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="hotel-flight-booking-page">
      <div className="promotion-section">
        <p>
          Join Resia Today and Save Up to 20% on Your Flight. Use code{' '}
          <strong>TRAVEL</strong> at checkout. Promotion valid for new users only.
        </p>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/assets/mainImage.png`}alt="Main"className="main-image"/>
        <div className="overlay">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="Logo"
            className="logo"
          />
        </div>
      </div>
      <div className="options-box">
      <div className={`option ${activeTab === 'flight' ? 'active' : ''}`}onClick={() => handleTabClick('flight')}>
          Flight
        </div>
        <div className={`option ${activeTab === 'train' ? 'active' : ''}`}onClick={() => handleTabClick('train')}>
          Train
        </div>
        <div className={`option ${activeTab === 'bus' ? 'active' : ''}`}onClick={() => handleTabClick('bus')}>
          Bus
        </div>
        <div className={`option ${activeTab === 'hotel' ? 'active' : ''}`}onClick={() => setActiveTab('hotel')} >
          Hotel
        </div>
        <div className={`option ${activeTab === 'holiday' ? 'active' : ''}`}onClick={() => setActiveTab('holiday')}>
          Holiday Package
        </div>
      </div>
      <div className="flight-details-box">
        <div className="trip-type">
          <label>
            <input type="radio" name="trip" value="one-way" /> One Way
          </label>
          <label>
            <input type="radio" name="trip" value="two-way" /> Two Way
          </label>
        </div>
        <div className="flight-options-container">
          <div className="flight-options-row">
            <div className="flight-option from">
            <label htmlFor="from">From</label>
            <input type="text" id="from"name="from"value={from}
              onChange={handleFromChange}onFocus={handleFromFocus}onBlur={handleFromBlur}
              placeholder="Enter departure station"autoComplete="off"
            />
            {from && showFromSuggestions && filteredFromStations.length > 0 && (
              <ul className="suggestions">
                {filteredFromStations.map((station, index) => (
                  <li key={index}onMouseDown={() => {setFrom(station);setShowFromSuggestions(false);}}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
            </div>
            <div className="flight-option to">
              <label htmlFor="to">To</label>
              <input
              type="text"
              id="to"
              name="to"
              value={to}
              onChange={handleToChange}
              onFocus={handleToFocus}
              onBlur={handleToBlur}
              placeholder="Enter destination station"
              autoComplete="off"
            />
            {to && showToSuggestions && filteredToStations.length > 0 && (
              <ul className="suggestions">
                {filteredToStations.map((station, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      setTo(station);
                      setShowToSuggestions(false);
                    }}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
            </div>
            <div className="flight-option departure">
              <label htmlFor="departure">Departure</label>
              <input type="date"id="journeyDate"name="journeyDate"value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}min={new Date().toISOString().split('T')[0]}
            />
            </div>
            <div className="flight-option people">
              <label htmlFor="people">Class</label>
              <select id="class" name="people"value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
          <div className="flight-options-row">
            <div className="flight-option class">
            <button className="search-button" onClick={handleFlightSearch}>
            Search Flight
          </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section1">
        <div className="product-header1">
          <h2>Find Cheap Price to Favourite destination</h2>
          <Link to="/see-all" className="see-all-link1">See All</Link>
        </div>
        <div className="product-row">
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image1.png`} alt="Product 1" />
            <div className="product-info">
              <span>The Forbidden City, China</span>
              <span className="price">₹20,000</span>
            </div>
            <p>Massive Place Complex, Home of emperor,Rich<br/>Architecture,History</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image2.png`} alt="Product 2" />
            <div className="product-info">
              <span>The Temple of Heaven in China</span>
              <span className="price">₹21,000</span>
            </div>
            <p>A Stunning example of Ming Dynasty Architecture<br/>and a place of great historical and spiritual<br/>importance</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image3.png`} alt="Product 3" />
            <div className="product-info">
              <span>The Temple of Heaven in India</span>
              <span className="price">₹32,222</span>
            </div>
            <p>An architecture marmarvel that provide beautiful<br/>views of Manhattan and Brooklyn</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image4.png`} alt="Product 4" />
            <div className="product-info">
              <span>The Temple of Heaven in Bhutan</span>
              <span className="price">₹12,345</span>
            </div>
            <p>The Burj Khalifa is the tallest building of the world<br/>shows the beautiful view of city</p>
          </div>
        </div>
      </div>
      <div className="background-image-section"style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.png)`,}}>
        <img src={`${process.env.PUBLIC_URL}/assets/subtract.png`}alt="Subtract Overlay"className="overlay-image subtract-image"/>
        <div className="subtract-text">
          <h3>Ordering <br/>tickets is no <br/>longer difficult</h3>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/baggs.png`}alt="Baggs"className="overlay-image baggs-image"/>
        <img src={`${process.env.PUBLIC_URL}/assets/palne.png`}alt="Plane"className="overlay-image plane-image"/>
        <div className="plane-text">
          <p>Ordering tickets is no longer difficult,a<br/>seamless,
            hassle-free process awaits,<br/> ensuring convenienceand swift <br/>transactions.
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/vector8.png`} alt="Vector 8" className="overlay-image vector8-image"/>
        <img src={`${process.env.PUBLIC_URL}/assets/group29.png`}alt="Group 29"className="overlay-image group29-image"/>
        <img src={`${process.env.PUBLIC_URL}/assets/plane2.png`}alt="Plane 2"className="overlay-image plane2-image"/>
        <div className="partner-airline-section">
          <h3>Partner Airlines</h3>
          <p>By partnering with 200 top airlines<br/> globally, we ensure a seamless connection to
          <br/> desired destinations across countries<br/>and cities.</p>
        </div>
        <div className="background-image-bottom">
          <div className="bottom-row">
            <img src={`${process.env.PUBLIC_URL}/assets/fly.png`} alt="Fly" />
            <img src={`${process.env.PUBLIC_URL}/assets/qatar.png`} alt="Qatar" />
            <img src={`${process.env.PUBLIC_URL}/assets/india.png`} alt="India" />
            <img src={`${process.env.PUBLIC_URL}/assets/asia.png`} alt="Asia" />
            <img src={`${process.env.PUBLIC_URL}/assets/pacific.png`} alt="Pacific" />
            <img src={`${process.env.PUBLIC_URL}/assets/singapore.png`} alt="Singapore" />
            <img src={`${process.env.PUBLIC_URL}/assets/american.png`} alt="America" />
            <img src={`${process.env.PUBLIC_URL}/assets/qantas.png`} alt="Qantas" />
          </div>
          <div className="bottom-row">
            <img src={`${process.env.PUBLIC_URL}/assets/express.png`} alt="Express" />
            <img src={`${process.env.PUBLIC_URL}/assets/indigo.png`} alt="Indigo" />
            <img src={`${process.env.PUBLIC_URL}/assets/delta.png`} alt="Delta" />
            <img src={`${process.env.PUBLIC_URL}/assets/british.png`} alt="British" />
            <img src={`${process.env.PUBLIC_URL}/assets/qatar.png`} alt="Qatar" />
            <img src={`${process.env.PUBLIC_URL}/assets/fly.png`} alt="Fly" />
            <img src={`${process.env.PUBLIC_URL}/assets/indigo.png`} alt="Indigo" />
            <img src={`${process.env.PUBLIC_URL}/assets/british.png`} alt="British" />
            <img src={`${process.env.PUBLIC_URL}/assets/qantas.png`} alt="Qantas" />
          </div>
        </div>
      </div>
      <div className="great-deals-section">
        <div className="section-header">
          <h2>Great Deals on Flight from New Delhi</h2>
          <Link to="/see-all" className="see-all-link">See All</Link>
        </div>
        <div className="destination-row">
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group1.png`} alt="Destination 1" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group2.png`} alt="Destination 2" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group3.png`} alt="Destination 3" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group4.png`} alt="Destination 4" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group5.png`} alt="Destination 5" />
          </div>
        </div>
      </div>
      <div className="why-resia-section">
        <h2>Why Resia is the Smart Way to Book Flights</h2>
        <div className="why-resia-row">
          <div className="why-resia-box light-green">
            <img src={`${process.env.PUBLIC_URL}/assets/img3.png`} alt="Unmatched Price Guarantee" />
            <div className="why-resia-info">
              <h3>Unmatched Price Guarantee</h3>
              <p>Resia’s algorithm guarantees best<br/> prices, often surpassing <br/>competitors significantly.</p>
            </div>
          </div>
          <div className="why-resia-box light-grey">
            <img src={`${process.env.PUBLIC_URL}/assets/vector4.png`} alt="Airline Partnership" />
            <div className="why-resia-info">
              <h3>Airline Partnership</h3>
              <p>Resia partners with 200+ airlines,<br/> offering more flights and destinations.</p>
            </div>
          </div>
          <div className="why-resia-box light-pink">
            <img src={`${process.env.PUBLIC_URL}/assets/img5.png`} alt="Secure Transactions" />
            <div className="why-resia-info">
              <h3>Secure Transactions</h3>
              <p>Top-notch encryption ensures<br/> your personal and payment<br/> information remains secure.</p>
            </div>
          </div>
          <div className="why-resia-box light-green">
            <img src={`${process.env.PUBLIC_URL}/assets/table-hours-24.png`} alt="24/7 Dedicated Support" />
            <div className="why-resia-info">
              <h3>24/7 Dedicated Support</h3>
              <p>24/7 customer support resolves<br/> issues and answers questions<br/> promptly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightBooking;
