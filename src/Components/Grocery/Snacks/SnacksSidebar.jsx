import React, { useState } from 'react'

const SnacksSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isSnacksOpen, setIsSnacksOpen] = useState(true);
  const [isSnacksBrandsOpen, setIsSnacksBrandsOpen] = useState(true);
  const [isSnacksRatingsOpen, setIsSnacksRatingsOpen] = useState(true);
  const [isSnacksDiscountsOpen, setIsSnacksDiscountsOpen] = useState(true);
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
  const toggleSnacks = () => {
    setIsSnacksOpen(!isSnacksOpen);
  };
  const toggleSnacksBrands = () => {
    setIsSnacksBrandsOpen(!isSnacksBrandsOpen);
  };
  const toggleSnacksRatings = () => {
    setIsSnacksRatingsOpen(!isSnacksRatingsOpen);
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
                <div className="category-header" onClick={toggleSnacks}>
                  <h4>Snacks</h4>
                  <span className={`dropdown-icon ${isSnacksOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isSnacksOpen && (
                  <div className="checkbox-group">
                  <label>
                    <input type="checkbox" name="Chips & Crisps" checked={selectedCategories.includes("Chips & Crisps")} onChange={handleCategoryChange} />
                    Chips & Crisps
                  </label>
                  <label>
                    <input type="checkbox" name="Nachos" checked={selectedCategories.includes("Nachos")} onChange={handleCategoryChange} />
                    Nachos
                  </label>
                  <label>
                    <input type="checkbox" name="Puffs & Crunchies" checked={selectedCategories.includes("Puffs & Crunchies")} onChange={handleCategoryChange} />
                    Puffs & Crunchies
                  </label>
                  <label>
                    <input type="checkbox" name="Bhujia & Namkeen" checked={selectedCategories.includes("Bhujia & Namkeen")} onChange={handleCategoryChange} />
                    Bhujia & Namkeen
                  </label>
                  <label>
                    <input type="checkbox" name="Nuts and Makhana" checked={selectedCategories.includes("Nuts and Makhana")} onChange={handleCategoryChange} />
                    Nuts and Makhana
                  </label>
                  <label>
                    <input type="checkbox" name="Indian Snacks" checked={selectedCategories.includes("Indian Snacks")} onChange={handleCategoryChange} />
                    Indian Snacks
                  </label>
                  <label>
                    <input type="checkbox" name="Nuts and Makhana" checked={selectedCategories.includes("Nuts and Makhana")} onChange={handleCategoryChange} />
                    Healthy  Snacking
                  </label>
                </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleSnacksBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isSnacksBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isSnacksBrandsOpen && (
                  <div className="checkbox-group">
                  <label>
                    <input type="checkbox" name="Farmley" checked={selectedCategories.includes("Farmley")} onChange={handleCategoryChange} />
                    Farmley
                  </label>
                  <label>
                    <input type="checkbox" name="Haldiram" checked={selectedCategories.includes("Haldiram")} onChange={handleCategoryChange} />
                    Haldiram
                  </label>
                  <label>
                    <input type="checkbox" name="Lay's" checked={selectedCategories.includes("Lay's")} onChange={handleCategoryChange} />
                    Lay's
                  </label>
                  <label>
                    <input type="checkbox" name="Doritos" checked={selectedCategories.includes("Doritos")} onChange={handleCategoryChange} />
                    Doritos
                  </label>
                  <label>
                    <input type="checkbox" name="Mille" checked={selectedCategories.includes("Mille")} onChange={handleCategoryChange} />
                    Mille
                  </label>
                </div>
                )}
                <div className="section-gap"></div>
                <div className="subsection ratings">
                  <div className="category-header" onClick={toggleSnacksRatings}>
                    <h4>Ratings</h4>
                    <span className={`dropdown-icon ${isSnacksRatingsOpen ? 'open' : ''}`}>▼</span>
                  </div>
                  {isSnacksRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsSnacksDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isSnacksDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isSnacksDiscountsOpen && (
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

export default SnacksSidebar