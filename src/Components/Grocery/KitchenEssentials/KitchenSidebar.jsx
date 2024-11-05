import React, { useState } from 'react'

const KitchenSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isKitchenOpen, setIsKitchenOpen] = useState(true);
  const [isKitchenBrandsOpen, setKsKitchenBrandsOpen] = useState(true);
  const [isKitchenRatingsOpen, setIsKitchenRatingsOpen] = useState(true);
  const [isDiscountsOpen, setIsDiscountsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [priceRange, setPriceRange] = useState(100);

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== name));
    }
  };
  const toggleAllCategories = () => {
    setIsAllCategoriesOpen(!isAllCategoriesOpen);
  };
  const toggleKitchen = () => {
    setIsKitchenOpen(!isKitchenOpen);
  };
  const toggleKitchenBrands = () => {
    setKsKitchenBrandsOpen(!isKitchenBrandsOpen);
  };
  const toggleKitchenRatings = () => {
    setIsKitchenRatingsOpen(!isKitchenRatingsOpen);
  };
  const toggleSection = (setter) => {
    setter((prev) => !prev);
  };
  const handleReset = () => {
    setSelectedCategories([]);
  };
  const handleRemoveCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((item) => item !== category));
  };
  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
};
  return (
    <div>
        <div className="category-section">
          <div className="category-box">
            <div className="category-header" onClick={toggleAllCategories}>
              <h3>All Categories</h3>
              <span className={`dropdown-icon ${isAllCategoriesOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isAllCategoriesOpen && (
              <>
                <div className="category-header" onClick={toggleKitchen}>
                  <h4>Kitchen Essentials</h4>
                  <span className={`dropdown-icon ${isKitchenOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isKitchenOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Rice" checked={selectedCategories.includes("Rice")} onChange={handleCategoryChange} />
                      Rice
                    </label>
                    <label>
                      <input type="checkbox" name="Pulses" checked={selectedCategories.includes("Pulses")} onChange={handleCategoryChange} />
                      Pulses
                    </label>
                    <label>
                      <input type="checkbox" name="Masaale" checked={selectedCategories.includes("Masaale")} onChange={handleCategoryChange} />
                      Masaale
                    </label>
                    <label>
                      <input type="checkbox" name="Oil" checked={selectedCategories.includes("Oil")} onChange={handleCategoryChange} />
                      Oil
                    </label>
                    <label>
                      <input type="checkbox" name="Atta" checked={selectedCategories.includes("Atta")} onChange={handleCategoryChange} />
                      Atta
                    </label>
                    <label>
                      <input type="checkbox" name="Poha" checked={selectedCategories.includes("Poha")} onChange={handleCategoryChange} />
                      Poha
                    </label>
                    <label>
                      <input type="checkbox" name="Other Flours" checked={selectedCategories.includes("Other Flours")} onChange={handleCategoryChange} />
                      Other Flours
                    </label>
                    <label>
                      <input type="checkbox" name="Other Daal" checked={selectedCategories.includes("Other Daal")} onChange={handleCategoryChange} />
                      Other Daal
                    </label>
                    <label>
                      <input type="checkbox" name="Newly added" checked={selectedCategories.includes("Newly added")} onChange={handleCategoryChange} />
                      Newly added
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleKitchenBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isKitchenBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isKitchenBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Dawat" checked={selectedCategories.includes("Dawat")} onChange={handleCategoryChange} />
                      Dawat
                    </label>
                    <label>
                      <input type="checkbox" name="Rozana" checked={selectedCategories.includes("Rozana")} onChange={handleCategoryChange} />
                       Rozana
                    </label>
                    <label>
                      <input type="checkbox" name="Aashirwad" checked={selectedCategories.includes("Aashirwad")} onChange={handleCategoryChange} />
                       Aashirwad
                    </label>
                    <label>
                      <input type="checkbox" name="Fortune" checked={selectedCategories.includes("Fortune")} onChange={handleCategoryChange} />
                      Fortune
                    </label>
                    <label>
                      <input type="checkbox" name="Rajdhani" checked={selectedCategories.includes("Rajdhani")} onChange={handleCategoryChange} />
                      Rajdhani
                    </label>
                    <label>
                      <input type="checkbox" name="Supreme Harvest" checked={selectedCategories.includes("Supreme Harvest")} onChange={handleCategoryChange} />
                      Supreme Harvest
                    </label>
                    <label>
                      <input type="checkbox" name="Tata Sampann" checked={selectedCategories.includes("Tata Sampann")} onChange={handleCategoryChange} />
                      Tata Sampann
                    </label>
                    <label>
                      <input type="checkbox" name="India Gate" checked={selectedCategories.includes("India Gate")} onChange={handleCategoryChange} />
                      India Gate
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                <div className="subsection ratings">
                  <div className="category-header" onClick={toggleKitchenRatings}>
                    <h4>Ratings</h4>
                    <span className={`dropdown-icon ${isKitchenRatingsOpen ? 'open' : ''}`}>▼</span>
                  </div>
                  {isKitchenRatingsOpen && (
                    <div className="checkbox-group">
                      <label>
                        <input type="checkbox"name="Above 4"
                         checked={selectedCategories.includes('Above 4')}
                         onChange={handleCategoryChange}
                        />
                        Above 4 <span className="star-icon">★</span>
                      </label>
                      <label>
                        <input type="checkbox"name="Under 3"
                        checked={selectedCategories.includes('Under 3')}
                        onChange={handleCategoryChange}
                       />
                       Under 3 <span className="star-icon">★</span>
                      </label>
                    </div>
                  )}
                </div>
                <hr className="black-line" />
                <div className="category-header" onClick={() => toggleSection(setIsDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isDiscountsOpen && (
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="50% or more" checked={selectedCategories.includes('50% or more')} onChange={handleCategoryChange} /> 50% or more</label>
                    <label><input type="checkbox" name="40% or more" checked={selectedCategories.includes('40% or more')} onChange={handleCategoryChange} /> 40% or more</label>
                    <label><input type="checkbox" name="30% or more" checked={selectedCategories.includes('30% or more')} onChange={handleCategoryChange} /> 30% or more</label>
                    <label><input type="checkbox" name="20% or more" checked={selectedCategories.includes('20% or more')} onChange={handleCategoryChange} /> 20% or more</label>
                    <label><input type="checkbox" name="10% or more" checked={selectedCategories.includes('10% or more')} onChange={handleCategoryChange} /> 10% or more</label>
                    <label><input type="checkbox" name="05% or more" checked={selectedCategories.includes('05% or more')} onChange={handleCategoryChange} /> 05% or more</label>
                  </div>
                )}
                 <hr className="black-line" />
                <div className="category-header" onClick={() => toggleSection(setIsPriceOpen)}>
                  <h4>Price</h4>
                  <span className={`dropdown-icon ${isPriceOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPriceOpen && (
                                <div>
                                    <div className="price-range-container">
                                        <span>100</span>
                                        <input
                                            type="range"
                                            min="100"
                                            max="500"
                                            value={priceRange}
                                            onChange={handlePriceChange}
                                            className="price-range"
                                        />
                                        <span>500</span>
                                    </div>
                                    <button className="save-btn">Save</button>
                                    <div className="checkbox-group">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="100-500"
                                                checked={selectedCategories.includes('100-500')}
                                                onChange={handleCategoryChange}
                                            />
                                            100-500
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="500-1000"
                                                checked={selectedCategories.includes('500-1000')}
                                                onChange={handleCategoryChange}
                                            />
                                            500-1000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="1000-2000"
                                                checked={selectedCategories.includes('1000-2000')}
                                                onChange={handleCategoryChange}
                                            />
                                            1000-2000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="2000-5000"
                                                checked={selectedCategories.includes('2000-5000')}
                                                onChange={handleCategoryChange}
                                            />
                                            2000-5000
                                        </label>
                                    </div>
                                </div>
                            )}
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default KitchenSidebar