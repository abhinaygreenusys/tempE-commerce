import React, { useState, useEffect } from 'react';
import './FlightDetails.css';
import FlightDetailHeader from './FlightDetailHeader/FlightDeatilHeader';
import FlightDetailSidebar from './FlightDetailSidebar/FlightDetailSidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const FlightDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, journeyDate } = location.state || {};

  const [showFareDetails, setShowFareDetails] = useState(false);

  useEffect(() => {
    if (!from || !to || !journeyDate) {
      navigate('/', { replace: true });
    }
  }, [from, to, journeyDate, navigate]);

  const generateDateRange = (startDate, numberOfDays) => {
    const dates = [];
    const currentDate = new Date(startDate);
    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
        }),
      });
    }
    return dates;
  };

  const selectedDate = journeyDate || new Date().toISOString().split('T')[0];
  const dateRange = generateDateRange(selectedDate, 6);

  return (
    <div className="flightDashboard">
      <FlightDetailHeader />
      <div className="flightDashboard-body">
        <FlightDetailSidebar />
        <div className="flightDetails-content">
          <div className="flight-date-fare-container">
            <div className="flight-date-fare-rectangle">
              {dateRange.map((date, index) => (
                <div key={index} className="flight-date-fare-point">
                  <span className="flight-date-display">{date.display}</span>
                  <span className="flight-date-price">$123</span> {/* Example fare, replace with real data */}
                </div>
              ))}
              <div className="connecting-line"></div>
            </div>
          </div>
          <div className="sort-by">
            <span>Sort by</span>
          </div>
          <div className="flight-info-container">
            <div className="flight-info-rectangle">
              <div className="flight-info-section">
                <span>Departure <br />Departure @ 13:45</span>
              </div>
              <div className="vertical-line"></div>
              <div className="flight-info-section">
                <span>Duration <br />Fastest @ 1hr 35min</span>
              </div>
              <div className="vertical-line"></div>
              <div className="flight-info-section">
                <span>Arrival <br />Today @ 17:54</span>
              </div>
              <div className="vertical-line"></div>
              <div className="flight-info-section">
                <span>Price <br />Cheapest @ $5134</span>
              </div>
              <div className="vertical-line"></div>
              <div className="flight-info-section">
                <span>Best <br />2 hrs 10 min, 0 stop</span>
              </div>
            </div>
          </div>
          <div className="flight-status-container">
            <div className={`flight-status-rectangle ${showFareDetails ? 'expanded' : ''}`}>
              <div className="flight-name">
                <span>Air India</span>
              </div>
              <div className="flight-route">
                <span className="route-start">PAT, Patna</span>
                <span className="route-middle">DEL, Delhi</span>
              </div>
              <div className="flight-timing">
                <span className="time-start">10:00 AM</span>
                <span className="duration">2 hrs</span>
                <span className="time-end">12:00 PM</span>
                <span className="price">$189</span>
                <button className="view-fare-button" onClick={() => setShowFareDetails(!showFareDetails)}>
                  {showFareDetails ? 'Hide Fare' : 'View Fare'}
                </button>
              </div>
              {showFareDetails && (
                <div className="fare-details">
                  <div className="baggage-info">
                    <div className="check-in-baggage">Check-in baggage: 15 kg</div>
                    <div className="cabin-baggage">Cabin baggage: 7 kg</div>
                  </div>
                  <div className="book-now-container">
                  <button className="book-now-button" onClick={() => navigate('/passenger-details', {
                      state: {
                        from,
                        to,
                        journeyDate,
                        flightDetails: {
                          name: 'Air India',
                          flightNumber: 'AI-202',
                          aircraft: 'Airbus320',
                          classType: 'Economy | Saver',
                          departureTime: '10:00 AM',
                          arrivalTime: '12:00 PM',
                          duration: '2 hrs',
                          price: '$189',
                          checkInBaggage: '15 kg',
                          cabinBaggage: '7 kg'
                        }
                      }
                    })}>Book Now</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
