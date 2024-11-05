import React, { useState } from 'react'

const HouseholdSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isHouseholdOpen, setIsHouseholdOpen] = useState(true);
  const [isHouseholdBrandsOpen, setIsHouseholdBrandsOpen] = useState(true);
  const [isHouseholdRatingsOpen, setIsHouseholdRatingsOpen] = useState(true);
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
  const toggleHousehold = () => {
    setIsHouseholdOpen(!isHouseholdOpen);
  };
  const toggleHouseholdBrands = () => {
    setIsHouseholdBrandsOpen(!isHouseholdBrandsOpen);
  };
  const toggleHouseholdRatings = () => {
    setIsHouseholdRatingsOpen(!isHouseholdRatingsOpen);
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
                <div className="category-header" onClick={toggleHousehold}>
                  <h4>Household Essential</h4>
                  <span className={`dropdown-icon ${isHouseholdOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isHouseholdOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Liquid Detegent" checked={selectedCategories.includes("Liquid Detegent")} onChange={handleCategoryChange} />
                      Liquid Detegent
                    </label>
                    <label>
                      <input type="checkbox" name="Detegent Power & Bar" checked={selectedCategories.includes("Detegent Power & Bar")} onChange={handleCategoryChange} />
                      Detegent Power & Bar
                    </label>
                    <label>
                      <input type="checkbox" name="Surface Cleaners" checked={selectedCategories.includes("Surface Cleaners")} onChange={handleCategoryChange} />
                      Surface Cleaners
                    </label>
                    <label>
                      <input type="checkbox" name="Utensils Cleaners" checked={selectedCategories.includes("Utensils Cleaners")} onChange={handleCategoryChange} />
                      Utensils Cleaners
                    </label>
                    <label>
                      <input type="checkbox" name="Toilet Cleaners" checked={selectedCategories.includes("Toilet Cleaners")} onChange={handleCategoryChange} />
                      Toilet Cleaners
                    </label>
                    <label>
                      <input type="checkbox" name="Fabric Care" checked={selectedCategories.includes("Fabric Care")} onChange={handleCategoryChange} />
                      Fabric Care
                    </label>
                    <label>
                      <input type="checkbox" name="Scrup Sponge" checked={selectedCategories.includes("Scrup Sponge")} onChange={handleCategoryChange} />
                      Scrup Sponge
                    </label>
                    <label>
                      <input type="checkbox" name="Handwash & Sanitizer" checked={selectedCategories.includes("Handwash & Sanitizer")} onChange={handleCategoryChange} />
                      Handwash & Sanitizer
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleHouseholdBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isHouseholdBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isHouseholdBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Godrej Genteel" checked={selectedCategories.includes("Godrej Genteel")} onChange={handleCategoryChange} />
                      Godrej Genteel
                    </label>
                    <label>
                      <input type="checkbox" name="Ariel" checked={selectedCategories.includes("Ariel")} onChange={handleCategoryChange} />
                      Ariel
                    </label>
                    <label>
                      <input type="checkbox" name="Surf Excel" checked={selectedCategories.includes("Surf Excel")} onChange={handleCategoryChange} />
                      Surf Excel
                    </label>
                    <label>
                      <input type="checkbox" name="Tide" checked={selectedCategories.includes("Tide")} onChange={handleCategoryChange} />
                       Tide
                    </label>
                    <label>
                      <input type="checkbox" name="Wheel" checked={selectedCategories.includes("Wheel")} onChange={handleCategoryChange} />
                      Wheel
                    </label>
                    <label>
                      <input type="checkbox" name="Rin" checked={selectedCategories.includes("Rin")} onChange={handleCategoryChange} />
                      Rin
                    </label>
                    <label>
                      <input type="checkbox" name="Dettol" checked={selectedCategories.includes("Dettol")} onChange={handleCategoryChange} />
                      Dettol
                    </label>
                    <label>
                      <input type="checkbox" name="Vim" checked={selectedCategories.includes("Vim")} onChange={handleCategoryChange} />
                      Vim
                    </label>
                    <label>
                      <input type="checkbox" name="Swype" checked={selectedCategories.includes("Swype")} onChange={handleCategoryChange} />
                      Swype
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                <div className="subsection ratings">
                    <div className="category-header" onClick={toggleHouseholdRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isHouseholdRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isHouseholdRatingsOpen && (
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

export default HouseholdSidebar