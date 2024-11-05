import React, { useState, useEffect } from 'react';
import './BusDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import BusDetailHeader from './BusDetailHeader/BusDetailHeader';
import BusDetailSidebar from './BusDetailSidebar/BusDetailSidebar';

const BusDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, journeyDate } = location.state || {};

  useEffect(() => {
    if (!from || !to || !journeyDate) {
      navigate('/', { replace: true });
    }
  }, [from, to, journeyDate, navigate]);
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

  const selectedDate = journeyDate || new Date().toISOString().split('T')[0];
  const dateRange = generateDateRange(selectedDate, 6);
  const formattedSelectedDate = new Date(selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });

  return (
    <div className="dashboard">
      <BusDetailHeader
        fromStation={from || 'PNBE, Patna Jn'} 
        toStation={to || 'NDLS, New Delhi'} 
        selectedDate={formattedSelectedDate} 
      />
      <div className="dashboard-body">
        <BusDetailSidebar />
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
export default BusDetail;
