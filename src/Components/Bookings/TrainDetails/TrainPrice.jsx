import React from 'react';
import './TrainDetails.css';

const generateDates = (startDate, numberOfDays) => {
  const dates = [];
  const currentDate = new Date(startDate);
  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};
const dateRange = generateDates('2024-11-08', 6);
const mockPricingData = {
  '1A': {
    '2024-11-08': { price: '$200', available: 5, waitlist: 0 },
    '2024-11-09': { price: '$200', available: 3, waitlist: 2 },
    '2024-11-10': { price: '$200', available: 0, waitlist: 5 },
    '2024-11-11': { price: '$200', available: 4, waitlist: 1 },
    '2024-11-12': { price: '$200', available: 2, waitlist: 3 },
    '2024-11-13': { price: '$200', available: 1, waitlist: 4 },
  },
  '2A': {
    '2024-11-08': { price: '$120', available: 10, waitlist: 3 },
    '2024-11-09': { price: '$120', available: 8, waitlist: 1 },
    '2024-11-10': { price: '$120', available: 5, waitlist: 4 },
    '2024-11-11': { price: '$120', available: 7, waitlist: 2 },
    '2024-11-12': { price: '$120', available: 6, waitlist: 3 },
    '2024-11-13': { price: '$120', available: 4, waitlist: 5 },
  },
  '3A': {
    '2024-11-08': { price: '$80', available: 20, waitlist: 5 },
    '2024-11-09': { price: '$80', available: 15, waitlist: 2 },
    '2024-11-10': { price: '$80', available: 12, waitlist: 3 },
    '2024-11-11': { price: '$80', available: 18, waitlist: 1 },
    '2024-11-12': { price: '$80', available: 10, waitlist: 4 },
    '2024-11-13': { price: '$80', available: 8, waitlist: 6 },
  },
  'SL': {
    '2024-11-08': { price: '$50', available: 50, waitlist: 10 },
    '2024-11-09': { price: '$50', available: 45, waitlist: 8 },
    '2024-11-10': { price: '$50', available: 40, waitlist: 5 },
    '2024-11-11': { price: '$50', available: 35, waitlist: 7 },
    '2024-11-12': { price: '$50', available: 30, waitlist: 6 },
    '2024-11-13': { price: '$50', available: 25, waitlist: 4 },
  },
};

const TrainPriceOption = ({ className, pricingInfo }) => {
  const { price, available, waitlist } = pricingInfo;
  const getBackgroundColor = () => {
    if (waitlist > 0) return 'red';
    if (available > 0) return 'green';
    return 'white';
  };

  return (
    <div className="price-option-rectangle" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="price-header">
        <span className="class-name">{className}</span>
        <span className="ticket-price">{price}</span>
      </div>
      <div className="price-details">
        <div className="availability">
          <span className="availability-label">Available:</span>
          <span className="availability-status">{available}</span>
        </div>
        {waitlist !== 'N/A' && (
          <div className="waitlist">
            <span className="waitlist-label">Waitlist:</span>
            <span className="waitlist-status">{waitlist}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const TrainPrice = ({ selectedDate }) => {
  const classes = ['SL', '3A', '2A', '1A'];
  
  const getPricingInfo = (cls, date) => {
    if (mockPricingData[cls] && mockPricingData[cls][date]) {
      return mockPricingData[cls][date];
    }
    return { price: 'N/A', available: 'N/A', waitlist: 'N/A' };
  };

  return (
    <div className="train-price-section">
      {classes.map((cls) => (
        <TrainPriceOption 
          key={cls} 
          className={cls} 
          pricingInfo={getPricingInfo(cls, selectedDate)} 
        />
      ))}
    </div>
  );
};

export default TrainPrice;
