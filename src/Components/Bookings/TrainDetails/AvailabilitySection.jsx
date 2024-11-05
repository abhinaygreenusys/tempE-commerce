import React, { useState } from 'react';
import './TrainDetails.css';
import { useNavigate } from 'react-router-dom';

const AvailabilitySection = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('3A');

  const availabilityData = {
    '3A': [
      {
        day: 'Monday',
        date: 'Oct 8',
        available: 'Available: 20',
        probability: 'Probability: 80%',
        price: '$80',
      },
    ],
    '2A': [
      {
        day: 'Monday',
        date: 'Oct 8',
        available: 'Available: 10',
        probability: 'Probability: 75%',
        price: '$120',
      },
    ],
    '1A': [
      {
        day: 'Monday',
        date: 'Oct 8',
        available: 'Sold Out',
        probability: 'Probability: 0%',
        price: '$200',
      },
    ],
    'SL': [
      {
        day: 'Monday',
        date: 'Oct 8',
        available: 'Available: 50',
        probability: 'Probability: 90%',
        price: '$50',
      },
    ],
  };

  const rows = availabilityData[selectedClass] || [];

  const toggleAvailability = () => {
    setIsOpen(!isOpen);
  };

  const handleClassChange = (cls) => {
    setSelectedClass(cls);
  };

  const handleBookNow = (data) => {
    navigate('/book-now', {
      state: {
        trainDetails: {
          trainName: "Express Train",
          trainNumber: "12345",
          classType: selectedClass,
          quota: 'General',
          avail: data.available
        }
      }
    });
  };
  

  return (
    <div className="availability-section">
      <div className="view-availability" onClick={toggleAvailability}>
        View 6 Days Availability
      </div>
      {isOpen && (
        <div className="availability-content">
          <div className="class-button-group">
            {['3A', '2A', '1A', 'SL'].map((cls) => (
              <button
                key={cls}
                className={`class-button ${selectedClass === cls ? 'active' : ''}`}
                onClick={() => handleClassChange(cls)}
              >
                {cls}
              </button>
            ))}
          </div>
          <div className="availability-rows">
            {rows.map((data, index) => (
              <div key={index} className="availability-row">
                <div className="row-day-date">
                  <span className="day">{data.day}</span>
                  <span className="date">{data.date}</span>
                </div>
                <div className="row-availability">{data.available}</div>
                <div className="row-probability">{data.probability}</div>
                <div className="row-price">{data.price}</div>
                <div className="row-book-now" onClick={() => handleBookNow(data)}>
                  Book Now
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilitySection;
