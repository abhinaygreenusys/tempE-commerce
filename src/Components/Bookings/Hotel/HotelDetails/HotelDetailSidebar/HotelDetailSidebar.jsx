import React, { useState } from 'react';
import { MdFreeBreakfast, MdFreeCancellation } from 'react-icons/md';
// import './TrainDetailSidebar.css';

const HotelDetailSidebar = () => {
  const [popularFilters, setPopularFilters] = useState({
    goStay: false,
    earlyBirdDeal: false,
    freeCancellation: false,
    freeBreakfast: false,
  });
  const [priceFilters, setPriceFilters] = useState({
    range0to1000: false,
    range1001to2000: false,
    range2001to3000: false,
    range3001to4000: false,
  });
  const [locationFilters, setLocationFilters] = useState({
    delhi: false,
    newDelhi: false,
  });
  const [roomViewFilters, setRoomViewFilters] = useState({
    gardenView: false,
    cityView: false,
  });

  const [ratingFilters, setRatingFilters] = useState({
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });
  const [userRatingFilters, setUserRatingFilters] = useState({
    userThreeStar: false,
    userFourStar: false,
    userFiveStar: false,
  });
  const [roomFilters, setRoomFilters] = useState({
    balcony: false,
    jacuzzi: false,
    heater: false,
    livingArea: false,
    bathTub: false,
    homeTheatre: false,
  });
  const [propertyFilters, setPropertyFilters] = useState({
    hotel: false,
    homeStay: false,
    apartment: false,
    guestHouse: false,
    villa: false,
  });

  const handlePopularFilterChange = (e) => {
    const { name, checked } = e.target;
    setPopularFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePriceFilterChange = (e) => {
    const { name, checked } = e.target;
    setPriceFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleLocationFiltersChange = (e) => {
    const { name, checked } = e.target;
    setLocationFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleRatingFilterChange = (e) => {
    const { name, checked } = e.target;
    setRatingFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleRoomChange = (e) => {
    const { name, checked } = e.target;
    setRoomFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleUserRatingFilterChange = (e) => {
    const { name, checked } = e.target;
    setUserRatingFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleRoomFilterChange = (e) => {
    const { name, checked } = e.target;
    setRatingFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleRoomViewFilterChange = (e) => {
    const { name, checked } = e.target;
    setRoomViewFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handlePropertyFilterChange = (e) => {
    const { name, checked } = e.target;
    setPropertyFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const clearPopularFilters = () => {
    setPopularFilters({
      goStay: false,
      earlyBirdDeal: false,
      freeCancellation: false,
      freeBreakfast: false,
    });
  };

  const clearPriceFilters = () => {
    setPriceFilters({
      range0to1000: false,
      range1001to2000: false,
    });
  };

  const clearLocationFilters = () => {
    setLocationFilters({
      single: false,
      double: false,
    });
  };

  const clearRatingFilters = () => {
    setRatingFilters({
      threeStar: false,
      fourStar: false,
      fiveStar: false,
    });
  };
  const clearUserRatingFilters = () => {
    setUserRatingFilters({
      userThreeStar: false,
      userFourStar: false,
      userFiveStar: false,
    });
  };
  const clearRoomFilters = () => {
    setRoomFilters({
      balcony: false,
      jacuzzi: false,
      heater: false,
      livingArea: false,
      bathTub: false,
      homeTheatre: false,
    });
  };
  const clearRoomViewFilters = () => {
    setRoomViewFilters({
      gityView: false,
      gardenView: false,
    });
  };
  const clearPropertyFilters = () => {
    setPropertyFilters({
      hotel: false,
    homeStay: false,
    apartment: false,
    guestHouse: false,
    villa: false,
    });
  };

  return (
    <aside className="sidebar">
      <h3 className="filter-title">FILTER BY</h3>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Popular Filters</span>
          <span className="clear-all" onClick={clearPopularFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="goStay"
              checked={popularFilters.goStay}
              onChange={handlePopularFilterChange}
            />
            goStay
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="earlyBirdDeal"
              checked={popularFilters.earlyBirdDeal}
              onChange={handlePopularFilterChange}
            />
            Early Bird Deal
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="freeCancellation"
              checked={popularFilters.freeCancellation}
              onChange={handlePopularFilterChange}
            />
            Free Cancellation
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="freeBreakfast"
              checked={popularFilters.freeBreakfast}
              onChange={handlePopularFilterChange}
            />
            Free Breakfast
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Price</span>
          <span className="clear-all" onClick={clearPriceFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="range0to1000"
              checked={priceFilters.range0to1000}
              onChange={handlePriceFilterChange}
            />
            ₹0 - ₹1000
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="range1001to2000"
              checked={priceFilters.range1001to2000}
              onChange={handlePriceFilterChange}
            />
            ₹1001 - ₹2000
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="range1001to2000"
              checked={priceFilters.range1001to2000}
              onChange={handlePriceFilterChange}
            />
            ₹2001 - ₹3000
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="range1001to2000"
              checked={priceFilters.range1001to2000}
              onChange={handlePriceFilterChange}
            />
            ₹3001 - ₹4000
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Location</span>
          <span className="clear-all" onClick={clearLocationFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="single"
              checked={locationFilters.single}
              onChange={handleLocationFiltersChange}
            />
            Delhi
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="double"
              checked={locationFilters.double}
              onChange={handleLocationFiltersChange}
            />
            New Delhi
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Star Rating</span>
          <span className="clear-all" onClick={clearRatingFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="morning"
              checked={ratingFilters.threeStar}
              onChange={handleRatingFilterChange}
            />
            3 Star
          </label>
          <label className="filter-item">
            <input type="checkbox"name="afternoon"
              checked={ratingFilters.fourStar} onChange={handleRatingFilterChange}
            />
            4 Star
          </label>
          <label className="filter-item">
            <input type="checkbox"name="evening"
              checked={ratingFilters.fiveStar} onChange={handleRatingFilterChange}
            />
            5 Star
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">User Rating</span>
          <span className="clear-all" onClick={clearUserRatingFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="morning"
              checked={userRatingFilters.userThreeStar}
              onChange={handleUserRatingFilterChange}
            />
            3+ Star
          </label>
          <label className="filter-item">
            <input type="checkbox"name="afternoon"
              checked={userRatingFilters.userFourStar} onChange={handleUserRatingFilterChange}
            />
            4+ Star
          </label>
          <label className="filter-item">
            <input type="checkbox"name="evening"
              checked={userRatingFilters.userFiveStar} onChange={handleUserRatingFilterChange}
            />
            5+ Star
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Room Amenities</span>
          <span className="clear-all" onClick={clearRoomFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="balcony"
              checked={roomFilters.balcony}
              onChange={handleRoomFilterChange}
            />
            Balcony
          </label>
          <label className="filter-item">
            <input type="checkbox"name="jacuzzi"
              checked={roomFilters.jacuzzi} onChange={handleRoomFilterChange}
            />
            Jacuzzi
          </label>
          <label className="filter-item">
            <input type="checkbox"name="heater"
              checked={roomFilters.heater} onChange={handleRoomFilterChange}
            />
            Heater
          </label>
          <label className="filter-item">
            <input type="checkbox"name="livingArea"
              checked={roomFilters.livingArea} onChange={handleRoomFilterChange}
            />
            Living Area
          </label>
          <label className="filter-item">
            <input type="checkbox"name="bathTub"
              checked={roomFilters.bathTub} onChange={handleRoomFilterChange}
            />
            Bath Tub
          </label>
          <label className="filter-item">
            <input type="checkbox"name="homeTheatre"
              checked={roomFilters.homeTheatre} onChange={handleRoomFilterChange}
            />
             Home Theatre
          </label>
        </div>
      </div>
      <hr className="separator" />
      <div className="filter-header">
          <span className="filter-header-title">Room View</span>
          <span className="clear-all" onClick={clearRoomViewFilters}>
            CLEAR ALL
          </span>
        </div>
        <div className="filters-options">
        <label className="filter-item">
            <input type="checkbox"name="gardenView"
              checked={roomViewFilters.gardenView}
              onChange={handleRoomViewFilterChange}
            />
            Garden View
          </label>
          <label className="filter-item">
            <input type="checkbox"name="cityView"
              checked={roomViewFilters.cityView} onChange={handleRoomViewFilterChange}
            />
            City View
          </label>
        </div>
        <hr className="separator" />
        <div className="filter-section">
        <div className="filter-header">
          <span className="filter-header-title">Property Type</span>
          <span className="clear-all" onClick={clearPropertyFilters}>
            CLEAR ALL
          </span>
        </div>
        <hr className="separator" />
        <div className="filters-options">
          <label className="filter-item">
            <input
              type="checkbox"
              name="hotel"
              checked={propertyFilters.hotel}
              onChange={handlePropertyFilterChange}
            />
            Hotel
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="homeStay"
              checked={propertyFilters.homeStay}
              onChange={handlePropertyFilterChange}
            />
            Home Stay
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="apartment"
              checked={propertyFilters.apartment}
              onChange={handlePropertyFilterChange}
            />
            Apartment
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="guestHouse"
              checked={propertyFilters.guestHouse}
              onChange={handlePopularFilterChange}
            />
            GuestHouse
          </label>
          <label className="filter-item">
            <input
              type="checkbox"
              name="villa"
              checked={propertyFilters.villa}
              onChange={handlePopularFilterChange}
            />
            Villa
          </label>
        </div>
      </div>
    </aside>
  );
};

export default HotelDetailSidebar;
