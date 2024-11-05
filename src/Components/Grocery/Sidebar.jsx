import React, { useState } from 'react'
import './Sidebar.css';

const Sidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isDairyEggsOpen, setIsDairyEggsOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
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
    setIsDairyEggsOpen(!isDairyEggsOpen);
  };
  const toggleBrands = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };
  const toggleRatings = () => {
    setIsRatingsOpen(!isRatingsOpen);
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
                <div className="category-header" onClick={toggleDairyEggs}>
                  <h4>Dairy & Eggs</h4>
                  <span className={`dropdown-icon ${isDairyEggsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isDairyEggsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Milk" checked={selectedCategories.includes("Milk")} onChange={handleCategoryChange} />
                      Milk
                    </label>
                    <label>
                      <input type="checkbox" name="Eggs" checked={selectedCategories.includes("Eggs")} onChange={handleCategoryChange} />
                      Eggs
                    </label>
                    <label>
                      <input type="checkbox" name="butter" checked={selectedCategories.includes("butter")} onChange={handleCategoryChange} />
                      Butter
                    </label>
                    <label>
                      <input type="checkbox" name="yogurt" checked={selectedCategories.includes("yogurt")} onChange={handleCategoryChange} />
                      Yogurt
                    </label>
                    <label>
                      <input type="checkbox" name="cheese" checked={selectedCategories.includes("cheese")} onChange={handleCategoryChange} />
                      Cheese
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Amul" checked={selectedCategories.includes("Amul")} onChange={handleCategoryChange} />
                      Amul
                    </label>
                    <label>
                      <input type="checkbox" name="Mother Dairy" checked={selectedCategories.includes("Mother Dairy")} onChange={handleCategoryChange} />
                      Mother Dairy
                    </label>
                    <label>
                      <input type="checkbox" name="Horizon organic" checked={selectedCategories.includes("Horizon Organic")} onChange={handleCategoryChange} />
                      Horizon Organic
                    </label>
                    <label>
                      <input type="checkbox" name="Organic Valley" checked={selectedCategories.includes("Organic Valley")} onChange={handleCategoryChange} />
                      Organic Valley
                    </label>
                    <label>
                      <input type="checkbox" name="FairLife" checked={selectedCategories.includes("FairLife")} onChange={handleCategoryChange} />
                      FairLife
                    </label>
                    <label>
                      <input type="checkbox" name="DairyPure" checked={selectedCategories.includes("DairyPure")} onChange={handleCategoryChange} />
                      DairyPure
                    </label>
                    <label>
                      <input type="checkbox" name="Great Value" checked={selectedCategories.includes("Great Value")} onChange={handleCategoryChange} />
                      Great Value
                    </label>
                    <label>
                      <input type="checkbox" name="Lactaid" checked={selectedCategories.includes("Lactaid")} onChange={handleCategoryChange} />
                      Lactaid
                    </label>
                    <label>
                      <input type="checkbox" name="Almond Breeze" checked={selectedCategories.includes("Almond Breeze")} onChange={handleCategoryChange} />
                      Almond Breeze
                    </label>
                    <label>
                      <input type="checkbox" name="Silk" checked={selectedCategories.includes("Silk")} onChange={handleCategoryChange} />
                      Silk
                    </label>
                    <label>
                      <input type="checkbox" name="Nestle" checked={selectedCategories.includes("Nestle")} onChange={handleCategoryChange} />
                       Nestle
                    </label>
                    <label>
                      <input type="checkbox" name="So Delicious" checked={selectedCategories.includes("So Delicious")} onChange={handleCategoryChange} />
                      So Delicious
                    </label>
                    <label>
                      <input type="checkbox" name="WestSoy" checked={selectedCategories.includes("WestSoy")} onChange={handleCategoryChange} />
                      WestSoy
                    </label>
                    <label>
                      <input type="checkbox" name="Pacific Food" checked={selectedCategories.includes("Pacific Food")} onChange={handleCategoryChange} />
                      Pacific Food
                    </label>
                    <label>
                      <input type="checkbox" name="Eden Food" checked={selectedCategories.includes("Eden Food")} onChange={handleCategoryChange} />
                      Eden Food
                    </label>
                    <label>
                      <input type="checkbox" name="Oatly" checked={selectedCategories.includes("Oatly")} onChange={handleCategoryChange} />
                      Oatly
                    </label>
                    <label>
                      <input type="checkbox" name="Califia Farm" checked={selectedCategories.includes("Califia Farm")} onChange={handleCategoryChange} />
                      Califia Farm
                    </label>
                    <label>
                      <input type="checkbox" name="Planet Oat" checked={selectedCategories.includes("Planet Oat")} onChange={handleCategoryChange} />
                      Planet Oat
                    </label>
                    <label>
                      <input type="checkbox" name="Elmhurst" checked={selectedCategories.includes("Elmhurst")} onChange={handleCategoryChange} />
                      Elmhurst
                    </label>
                    <label>
                      <input type="checkbox" name="Thai Kitchen" checked={selectedCategories.includes("Thai Kitchen")} onChange={handleCategoryChange} />
                      Thai Kitchen
                    </label>
                    <label>
                      <input type="checkbox" name="Meyenberg" checked={selectedCategories.includes("Meyenberg")} onChange={handleCategoryChange} />
                      Meyenberg
                    </label>
                    <label>
                      <input type="checkbox" name="Redwood Hill Farm" checked={selectedCategories.includes("Redwood Hill Farm")} onChange={handleCategoryChange} />
                      Redwood Hill Farm
                    </label>  
                    <label>
                      <input type="checkbox" name="Mt Capera" checked={selectedCategories.includes("Mt Capera")} onChange={handleCategoryChange} />
                      Mt Capera
                    </label>
                    <label>
                      <input type="checkbox" name="Nubian Heritage" checked={selectedCategories.includes("Nubian Heritage")} onChange={handleCategoryChange} />
                      Nubian Heritage
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

export default Sidebar