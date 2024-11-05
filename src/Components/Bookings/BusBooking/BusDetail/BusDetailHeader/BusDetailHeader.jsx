import React from 'react';
// import './TrainDetailHeader.css';
import { useNavigate } from 'react-router-dom';

const BusDetailHeader = ({ fromStation, toStation, selectedDate }) => {
  const navigate = useNavigate();

  const handleUpdateSearch = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="train-detail-header">
      <div className="station-field">
        <label className="station-label">FROM</label>
        <div className="station-input">
          <p>{fromStation}</p>
        </div>
      </div>
      <div className="station-field">
        <label className="station-label">TO</label>
        <div className="station-input">
          <p>{toStation}</p>
        </div>
      </div>
      <div className="date-section">
        <label className="date-label">DATE</label>
        <div className="date-display">
          <p>{selectedDate}</p>
        </div>
      </div>
      <button  className="update-search-button" onClick={handleUpdateSearch}>
        UPDATE SEARCH
      </button>
    </div>
  );
};

export default BusDetailHeader;
