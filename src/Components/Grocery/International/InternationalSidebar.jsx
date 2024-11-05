import React, { useState } from 'react'

const InternationalSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isInternationalFoodOpen, setIsInternationalFoodOpen] = useState(true);
  const [isInternationalFoodBrandsOpen, setIsInternationalFoodBrandsOpen] = useState(true);
  const [isInternationalFoodRatingsOpen, setIsInternationalFoodRatingsOpen] = useState(true);
  const [isInternationalFoodDiscountsOpen, setIsInternationalFoodDiscountsOpen] = useState(true);
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
  const toggleInternationalFood = () => {
    setIsInternationalFoodOpen(!isInternationalFoodOpen);
  };
  const toggleInternationalFoodBrands = () => {
    setIsInternationalFoodBrandsOpen(!isInternationalFoodBrandsOpen);
  };
  const toggleInternationalFoodRatings = () => {
    setIsInternationalFoodRatingsOpen(!isInternationalFoodRatingsOpen);
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
                <div className="category-header" onClick={toggleInternationalFood}>
                  <h4>International Food</h4>
                  <span className={`dropdown-icon ${isInternationalFoodOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isInternationalFoodOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Biryani" checked={selectedCategories.includes("Biryani")} onChange={handleCategoryChange} />
                      Biryani
                    </label>
                    <label>
                      <input type="checkbox" name="Burger" checked={selectedCategories.includes("Burger")} onChange={handleCategoryChange} />
                      Burger
                    </label>
                    <label>
                      <input type="checkbox" name="Sushi" checked={selectedCategories.includes("Sushi")} onChange={handleCategoryChange} />
                      Sushi
                    </label>
                    <label>
                      <input type="checkbox" name="Pizza" checked={selectedCategories.includes("Pizza")} onChange={handleCategoryChange} />
                      Pizza
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleInternationalFoodBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isInternationalFoodBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isInternationalFoodBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Nestle SA" checked={selectedCategories.includes("Nestle SA")} onChange={handleCategoryChange} />
                      Nestle SA
                    </label>
                    <label>
                      <input type="checkbox" name="General Mills Inc" checked={selectedCategories.includes("General Mills Inc")} onChange={handleCategoryChange} />
                      General Mills Inc
                    </label>
                    <label>
                      <input type="checkbox" name="JBS" checked={selectedCategories.includes("JBS")} onChange={handleCategoryChange} />
                      JBS
                    </label>
                    <label>
                      <input type="checkbox" name="Tyson" checked={selectedCategories.includes("Tyson")} onChange={handleCategoryChange} />
                      Tyson
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleInternationalFoodRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isInternationalFoodRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isInternationalFoodRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsInternationalFoodDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isInternationalFoodDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isInternationalFoodDiscountsOpen && (
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

export default InternationalSidebar