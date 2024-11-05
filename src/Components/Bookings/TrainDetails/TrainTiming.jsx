import React from 'react';
import './TrainDetails.css';

const TrainTiming = ({ departureTime, duration, arrivalTime }) => {
  return (
    <div className="train-timing">
      <div className="departure-time">
        <span>Departure:</span>
        <span>{departureTime}</span>
      </div>
      <div className="journey-duration">
        <span>Duration:</span>
        <span>{duration}</span>
      </div>
      <div className="arrival-time">
        <span>Arrival:</span>
        <span>{arrivalTime}</span>
      </div>
    </div>
  );
}
export default TrainTiming;
