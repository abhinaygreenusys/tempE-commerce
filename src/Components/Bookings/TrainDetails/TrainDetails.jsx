import React, { useState, useEffect } from 'react';
import './TrainDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import TrainDeatilSidebar from './TrainDeatilSidebar';
import TrainDetailHeader from './TrainDetailHeader';
import TrainInfo from './TrainInfo';
import TrainTiming from './TrainTiming';
import TrainPrice from './TrainPrice';
import TrainRouteModal from './TrainRouteModel/TrainRouteModal';
import AvailabilitySection from './AvailabilitySection';

const TrainDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, classType, quota, journeyDate } = location.state || {};

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

  const handleViewRouteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard">
      <TrainDetailHeader 
        fromStation={from || 'PNBE, Patna Jn'} 
        toStation={to || 'NDLS, New Delhi'} 
        selectedDate={formattedSelectedDate} 
      />
      <div className="dashboard-body">
        <TrainDeatilSidebar />
        <div className="main-content">
          <div className="dates-section">
            {dateRange.map((item, index) => (
              <div key={index} className="date-rectangle">
                {item.display}
                {index < dateRange.length - 1 && <div className="divider"></div>}
              </div>
            ))}
          </div>
          <div className="train-details-section">
            <div className="train-detail-rectangle">
              <TrainInfo
                trainName={trainDetails?.trainName || "Express Train"}
                trainNumber={trainDetails?.trainNumber || "12345"}
                onViewRouteClick={handleViewRouteClick}
                operatingDays="M, W, F"
              />
              <TrainTiming
                departureTime="08:00 AM"
                duration="5h 30m"
                arrivalTime="01:30 PM"
              />
              <TrainPrice selectedDate={selectedDate} dateRange={dateRange} />
              <AvailabilitySection selectedDate={selectedDate} dateRange={dateRange} />
              {trainDetails && (
                <div className="booking-summary">
                  <h3>Booking Summary</h3>
                  <p>Class Type: {trainDetails.classType}</p>
                  <p>Available Seats: {trainDetails.availableSeats}</p>
                  <p>Price: {trainDetails.price}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && <TrainRouteModal onClose={handleCloseModal} />}
    </div>
  );
}
export default TrainDetails;
