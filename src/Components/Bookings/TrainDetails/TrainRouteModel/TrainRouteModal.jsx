// src/components/TrainRouteModel/TrainRouteModal.js
import React from 'react';
import './TrainRouteModal.css';
import { useLocation } from 'react-router-dom';

const TrainRouteModal = ({ onClose }) => {
  const location = useLocation();
  const { from, to } = location.state || {};
  const mockRoute = {
    'PNBE, Patna Jn': ['Gaya', 'Mughalsarai', 'Varanasi', 'Allahabad', 'Kanpur', 'New Delhi'],
    'NDLS, New Delhi': ['Kanpur', 'Allahabad', 'Varanasi', 'Mughalsarai', 'Gaya', 'Patna Jn'],
  };

  const routeFrom = mockRoute[from] || ['Intermediate Station 1', 'Intermediate Station 2'];
  const routeTo = mockRoute[to] || ['Intermediate Station A', 'Intermediate Station B'];
  const fullRoute = from 
    ? [from, ...routeFrom, to] 
    : [to, ...routeTo, from];

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Train Route</h2>
        <ul className="station-list">
          {fullRoute.map((station, index) => (
            <li key={index}>
              {station}{index < fullRoute.length - 1 ? ' → ' : ''}
            </li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TrainRouteModal;
