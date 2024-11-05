import React, { useState } from 'react';
import './TrainDetails.css';

const ClassButtonGroup = ({ onClassChange }) => {
  const [selectedClass, setSelectedClass] = useState('3A');

  const classes = ['3A', '2A', '1A', 'SL'];

  const handleClassClick = (cls) => {
    setSelectedClass(cls);
    if (onClassChange) {
      onClassChange(cls);
    }
  };

  return (
    <div className="class-button-group">
      {classes.map((cls) => (
        <button key={cls} className={`class-button ${selectedClass === cls ? 'active' : ''}`}
          onClick={() => handleClassClick(cls)}>
          {cls}
        </button>
      ))}
    </div>
  );
};

export default ClassButtonGroup;
