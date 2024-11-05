import React, { useState } from 'react'

const FruitSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isFruitOpen, setIsFruitOpen] = useState(true);
  const [isVegetableOpen, setIsVegetableOpen] = useState(true);
  const [isFruitsVegetableRatingsOpen, setIsFruitsVegetableRatingsOpen] = useState(true);
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
  const toggleFruits = () => {
    setIsFruitOpen(!isFruitOpen);
  };
  const toggleVegetables = () => {
    setIsVegetableOpen(!isVegetableOpen);
  };
  const toggleRatings = () => {
    setIsFruitsVegetableRatingsOpen(!isFruitsVegetableRatingsOpen);
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
                <div className="category-header" onClick={toggleFruits}>
                  <h4>Fruits</h4>
                  <span className={`dropdown-icon ${isFruitOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isFruitOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Fresh Fruit" checked={selectedCategories.includes("Fresh Fruit")} onChange={handleCategoryChange} />
                      Fresh Fruit
                    </label>
                    <label>
                      <input type="checkbox" name="mango" checked={selectedCategories.includes("mango")} onChange={handleCategoryChange} />
                      Mango
                    </label>
                    <label>
                      <input type="checkbox" name="Exotic Fruits" checked={selectedCategories.includes("Exotic Fruits")} onChange={handleCategoryChange} />
                      Exotic Fruits
                    </label>
                    <label>
                      <input type="checkbox" name="new arrival" checked={selectedCategories.includes("new arrival")} onChange={handleCategoryChange} />
                      New Arrival
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleVegetables}>
                  <h4>Vegetables</h4>
                  <span className={`dropdown-icon ${isVegetableOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isVegetableOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Fresh Vegetables" checked={selectedCategories.includes("Fresh Vegetables")} onChange={handleCategoryChange} />
                      Fresh Vegetables
                    </label>
                    <label>
                      <input type="checkbox" name="Leafy Seasonings" checked={selectedCategories.includes("Leafy Seasonings")} onChange={handleCategoryChange} />
                      Leafy Seasonings
                    </label>
                    <label>
                      <input type="checkbox" name="Exotic Vegetables" checked={selectedCategories.includes("Exotic Vegetables")} onChange={handleCategoryChange} />
                      Exotic Vegetables
                    </label>
                    <label>
                      <input type="checkbox" name="Regional Favorites" checked={selectedCategories.includes("Regional Favorites")} onChange={handleCategoryChange} />
                      Regional Favorites
                    </label>
                    <label>
                      <input type="checkbox" name="New Arrivals" checked={selectedCategories.includes("New Arrivals")} onChange={handleCategoryChange} />
                      New Arrivals
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isFruitsVegetableRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isFruitsVegetableRatingsOpen && (
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

export default FruitSidebar