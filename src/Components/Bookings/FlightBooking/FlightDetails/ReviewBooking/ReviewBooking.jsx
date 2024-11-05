import React from 'react';
import './ReviewBooking.css';

const ReviewBooking = () => {
  return (
    <div className="flight-book-now-container">
      <div className="flight-details">
        <h2> Review Your Journer</h2>
      </div>
      <div className="flight-journey-details">
        <div className="flight-journey-row">
          <div className="flight-journey-title">
            <div className="flight-left">Boarding from</div>
            <div className="flight-right"><div>Arrival Time: 5:00 PM</div>
            <div>Day and Date: 10 Oct 2024</div></div>
          </div>
          <div className="flight-journey-info">
            <div className="flight-left">
                Destination To
            </div>
            <div className="flight-right">
              <div>Arrival Time: 5:00 PM</div>
              <div>Day and Date: 10 Oct 2024</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flight-irctc-details">
        <div className="flight-irctc-title">Cancellation and Date Change policy</div>
      </div>
      <div className="flight-passenger-details">
        <div className="flight-passenger-title">
          <div className="flight-left">Passenger Details</div>
          <button className="flight-add-passenger-btn">Add Passenger</button>
        </div>
        <div className="add-more-passenger">Add more passenger details</div>
      </div>
      <div className="flight-booking-details">
        <div className="flight-booking-title">Your booking details will be sent to</div>
        <div className="flight-booking-info">
          <input type="text"placeholder="Contact Number"className="flight-contact-input"/>
          <input type="email"placeholder="Email ID"className="flight-email-input"/>
        </div>
      </div>
      <div className="flight-base-fare">
        <div className="flight-fare-row">
          <div className="flight-fare-title">Base Fare</div>
          <div className="flight-fare-amount"></div>
        </div>
      </div>
      <div className="train-proceed-payment">
        <button className="train-proceed-btn">
          Proceed to Payment
        </button>
        <p className="train-terms-text">
          By proceeding to payment, I confirm that I agree to the <a href="/cancellation-policy" className="terms-link">Cancellation Policy</a> and <a href="/terms-of-service" className="terms-link">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
};
export default ReviewBooking;
