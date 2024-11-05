import React, { useState } from 'react';
import './TrainDetailSidebar.css';

const TrainDetailSidebar = () => {
  const [quickFilters, setQuickFilters] = useState({
    showAvailableOnly: false,
    showACOnly: false,
  });
  const [quotaFilters, setQuotaFilters] = useState({
    general: false,
    ladies: false,
  });
  const [classFilters, setClassFilters] = useState({
    threeTier: false,
    twoTier: false,
    oneTier: false,
    threeEconomy: false,
    sleeper: false,
  });
  const [departureFilters, setDepartureFilters] = useState({
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
  const handleQuotaFilterChange = (e) => {
    const { name, checked } = e.target;
    setQuotaFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleClassFilterChange = (e) => {
    const { name, checked } = e.target;
    setClassFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleDepartureFilterChange = (e) => {
    const { name, checked } = e.target;
    setDepartureFilters((prev) => ({
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
  const clearQuotaFilters = () => {
    setQuotaFilters({
      general: false,
      ladies: false,
    });
  };
  const clearClassFilters = () => {
    setQuotaFilters({
        threeTier: false,
        twoTier: false,
        oneTier: false,
        threeEconomy: false,
        sleeper: false,
    });
  };
  const clearDepartureFilters = () => {
    setDepartureFilters({
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
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
            <input
              type="checkbox"
              name="showAvailableOnly"
              checked={quickFilters.showAvailableOnly}
              onChange={handleQuickFilterChange}
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
          <span className="filter-header-title">Quota</span>
          <span className="clear-all" onClick={clearQuotaFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="general"
              checked={quotaFilters.general}
              onChange={handleQuotaFilterChange}
            />
            General
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="ladies"
              checked={quotaFilters.ladies}
              onChange={handleQuotaFilterChange}
            />
            Ladies
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Class</span>
          <span className="clear-all" onClick={clearClassFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="threeTier"
              checked={classFilters.threeTier}
              onChange={handleClassFilterChange}
            />
            3A- Three Tier AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="twoTier"
              checked={quotaFilters.twoTier}
              onChange={handleClassFilterChange}
            />
            2A- Second Class AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="oneTierTier"
              checked={quotaFilters.oneTierTier}
              onChange={handleClassFilterChange}
            />
            1A- First Class AC
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="threeEconomy"
              checked={quotaFilters.threeEconomy}
              onChange={handleClassFilterChange}
            />
            3E- Third Class Economy
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="sleeper"
              checked={quotaFilters.sleeper}
              onChange={handleClassFilterChange}
            />
            Sleeper(SL)
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Departure Time</span>
          <span className="clear-all" onClick={clearDepartureFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="morning"
              checked={departureFilters.morning}
              onChange={handleDepartureFilterChange}
            />
            Morning- 6AM to 12 noon
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={departureFilters.afternoon}
              onChange={handleDepartureFilterChange}
            />
            Afternoon-12 noon to 6PM
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="evening"
              checked={departureFilters.evening}
              onChange={handleDepartureFilterChange}
            />
            Evening- 6 PM to 12AM
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="afternoon"
              checked={departureFilters.night}
              onChange={handleDepartureFilterChange}
            />
            Night- 12AM to 6Am
          </label>
        </div>
      </div>
    </aside>
  );
};
export default TrainDetailSidebar;
