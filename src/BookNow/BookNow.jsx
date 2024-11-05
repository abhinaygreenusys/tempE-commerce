import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookNow.css';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trainName, trainNumber, classType, quota, availableSeats } = location.state.trainDetails;

  const [showModal, setShowModal] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(null);
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('India');
  const [berthPreference, setBerthPreference] = useState('no-preference');
  const [contactNumber, setContactNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [additionalPreferences, setAdditionalPreferences] = useState({
    autoUpgradation: false,
    confirmTicket: false,
    travelInsurance: false,
  });

  const baseFarePerPassenger = 500;
  const totalFare = passengerDetails.length * baseFarePerPassenger;

  const resetForm = () => {
    setFullName('');
    setAge('');
    setGender('');
    setNationality('India');
    setBerthPreference('no-preference');
    setIsEditing(false);
    setCurrentPassengerIndex(null);
  };

  const handleAddOrEditPassenger = () => {
    const newPassenger = {
      fullName,
      age,
      gender,
      nationality,
      berthPreference,
    };
    if (isEditing && currentPassengerIndex !== null) {
      const updatedPassengers = [...passengerDetails];
      updatedPassengers[currentPassengerIndex] = newPassenger;
      setPassengerDetails(updatedPassengers);
    } else {
      setPassengerDetails([...passengerDetails, newPassenger]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEditPassenger = (index) => {
    const passenger = passengerDetails[index];
    setFullName(passenger.fullName);
    setAge(passenger.age);
    setGender(passenger.gender);
    setNationality(passenger.nationality);
    setBerthPreference(passenger.berthPreference);
    setIsEditing(true);
    setCurrentPassengerIndex(index);
    setShowModal(true);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setAdditionalPreferences({
      ...additionalPreferences,
      [name]: checked,
    });
  };

  return (
    <div className="train-book-now-container">
      <div className="train-details">
        <div className="train-detail-row"> {trainNumber} {trainName}</div>
        <div className="train-detail-row">{classType} {quota} {availableSeats}</div>
      </div>
      <div className="train-journey-details">
        <div className="train-journey-row">
          <div className="train-journey-title">
            <div className="train-left">Boarding from</div>
            <div className="train-right">Destination to</div>
          </div>
          <div className="train-journey-info">
            <div className="train-left">
              <div>Boarding Time: 10:00 AM</div>
              <div>Day and Date: 10 Oct 2024</div>
            </div>
            <div className="train-right">
              <div>Arrival Time: 5:00 PM</div>
              <div>Day and Date: 10 Oct 2024</div>
            </div>
          </div>
        </div>
      </div>
      <div className="train-irctc-details">
        <div className="train-irctc-title">Your IRCTC ID</div>
        <div className="train-irctc-info">
          <p>IRCTC ID is mandatory to complete a booking. Your password will be required after payment.</p>
          <input type="text" placeholder="IRCTC User Name" className="train-irctc-input" />
          <button className="train-validate-save-btn">Validate and Save</button>
          <p>Don’t have an IRCTC account? <a href="/create-irctc-id" className="create-irctc-id">Create IRCTC ID</a></p>
        </div>
      </div>
      <div className="train-passenger-details">
        <div className="train-passenger-title">
          <div className="train-left">Passenger Details</div>
          <button className="train-add-passenger-btn" onClick={() => setShowModal(true)}>Add Passenger</button>
        </div>
        {passengerDetails.map((passenger, index) => (
          <div className="train-passenger-info" key={index}>
            <div>
              {passenger.fullName} ({passenger.age} years) - {passenger.gender}, {passenger.nationality}, {passenger.berthPreference.replace(/-/g, ' ')}
            </div>
            <button className="train-edit-passenger-btn" onClick={() => handleEditPassenger(index)}>Edit</button>
          </div>
        ))}
        <div className="add-more-passenger" onClick={() => setShowModal(true)}>Add more passenger details</div>
      </div>

      {/* Booking Details */}
      <div className="train-booking-details">
        <div className="train-booking-title">Your booking details will be sent to</div>
        <div className="train-booking-info">
          <input
            type="text"
            placeholder="Contact Number"
            className="train-contact-input"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="train-email-input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
      </div>

      {/* Additional Preferences (Optional) */}
      <div className="train-additional-preferences">
        <div className="train-preferences-title">Additional Preference (Optional)</div>
        <div className="train-preferences-options">
          <label className="train-preference-option">
            <input
              type="checkbox"
              name="autoUpgradation"
              checked={additionalPreferences.autoUpgradation}
              onChange={handlePreferenceChange}
            />
            Consider for auto upgradation
          </label>
          <label className="train-preference-option">
            <input
              type="checkbox"
              name="confirmTicket"
              checked={additionalPreferences.confirmTicket}
              onChange={handlePreferenceChange}
            />
            Book confirm ticket
          </label>
          <label className="preference-option">
            <input
              type="checkbox"
              name="travelInsurance"
              checked={additionalPreferences.travelInsurance}
              onChange={handlePreferenceChange}
            />
            Do you want to take Travel Insurance (₹0.45/person)?
          </label>
        </div>
      </div>

      {/* Base Fare */}
      <div className="train-base-fare">
        <div className="train-fare-row">
          <div className="train-fare-title">Base Fare</div>
          <div className="train-fare-amount">₹{totalFare}</div>
        </div>
      </div>
      <div className="train-proceed-payment">
        <button className="train-proceed-btn"disabled={passengerDetails.length === 0 || !contactNumber || !emailId}>
          Proceed to Payment
        </button>
        <p className="train-terms-text">
          By proceeding to payment, I confirm that I agree to the <a href="/cancellation-policy" className="terms-link">Cancellation Policy</a> and <a href="/terms-of-service" className="terms-link">Terms of Service</a>.
        </p>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditing ? 'Edit Passenger' : 'Add Passenger'}</h2>
            <div className="modal-body">
              <div className="input-group">
                <label>Full Name (as per govt ID)</label>
                <input
                  type="text"
                  className="full-name-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  className="age-input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={gender === 'Other'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Other
                  </label>
                </div>
              </div>
              <div className="input-group">
                <label>Nationality</label>
                <input
                  type="text"
                  className="nationality-input"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Berth Preference</label>
                <select
                  className="berth-preference-select"
                  value={berthPreference}
                  onChange={(e) => setBerthPreference(e.target.value)}
                >
                  <option value="no-preference">No Preference</option>
                  <option value="upper-berth">Upper Berth</option>
                  <option value="lower-berth">Lower Berth</option>
                  <option value="middle-berth">Middle Berth</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="modal-save-btn" onClick={handleAddOrEditPassenger}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
