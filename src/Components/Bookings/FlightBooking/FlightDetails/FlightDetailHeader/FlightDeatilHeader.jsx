import React, { useState } from 'react';
import './FlightDetailHeader.css';
import { useNavigate } from 'react-router-dom';

const FlightDetailHeader = ({ fromStation, toStation, selectedDate }) => {
  const navigate = useNavigate();

  const handleUpdateSearch = () => {
    navigate('/', { replace: true });
  };
  const [tripType, setTripType] = useState('one-way');

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div className="flight-detail-header">
      <div className="trip-type">
        <label>
          <input  type="radio" value="one-way" 
            checked={tripType === 'one-way'} onChange={handleTripTypeChange}
          />
          One Way Trip
        </label>
        <label>
          <input type="radio" value="two-way" 
            checked={tripType === 'two-way'} onChange={handleTripTypeChange}
          />
          Two Way Trip
        </label>
      </div>
      <div className="search-fields">
        <div className="field-group">
          <label>From</label>
          <div className="station-input">
          <p>{fromStation}</p>
        </div>
        </div>
        <div className="field-group">
          <label>To</label>
          <div className="station-input">
          <p>{toStation}</p>
        </div>
        </div>
        <div className="field-group">
          <label>Departure Date</label>
          <div className="station-input">
          <p>{selectedDate}</p>
        </div>
        </div>
        <div className="field-group">
          <label>Return Date</label>
          <input  type="date" placeholder="Return Date" disabled={tripType === 'one-way'} />
        </div>
        <div className="field-group">
          <label>Passengers & Class</label>
          <input type="text" placeholder="Passengers & Class" />
        </div>
        <button className="update-search-button" onClick={handleUpdateSearch}>Update Search</button>
      </div>
    </div>
  );
};

export default FlightDetailHeader;
