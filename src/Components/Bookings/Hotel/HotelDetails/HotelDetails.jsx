import React, { useState, useEffect } from 'react';
import './HotelDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import HotelDetailHeader from './HotelDetailHeader/HotelDetailHeader';
import HotelDetailSidebar from './HotelDetailSidebar/HotelDetailSidebar';

const HotelDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    whereTo,
    checkInDate,
    checkOutDate,
    rooms,
    adults,
    children,
  } = location.state || {};

  React.useEffect(() => {
    if (!whereTo) {
      navigate('/', { replace: true });
    }
  }, [whereTo, navigate]);
  const trainDetails = location.state?.trainDetails;

  const generateDateRange = (startDate, numberOfDays) => {
    const dates = [];
    const currentDate = new Date(startDate);
    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
        }),
      });
    }
    return dates;
  };

  const selectedDate = checkInDate || new Date().toISOString().split('T')[0];
  const dateRange = generateDateRange(selectedDate, 6);
  const formattedSelectedDate = new Date(selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });

  return (
    <div className="dashboard">
      <HotelDetailHeader place={whereTo} checkInDate={checkInDate}
        checkOutDate={checkOutDate}guests={{ adults, children }}rooms={rooms}
      />
      <div className="dashboard-body">
        <HotelDetailSidebar />
        <div className="main-content">
          <div className="dates-section">
            {dateRange.map((item, index) => (
              <div key={index} className="date-rectangle">
                {item.display}
                {index < dateRange.length - 1 && <div className="divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelDetails;
