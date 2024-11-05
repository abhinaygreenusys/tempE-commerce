import React, { useEffect, useState } from 'react';
import './Hotel.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRupeeSign, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('hotel');
  const [whereTo, setWhereTo] = useState('');
  const [showWhereToSuggestions, setShowWhereToSuggestions] = useState(false);
  const [guestRoomsSummary, setGuestRoomsSummary] = useState('Guests & Rooms');
  const [showGuestRooms, setShowGuestRooms] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Dubai'); // Default location

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

  const handleWhereToChange = (e) => {
    setWhereTo(e.target.value);
    setShowWhereToSuggestions(true);
  };
  const handleWhereToFocus = () => {
    setShowWhereToSuggestions(true);
  };
  const handleWhereToBlur = () => {
    setTimeout(() => setShowWhereToSuggestions(false), 100);
  };
  const filteredStations = stations.filter((station) =>
    station.toLowerCase().startsWith(whereTo.toLowerCase())
  );
  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    const nextDate = date.toISOString().split('T')[0];
    setCheckOutDate(nextDate);
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckOutDate(selectedDate);
  };

  const openGuestRooms = () => {
    setShowGuestRooms(true);
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
    if (!whereTo) {
      setErrorMessage('Please enter a destination.');
      return;
    }
    if (!checkInDate) {
      setErrorMessage('Please select a check-in date.');
      return;
    }
    if (!checkOutDate) {
      setErrorMessage('Please select a check-out date.');
      return;
    }
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      setErrorMessage('Check-out date must be after check-in date.');
      return;
    }
    setErrorMessage('');
    navigate('/hotel-details', {
      state: { whereTo, checkInDate, checkOutDate, rooms, adults, children },
    });
  };

  const topHotels = [
    {
      id: 1,
      name: 'The Lella Palace',
      image: 'hotel1.png',
      rating: 4.5,
      reviews: 46,
      price: 500,
      guests: 2,
      location: 'Delhi',
    },
    {
      id: 2,
      name: 'Sunshine Resort',
      image: 'hotel2.png',
      rating: 4.7,
      reviews: 89,
      price: 750,
      guests: 3,
      location: 'Mumbai',
    },
    {
      id: 3,
      name: 'Oceanview Hotel',
      image: 'hotel3.png',
      rating: 4.3,
      reviews: 34,
      price: 650,
      guests: 2,
      location: 'Goa',
    },
    {
      id: 4,
      name: 'Taj Palace Hotel',
      image: 'hotel4.png',
      rating: 4.3,
      reviews: 34,
      price: 6500,
      guests: 2,
      location: 'Goa',
    },
  ];

  // Sample data for property types
  const propertyTypes = [
    {
      id: 1,
      type: 'Hotel',
      image: 'hotel3.png',
    },
    {
      id: 2,
      type: 'Resorts',
      image: 'hotel4.png',
    },
    {
      id: 3,
      type: 'Villas',
      image: 'hotel1.png',
    },
    {
      id: 4,
      type: 'Apartments',
      image: 'hotel2.png',
    },
  ];

  const locations = ['Dubai', 'Singapore', 'Paris', 'New York', 'London']; // Add more locations as needed

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    // Implement any additional functionality when location changes, if needed
  };

  return (
    <div className="hotel-page">
      {/* Promotion Section */}
      <div className="promotion-section">
        <p>
          Join Resia Today and Save Up to 20% on Your Flight. Use code{' '}
          <strong>TRAVEL</strong> at checkout. Promotion valid for new users only.
        </p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={`${process.env.PUBLIC_URL}/assets/mainImage.png`}
          alt="Main"
          className="main-image"
        />
        <div className="overlay">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="Logo"
            className="logo"
          />
        </div>
      </div>

      {/* Options Box */}
      <div className="options-box">
        <div
          className={`option ${activeTab === 'flight' ? 'active' : ''}`}
          onClick={() => handleTabClick('flight')}
        >
          Flight
        </div>
        <div
          className={`option ${activeTab === 'train' ? 'active' : ''}`}
          onClick={() => handleTabClick('train')}
        >
          Train
        </div>
        <div
          className={`option ${activeTab === 'bus' ? 'active' : ''}`}
          onClick={() => handleTabClick('bus')}
        >
          Bus
        </div>
        <div
          className={`option ${activeTab === 'hotel' ? 'active' : ''}`}
          onClick={() => handleTabClick('hotel')}
        >
          Hotel
        </div>
        <div
          className={`option ${activeTab === 'holiday' ? 'active' : ''}`}
          onClick={() => handleTabClick('holiday')}
        >
          Holiday Package
        </div>
      </div>

      {/* Hotel Search Box */}
      <div className="hotel-box">
        <div className="hotel-form">
          <div className="form-group">
            <label htmlFor="whereTo">Location</label>
            <input
              type="text"
              id="whereTo"
              name="whereTo"
              value={whereTo}
              onChange={handleWhereToChange}
              onFocus={handleWhereToFocus}
              onBlur={handleWhereToBlur}
              placeholder="Enter destination city"
              autoComplete="off"
            />
            {whereTo && showWhereToSuggestions && filteredStations.length > 0 && (
              <ul className="suggestions">
                {filteredStations.map((station, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      setWhereTo(station);
                      setShowWhereToSuggestions(false);
                    }}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-In Date</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={checkInDate}
              onChange={handleCheckInDateChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-Out Date</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
              min={
                checkInDate
                  ? new Date(new Date(checkInDate).getTime() + 86400000).toISOString().split('T')[0]
                  : new Date().toISOString().split('T')[0]
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="guestRooms">Guests & Rooms</label>
            <input
              type="text"
              id="guestRooms"
              name="guestRooms"
              value={guestRoomsSummary}
              onClick={openGuestRooms}
              readOnly
              placeholder="Guests & Rooms"
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="search-button-container">
            <button className="search-button" onClick={handleSearch}>
              Search Hotels
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
                  <button onClick={() => decrement(setRooms, 1)} aria-label="Decrease number of rooms">
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
                  <button onClick={() => decrement(setAdults, 1)} aria-label="Decrease number of adults">
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => increment(setAdults)} aria-label="Increase number of adults">
                    +
                  </button>
                </div>
              </div>
              <div className="selection-group">
                <span className="selection-title">Children (0-12 years)</span>
                <div className="selection-controls">
                  <button onClick={() => decrement(setChildren, 0)} aria-label="Decrease number of children">
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => increment(setChildren)} aria-label="Increase number of children">
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
      </div>
      <div className="top-hotels-section">
        <h2 className="section-title">Top Hotels for You</h2>
        <div className="hotels-container">
          {topHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/${hotel.image}`}
                alt={hotel.name}
                className="hotel-image"
              />
              <div className="hotel-info">
                <div className="hotel-rating">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <span className="rating-value">{hotel.rating}</span>
                  <span className="review-count">({hotel.reviews} reviews)</span>
                </div>
                <h3 className="hotel-name">{hotel.name}</h3>
                <div className="hotel-details">
                  <div className="price-section">
                    <FontAwesomeIcon icon={faRupeeSign} className="rupee-icon" />
                    <span className="price">{hotel.price}</span>
                    <span className="per-night">/room/night</span>
                  </div>
                  <div className="rooms-section">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <span className="guests">{hotel.guests} guest</span>
                  </div>
                </div>
                <div className="hotel-location">
                  <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                  <span className="location">{hotel.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="property-types-section">
        <h2 className="section-title">Find Stay by Property Type In</h2>
        <div className="property-type-controls">
          <label htmlFor="locationSelect" className="location-label">
            Location:
          </label>
          <select id="locationSelect"value={selectedLocation}onChange={handleLocationChange}className="location-dropdown" >
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="property-types-container">
          {propertyTypes.map((property) => (
            <div key={property.id} className="property-type-card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/${property.image}`}
                alt={property.type}
                className="property-type-image"
              />
              <div className="property-type-label">{property.type}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="search-by-location-section">
        <h2 className="section-title">Search By Best Location</h2>
        <div className="location-row">
          <div className="location-card">
            <img src={`${process.env.PUBLIC_URL}/assets/hotelIndia.png`} alt="Hotel India" className="location-image" />
            <div className="location-overlay">
              <span className="location-text">India</span>
            </div>
          </div>
          <div className="location-card">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hotelAmerica.png`}
              alt="Hotel America"
              className="location-image"
            />
            <div className="location-overlay">
              <span className="location-text">America</span>
            </div>
          </div>
          <div className="location-card">
            <img src={`${process.env.PUBLIC_URL}/assets/hotelDubai.png`} alt="Hotel Dubai" className="location-image" />
            <div className="location-overlay">
              <span className="location-text">Dubai</span>
            </div>
          </div>
        </div>
        <div className="location-row1">
          <div className="location-card1">
            <img src={`${process.env.PUBLIC_URL}/assets/hotelLondon.png`} alt="Hotel London" className="location-image1" />
            <div className="location-overlay">
              <span className="location-text">London</span>
            </div>
          </div>
          <div className="location-card1">
            <img src={`${process.env.PUBLIC_URL}/assets/hotelEgypt.png`}alt="Hotel Egypt"className="location-image1"/>
            <div className="location-overlay">
              <span className="location-text">Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
