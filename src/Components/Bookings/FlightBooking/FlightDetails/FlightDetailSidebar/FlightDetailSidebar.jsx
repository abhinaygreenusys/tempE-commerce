import React, { useState } from 'react';
import './FlightDetailSidebar.css';

const FlightDetailSidebar = () => {
  const [quickflightFilters, setQuickflightFilters] = useState({
    showHideMultiple: false,
  });
  const [classflightFilters, setClassflightFilters] = useState({
    economy: false,
    business: false,
  });
  const [departureflightFilters, setDepartureflightFilters] = useState({
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
  });
  const [stopflightFilters, setStopflightFilters] = useState({
    noneStop: false,
    oneStop: false,
    twoStop: false,
});
const [prefferAirlineFilters, setPrefferAirlineFilters] = useState({
  airIndia: false,
  indigo: false,
  spicejet: false,
  otherAirline: false
});
  const handleQuickflightFilterChange = (e) => {
    const { name, checked } = e.target;
    setQuickflightFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleClassflightFilterChange = (e) => {
    const { name, checked } = e.target;
    setClassflightFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleDepartureflightFilterChange = (e) => {
    const { name, checked } = e.target;
    setDepartureflightFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleStopflightFilterChange = (e) => {
    const { name, checked } = e.target;
    setStopflightFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handlePrefferAirlineFilterChange = (e) => {
    const { name, checked } = e.target;
    setPrefferAirlineFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const clearQuickflightFilters = () => {
    setQuickflightFilters({
      showHideMultiple: false,
    });
  };
  const clearClassflightFilters = () => {
    setClassflightFilters({
        economy: false,
        business: false,
    });
  };
  const clearFlightDepartureFilters = () => {
    setDepartureflightFilters({
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
    });
  };
  const clearStopFilters = () => {
    setStopflightFilters({
        noneStop: false,
        oneStop: false,
        twoStop: false,
    });
  };
  const clearPrefferAirlineFilters = () => {
    setPrefferAirlineFilters({
        airIndia: false,
        indigo: false,
        spicejet: false,
        otherAirline: false,
    });
  };

  return (
    <aside className="flightSidebar">
      <h3 className="flightFilter-title">FILTER BY</h3>
      <hr className="separator" />
      <div className="flightFilter-section">
        <div className="flightFilter-header">
          <span className="flightFilter-header-title">Flight Filters</span>
          <span className="clear-all" onClick={clearQuickflightFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="flightFilters-options">
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="showAvailableOnly"
              checked={quickflightFilters.showHideMultiple}
              onChange={handleQuickflightFilterChange}
            />
            Show Hide Multiple Check-In
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="flightFilter-section">
        <div className="flightFilter-header">
          <span className="flightFilter-header-title">Departure Time</span>
          <span className="clear-all" onClick={clearFlightDepartureFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="flightFilter-options">
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="morning"
              checked={departureflightFilters.morning}
              onChange={handleDepartureflightFilterChange}
            />
            Morning- 6AM to 12 noon
          </label>
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={departureflightFilters.afternoon}
              onChange={handleDepartureflightFilterChange}
            />
            Afternoon-12 noon to 6PM
          </label>
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="evening"
              checked={departureflightFilters.evening}
              onChange={handleDepartureflightFilterChange}
            />
            Evening- 6 PM to 12AM
          </label>
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={departureflightFilters.night}
              onChange={handleDepartureflightFilterChange}
            />
            Night- 12AM to 6Am
          </label>
        </div>
      </div> 
      <hr className="separator" />
      <div className="flightFilter-section">
        <div className="flightFilter-header">
          <span className="flightFilter-header-title">Class</span>
          <span className="clear-all" onClick={clearClassflightFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="flightFilters-options">
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="threeTier"
              checked={classflightFilters.economy}
              onChange={handleClassflightFilterChange}
            />
            Economy Class
          </label>
          <label className="flightFilter-item">
            <input
              type="checkbox"
              name="twoTier"
              checked={classflightFilters.business}
              onChange={handleClassflightFilterChange}
            />
            Business Class
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="flightFilter-section">
        <div className="flightFilter-header">
          <span className="flightFilter-header-title">Stops</span>
          <span className="clear-all" onClick={clearStopFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="morning"
              checked={stopflightFilters.noneStop}
              onChange={handleStopflightFilterChange}
            />
            Non Stop
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={stopflightFilters.oneStop}
              onChange={handleStopflightFilterChange}
            />
            One Stop
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="evening"
              checked={stopflightFilters.twoStop}
              onChange={handleStopflightFilterChange}
            />
            2 or More than 2 Stop
          </label>
        </div>
      </div>
      <div className="flightFilter-section">
        <div className="flightFilter-header">
          <span className="flightFilter-header-title">Preferred Airline</span>
          <span className="clear-all" onClick={clearPrefferAirlineFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="airIndia"
              checked={prefferAirlineFilters.airIndia}
              onChange={handlePrefferAirlineFilterChange}
            />
            Air India
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="indigo"
              checked={prefferAirlineFilters.indigo}
              onChange={handleStopflightFilterChange}
            />
            Indigo
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="spicejet"
              checked={prefferAirlineFilters.spicejet}
              onChange={handleStopflightFilterChange}
            />
            Spicejet
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="otherAirline"
              checked={prefferAirlineFilters.otherAirline}
              onChange={handleStopflightFilterChange}
            />
            Other Airlines
          </label>
        </div>
      </div>
    </aside>
  );
};
export default FlightDetailSidebar;
