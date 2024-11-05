// HotelDetailHeader.js
import React from 'react';
import './HotelDetailHeader.css'; // Ensure this CSS file exists and is correctly styled
import { useNavigate } from 'react-router-dom';

const HotelDetailHeader = ({ place, checkInDate, checkOutDate, guests, rooms }) => {
  const navigate = useNavigate();

  const handleUpdateSearch = () => {
    navigate('/', { replace: true });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' };
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString(undefined, options);
  };

  return (
    <div className="hotel-detail-header">
      <div className="detail-field">
        <label className="detail-label">Where To</label>
        <div className="detail-input">
          <p>{place}</p>
        </div>
      </div>
      <div className="detail-field">
        <label className="detail-label">Check-In Date</label>
        <div className="detail-display">
          <p>{formatDate(checkInDate)}</p>
        </div>
      </div>
      <div className="detail-field">
        <label className="detail-label">Check-Out Date</label>
        <div className="detail-display">
          <p>{formatDate(checkOutDate)}</p>
        </div>
      </div>
      <div className="detail-field">
        <label className="detail-label">Guests & Rooms</label>
        <div className="detail-display">
          <p>{`${guests.adults} Adults, ${guests.children} Children, ${rooms} Room(s)`}</p>
        </div>
      </div>
      <button className="update-search-button" onClick={handleUpdateSearch}>
        UPDATE SEARCH
      </button>
    </div>
  );
};

export default HotelDetailHeader;
