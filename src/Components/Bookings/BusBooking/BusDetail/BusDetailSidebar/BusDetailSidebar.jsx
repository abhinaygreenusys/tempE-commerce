import React, { useState } from 'react';
// import './TrainDetailSidebar.css';

const BusDetailSidebar = () => {
  const [quickFilters, setQuickFilters] = useState({
    showAvailableOnly: false,
    showACOnly: false,
  });
  const [busTypeFilters, setBusTypeFilters] = useState({
    ac: false,
    nonAc: false,
    sleeper: false,
    seater: false,
  });
  const [seaterFilters, setSeaterFilters] = useState({
    single: false,
    double: false,
  });
  const [seaterDepartureFilters, setSeaterDepartureFilters] = useState({
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
  });
  const handleQuickFilterChange = (e) => {
    const { name, checked } = e.target;
    setQuickFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleBusTypeFilterChange = (e) => {
    const { name, checked } = e.target;
    setBusTypeFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleSeaterFilterChange = (e) => {
    const { name, checked } = e.target;
    setSeaterFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleSeaterDepartureFilterChange = (e) => {
    const { name, checked } = e.target;
    setSeaterDepartureFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const clearQuickFilters = () => {
    setQuickFilters({
      showAvailableOnly: false,
      showACOnly: false,
    });
  };
  const clearBusTypeFilters = () => {
    setBusTypeFilters({
      ac: false,
      nonAc: false,
      sleeper: false,
      seater: false,
    });
  };
  const clearSeaterFilters = () => {
    setSeaterFilters({
      single: false,
      double: false,
    });
  };
  const clearSeaterDepartureFilters = () => {
    setSeaterDepartureFilters({
        morning: false,
        afternoon: false,
        evening: false,
        night:false
    });
  };

  return (
    <aside className="sidebar">
      <h3 className="filter-title">FILTER BY</h3>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Quick Filters</span>
          <span className="clear-all" onClick={clearQuickFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input type="checkbox"name="showAvailableOnly"
              checked={quickFilters.showAvailableOnly}onChange={handleQuickFilterChange}
            />
            Show available only
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="showACOnly"
              checked={quickFilters.showACOnly}
              onChange={handleQuickFilterChange}
            />
            Show AC only
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Bus Type</span>
          <span className="clear-all" onClick={clearBusTypeFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="ac"
              checked={busTypeFilters.ac}
              onChange={handleBusTypeFilterChange}
            />
            AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="ladies"
              checked={busTypeFilters.nonAc}
              onChange={handleBusTypeFilterChange}
            />
            Non AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="sleeper"
              checked={busTypeFilters.sleeper}
              onChange={handleBusTypeFilterChange}
            />
            Non AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="seater"
              checked={busTypeFilters.seater}
              onChange={handleBusTypeFilterChange}
            />
            Non AC
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Seater/Sleeper</span>
          <span className="clear-all" onClick={clearSeaterFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input type="checkbox"name="threeTier"
              checked={seaterFilters.single}onChange={handleSeaterFilterChange}
            />
            Single Seater
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="twoTier"
              checked={seaterFilters.double}
              onChange={handleSeaterFilterChange}
            />
            Double Seater
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Departure Time</span>
          <span className="clear-all" onClick={clearSeaterDepartureFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="morning"
              checked={seaterDepartureFilters.morning}
              onChange={handleSeaterDepartureFilterChange}
            />
            Morning- 6AM to 12 noon
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={seaterDepartureFilters.afternoon}
              onChange={handleSeaterDepartureFilterChange}
            />
            Afternoon-12 noon to 6PM
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="evening"
              checked={seaterDepartureFilters.evening}
              onChange={handleSeaterDepartureFilterChange}
            />
            Evening- 6 PM to 12AM
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={seaterDepartureFilters.night}
              onChange={handleSeaterDepartureFilterChange}
            />
            Night- 12AM to 6Am
          </label>
        </div>
      </div>
    </aside>
  );
};
export default BusDetailSidebar;
