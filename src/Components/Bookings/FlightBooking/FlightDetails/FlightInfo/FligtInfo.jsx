import React from 'react';
import './FlightDetails.css';

const FlightInfo = ({ trainName, trainNumber, onViewRouteClick, operatingDays }) => {
  return (
    <div className="train-info">
      <div className="train-name-number">
        <span className="train-name">{trainName}</span>
        <span className="train-number">#{trainNumber}</span>
      </div>
      <div className="train-actions">
        <button className="view-route-button" onClick={onViewRouteClick}>View Route</button>
        <span className="train-days">{operatingDays}</span>
      </div>
    </div>
  );
}

export default FlightInfo;