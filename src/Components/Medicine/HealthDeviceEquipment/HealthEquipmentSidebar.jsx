import React, { useState } from 'react'

const HealthEquipmentSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isHealthDeviceOpen, setIsHealthDeviceOpen] = useState(true);
  const [isHealthDeviceBrandsOpen, setIsHealthDeviceBrandsOpen] = useState(true);
  const [isRatingsOpen, setIsRatingsOpen] = useState(true);
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
  const toggleDairyEggs = () => {
    setIsHealthDeviceOpen(!isHealthDeviceOpen);
  };
  const toggleBrands = () => {
    setIsHealthDeviceBrandsOpen(!isHealthDeviceBrandsOpen);
  };
  const toggleRatings = () => {
    setIsRatingsOpen(!isRatingsOpen);
  };
  const toggleSection = (setter) => {
    setter((prev) => !prev);
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
                <div className="category-header" onClick={toggleDairyEggs}>
                  <h4>Health Device Equipment</h4>
                  <span className={`dropdown-icon ${isHealthDeviceOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isHealthDeviceOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="bp monitors" checked={selectedCategories.includes("bp monitors")} onChange={handleCategoryChange} />
                      BP Monitor
                    </label>
                    <label>
                      <input type="checkbox" name="Glucometers & Text Strips" checked={selectedCategories.includes("Glucometers & Text Strips")} onChange={handleCategoryChange} />
                      Glucometers & Text Strips
                    </label>
                    <label>
                      <input type="checkbox" name="Thermometers" checked={selectedCategories.includes("Thermometers")} onChange={handleCategoryChange} />
                      Thermometers
                    </label>
                    <label>
                      <input type="checkbox" name="Pulse Oximeters" checked={selectedCategories.includes("Pulse Oximeters")} onChange={handleCategoryChange} />
                      Pulse Oximeters
                    </label>
                    <label>
                      <input type="checkbox" name="Pregnency Test Kit" checked={selectedCategories.includes("Pregnency Test Kit")} onChange={handleCategoryChange} />
                      Pregnency Test Kit
                    </label>
                    <label>
                      <input type="checkbox" name="Heating Belts" checked={selectedCategories.includes("Heating Belts")} onChange={handleCategoryChange} />
                      Heating Belts
                    </label>
                    <label>
                      <input type="checkbox" name="Weighing Machine" checked={selectedCategories.includes("Weighing Machine")} onChange={handleCategoryChange} />
                      Weighing Machine
                    </label>
                    <label>
                      <input type="checkbox" name="Nebulizers" checked={selectedCategories.includes("Nebulizers")} onChange={handleCategoryChange} />
                      Nebulizers
                    </label>
                    <label>
                      <input type="checkbox" name="Supports and Splints" checked={selectedCategories.includes("Supports and Splints")} onChange={handleCategoryChange} />
                      Supports and Splints
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isHealthDeviceBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isHealthDeviceBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Tynor" checked={selectedCategories.includes("Tynor")} onChange={handleCategoryChange} />
                      Tynor 
                    </label>
                    <label>
                      <input type="checkbox" name="Flamingo" checked={selectedCategories.includes("Flamingo")} onChange={handleCategoryChange} />
                      Flamingo 
                    </label>
                    <label>
                      <input type="checkbox" name="Acura" checked={selectedCategories.includes("Acura")} onChange={handleCategoryChange} />
                      Acura 
                    </label>
                    <label>
                      <input type="checkbox" name="Doctor's Choice" checked={selectedCategories.includes("Doctor's Choice")} onChange={handleCategoryChange} />
                      Doctor's Choice 
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isRatingsOpen && (
                        <div className="checkbox-group">
                          <label>
                            <input
                            type="checkbox"
                            name="Above 4"
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

export default HealthEquipmentSidebar