import React, { useEffect, useState } from 'react';
import './HolidayPackage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const HolidayPackages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('holiday');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [showFromCitySuggestions, setShowFromCitySuggestions] = useState(false);
  const [showToCitySuggestions, setShowToCitySuggestions] = useState(false);
  const [departure, setDeparture] = useState('');
  const [guestRoomsSummary, setGuestRoomsSummary] = useState('Guests & Rooms');
  const [showGuestRooms, setShowGuestRooms] = useState(false);
  const [filterSummary, setFilterSummary] = useState('Select Filter(Optional)');
  const [showFilter, setShowFilter] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('International');
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

  const categoryImages = {
    International: [
      { src: `${process.env.PUBLIC_URL}/assets/holidayJaipur.png`, label: 'Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayJaipur.png`, label: 'Jaipur' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayJaipur.png`, label: 'Ladakh' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayJaipur.png`, label: 'Manali' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayJaipur.png`, label: 'Nainital' },
    ],
    Beaches: [
      { src: `${process.env.PUBLIC_URL}/assets/holidayGoa.png`, label: 'Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayGoa.png`, label: 'Beach Paradise' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayGoa.png`, label: 'Sunny Shores' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayGoa.png`, label: 'Tropical Beach' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayGoa.png`, label: 'Golden Sands' },
    ],
    Honeymoon: [
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Romantic Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Enchanting Jaipur' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Ladakh Bliss' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Manali Magic' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Nainital Nights' },
    ],
    Mountain: [
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Jaipur' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Ladakh' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Manali' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Nainital' },
    ],
    Adventure: [
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Jaipur' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Ladakh' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Manali' },
      { src: `${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`, label: 'Nainital' },
    ],
    'Cold Weather': [
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Goa' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Jaipur' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Ladakh' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Manali' },
      { src: `${process.env.PUBLIC_URL}/assets/holidayMountain.png`, label: 'Nainital' },
    ],
  };

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/booking':
        setActiveTab('flight');
        break;
      case '/bus':
        setActiveTab('bus');
        break;
      case '/hotels':
        setActiveTab('hotel');
        break;
      case '/holiday-packages':
        setActiveTab('holiday');
        break;
      case '/train-booking':
        setActiveTab('train');
        break;
      default:
        setActiveTab('hotel');
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'flight':
        navigate('/booking');
        break;
      case 'bus':
        navigate('/bus');
        break;
      case 'hotel':
        navigate('/hotels');
        break;
      case 'holiday':
        navigate('/holiday-packages');
        break;
      case 'train':
        navigate('/train-booking');
        break;
      default:
        break;
    }
  };

  const handleFromCityChange = (e) => {
    setFromCity(e.target.value);
    setShowFromCitySuggestions(true);
  };
  const handleToCityChange = (e) => {
    setToCity(e.target.value);
    setShowToCitySuggestions(true);
  };
  const handleFromCityFocus = () => {
    setShowFromCitySuggestions(true);
  };
  const handleToCityFocus = () => {
    setShowToCitySuggestions(true);
  };
  const handleFromCityBlur = () => {
    setTimeout(() => setShowFromCitySuggestions(false), 100);
  };
  const handleToCityBlur = () => {
    setTimeout(() => setShowToCitySuggestions(false), 100);
  };
  const filteredFromStations = stations.filter((station) =>
    station.toLowerCase().startsWith(fromCity.toLowerCase())
  );
  const filteredToStations = stations.filter((station) =>
    station.toLowerCase().startsWith(toCity.toLowerCase())
  );
  const openGuestRooms = () => {
    setShowGuestRooms(true);
  };
  const openFilter = () => {
    setShowFilter(true);
  };
  const closeGuestRooms = () => {
    setShowGuestRooms(false);
  };
  const increment = (setter, max = Infinity) => {
    setter((prev) => (prev < max ? prev + 1 : prev));
  };

  const decrement = (setter, min = 0) => {
    setter((prev) => (prev > min ? prev - 1 : prev));
  };

  const handleDone = () => {
    setGuestRoomsSummary(`${adults} Adults, ${children} Children, ${rooms} Room(s)`);
    setShowGuestRooms(false);
  };

  const handleCancel = () => {
    setShowGuestRooms(false);
  };

  const handleSearch = () => {
      if (!fromCity || !toCity) {
        alert('Please enter both departure and destination stations.');
        return;
      }
      if (fromCity === toCity) {
        alert('Departure and destination stations cannot be the same.');
        return;
      }
      if (!departure) {
        alert('Please select a journey date.');
        return;
      }
    setErrorMessage('');
    navigate('/hotel-details', {
      state: { fromCity,toCity, rooms, adults, children },
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="holiday-packages-page">
      <div className="promotion-section">
        <p>
          Join Resia Today and Save Up to 20% on Your Flight. Use code{' '}
          <strong>TRAVEL</strong> at checkout. Promotion valid for new users only.
        </p>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/assets/mainImage.png`} alt="Main" className="main-image" />
        <div className="overlay">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="options-box">
        <div className={`option ${activeTab === 'flight' ? 'active' : ''}`} onClick={() => handleTabClick('flight')}>
          Flight
        </div>
        <div className={`option ${activeTab === 'train' ? 'active' : ''}`}onClick={() => handleTabClick('train')}>
          Train
        </div>
        <div className={`option ${activeTab === 'bus' ? 'active' : ''}`}onClick={() => handleTabClick('bus')}>
          Bus
        </div>
        <div className={`option ${activeTab === 'hotel' ? 'active' : ''}`}onClick={() => handleTabClick('hotel')}>
          Hotel
        </div>
        <div className={`option ${activeTab === 'holiday' ? 'active' : ''}`}onClick={() => handleTabClick('holiday')}>
          Holiday Package
        </div>
      </div>
      <div className="hotel-box">
        <div className="hotel-form">
        <div className="form-group">
            <label htmlFor="whereTo">From City</label>
            <input type="text"id="fromCity"name="fromCity"value={fromCity}onChange={handleFromCityChange}
              onFocus={handleFromCityFocus}onBlur={handleFromCityBlur}placeholder="Enter From city"autoComplete="off"
            />
            {fromCity && showFromCitySuggestions && filteredFromStations.length > 0 && (
              <ul className="suggestions">
                {filteredFromStations.map((station, index) => (
                  <li key={index}onMouseDown={() => {setFromCity(station);setShowFromCitySuggestions(false);}}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="whereTo">To City/Country/State</label>
            <input type="text"id="toCity"name="toCity"value={toCity}onChange={handleToCityChange}
              onFocus={handleToCityFocus}onBlur={handleToCityBlur}placeholder="Enter To city"autoComplete="off"
            />
            {toCity && showToCitySuggestions && filteredToStations.length > 0 && (
              <ul className="suggestions">
                {filteredToStations.map((station, index) => (
                  <li key={index}onMouseDown={() => {setToCity(station);setShowToCitySuggestions(false);}}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flight-option departure">
            <label htmlFor="departure">Departure</label>
            <input type="date" id="departure" name="departure" value={departure} onChange={(e) => setDeparture(e.target.value)} min={new Date().toISOString().split('T')[0]} />
            </div>
          <div className="form-group">
            <label htmlFor="guestRooms">Guests & Rooms</label>
            <input type="text" id="guestRooms"name="guestRooms"value={guestRoomsSummary}
              onClick={openGuestRooms}readOnlyplaceholder="Guests & Rooms"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="guestRooms">Filter</label>
            <input type="text" id="guestRooms"name="guestRooms"value={filterSummary}
              onClick={openFilter}readOnlyplaceholder="Guests & Rooms"
            />
          </div> */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="search-button-container">
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        {showGuestRooms && (
          <div className="guest-rooms-modal">
            <div className="guest-rooms-content">
              <h3>Rooms & Guests</h3>
              <div className="selection-group">
                <span className="selection-title">Rooms</span>
                <div className="selection-controls">
                  <button onClick={() => decrement(setRooms, 1)}aria-label="Decrease number of rooms">
                    -
                  </button>
                  <span>{rooms}</span>
                  <button onClick={() => increment(setRooms)} aria-label="Increase number of rooms">
                    +
                  </button>
                </div>
              </div>
              <div className="selection-group">
                <span className="selection-title">Adults (12+)</span>
                <div className="selection-controls">
                  <button onClick={() => decrement(setAdults, 1)}aria-label="Decrease number of adults">
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => increment(setAdults)}aria-label="Increase number of adults">
                    +
                  </button>
                </div>
              </div>
              <div className="selection-group">
                <span className="selection-title">Children (0-11)</span>
                <div className="selection-controls">
                  <button onClick={() => decrement(setChildren, 0)}aria-label="Decrease number of children">
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => increment(setChildren)}aria-label="Increase number of children">
                    +
                  </button>
                </div>
              </div>
              <div className="action-buttons">
                <button className="done-button" onClick={handleDone}>
                  Done
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* {showFilter && (
          <div className="guest-rooms-modal">
          </div>
        )} */}
      </div>
      <div className="luxury-escape-section">
        <h2>Luxury Escape and Holiday Adventures</h2>
        <div className="image-row">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayRajasthan.png`}alt="Jaipur"className="destination-image"/>
            <div className="deal-label">Jaipur</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayTajMahal1.png`}alt="Agra"className="destination-image"/>
            <div className="deal-label">Agra</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayDelhi.png`} alt="Delhi"className="destination-image"/>
            <div className="deal-label">Delhi</div>
          </div>
        </div>
      </div>
      <div className="discover-dream-holiday-section">
        <h2>Discover Your Dream Holiday</h2>
        <div className="image-row">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayGoa.png`} alt="Goa" className="destination-image" />
            <div className="deal-label">Goa</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayJaipur.png`}alt="Jaipur" className="destination-image"/>
            <div className="deal-label">Jaipur</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayMountain.png`}alt="Srinagar"className="destination-image"/>
            <div className="deal-label">Ladakh</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayMountain.png`} alt="Manali"className="destination-image"/>
            <div className="deal-label">Manali</div>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/holidayJaipur.png`}alt="Nainital"className="destination-image"/>
            <div className="deal-label">Pune</div>
          </div>
        </div>
      </div>
      <div className="discover-dream-places-section">
        <h2>Discover Your Dream Holiday Places</h2>
        <div className="button-group">
          <button className={`category-button ${selectedCategory === 'International' ? 'active' : ''}`}onClick={() => handleCategoryClick('International')}>
            International
          </button>
          <button
            className={`category-button ${selectedCategory === 'Beaches' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Beaches')}
          >
            Beaches
          </button>
          <button
            className={`category-button ${selectedCategory === 'Honeymoon' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Honeymoon')}
          >
            Honeymoon
          </button>
          <button
            className={`category-button ${selectedCategory === 'Mountain' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Mountain')}
          >
            Mountain
          </button>
          <button
            className={`category-button ${selectedCategory === 'Adventure' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Adventure')}
          >
            Adventure
          </button>
          <button
            className={`category-button ${selectedCategory === 'Cold Weather' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Cold Weather')}
          >
            Cold Weather
          </button>
        </div>
        <div className="dynamic-image-row">
          {categoryImages[selectedCategory].map((image, index) => (
    <div className="image-container" key={index}>
      <img src={image.src} alt={image.label} className="destination-image" />
      <div className="deal-label">{image.label}</div>
    </div>
  ))}
</div>
      </div>
      <div className="affordable-holiday-deals-section">
        <h2>Affordable Holiday Deal for Every Traveller</h2>
        <div className="affordable-deals-row">
          <div className="affordable-deals-rectangle first-rectangle">
            <div className="affordable-deals-box">
              <div className="deal-image-container">
                <img src={`${process.env.PUBLIC_URL}/assets/holidayTajMahal.png`}alt="India"className="deal-image"/>
                <div className="deal-label">India</div>
              </div>
              <div className="deal-image-container">
                <img src={`${process.env.PUBLIC_URL}/assets/holidayWinter.png`}alt="Russia"className="deal-image"/>
                <div className="deal-label">Russia</div>
              </div>
            </div>
            <div className="affordable-deals-box">
              <div className="deal-image-container1">
                <img src={`${process.env.PUBLIC_URL}/assets/holidayDubai.png`}alt="Dubai"className="deal-image1"/>
                <div className="deal-label">Dubai</div>
              </div>
            </div>
          </div>
          <div className="affordable-deals-rectangle second-rectangle">
            <div className="deal-image-container2">
              <img src={`${process.env.PUBLIC_URL}/assets/HolidayMountain1.png`}alt="Sri Lanka"className="deal-image2"/>
              <div className="deal-label">Sri Lanka</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;