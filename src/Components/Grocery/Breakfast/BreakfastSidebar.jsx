import React, { useState } from 'react'

const BreakfastSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isBreakFastOpen, setIsBreakFastOpen] = useState(true);
  const [isBreakFastBrandsOpen, setIsBreakFastBrandsOpen] = useState(true);
  const [isBreakFastRatingsOpen, setIsBreakFastRatingsOpen] = useState(true);
  const [isBreakFastDiscountsOpen, setIsBreakFastDiscountsOpen] = useState(true);
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
  const toggleBreakFast = () => {
    setIsBreakFastOpen(!isBreakFastOpen);
  };
  const toggleBreakFastBrands = () => {
    setIsBreakFastBrandsOpen(!isBreakFastBrandsOpen);
  };
  const toggleBreakFastRatings = () => {
    setIsBreakFastRatingsOpen(!isBreakFastRatingsOpen);
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
                <div className="category-header" onClick={toggleBreakFast}>
                  <h4>BreakFast</h4>
                  <span className={`dropdown-icon ${isBreakFastOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBreakFastOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Batters & Mixes" checked={selectedCategories.includes("Batters & Mixes")} onChange={handleCategoryChange} />
                      Batters & Mixes
                    </label>
                    <label>
                      <input type="checkbox" name="Flakes" checked={selectedCategories.includes("Flakes")} onChange={handleCategoryChange} />
                      Flakes
                    </label>
                    <label>
                      <input type="checkbox" name="Oats" checked={selectedCategories.includes("Oats")} onChange={handleCategoryChange} />
                      Oats
                    </label>
                    <label>
                      <input type="checkbox" name="Kids Cereals" checked={selectedCategories.includes("Kids Cereals")} onChange={handleCategoryChange} />
                      Kids Cereals
                    </label>
                    <label>
                      <input type="checkbox" name="cheese" checked={selectedCategories.includes("cheese")} onChange={handleCategoryChange} />
                      Muesli & Granola
                    </label>
                    <label>
                      <input type="checkbox" name="Jams" checked={selectedCategories.includes("Jams")} onChange={handleCategoryChange} />
                      Jams
                    </label>
                    <label>
                      <input type="checkbox" name="Peanut Butters" checked={selectedCategories.includes("Peanut Butters")} onChange={handleCategoryChange} />
                      Peanut Butters
                    </label>
                    <label>
                      <input type="checkbox" name="Jucies & Fruit drinks" checked={selectedCategories.includes("Jucies & Fruit drinks")} onChange={handleCategoryChange} />
                      Jucies & Fruit drinks
                    </label>
                    <label>
                      <input type="checkbox" name="Energy Bars" checked={selectedCategories.includes("Energy Bars")} onChange={handleCategoryChange} />
                      Energy Bars
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBreakFastBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBreakFastBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBreakFastBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="iD Fresh" checked={selectedCategories.includes("iD Fresh")} onChange={handleCategoryChange} />
                      iD Fresh
                    </label>
                    <label>
                      <input type="checkbox" name="Rishta" checked={selectedCategories.includes("Rishta")} onChange={handleCategoryChange} />
                      Rishta
                    </label>
                    <label>
                      <input type="checkbox" name="Mtr" checked={selectedCategories.includes("Mtr")} onChange={handleCategoryChange} />
                      Mtr
                    </label>
                    <label>
                      <input type="checkbox" name="Kellogg's" checked={selectedCategories.includes("Kellogg's")} onChange={handleCategoryChange} />
                      Kellogg's
                    </label>
                    <label>
                      <input type="checkbox" name="Bagrry's" checked={selectedCategories.includes("Bagrry's")} onChange={handleCategoryChange} />
                      Bagrry's
                    </label>
                    <label>
                      <input type="checkbox" name="Quaker" checked={selectedCategories.includes("Quaker")} onChange={handleCategoryChange} />
                      Quaker
                    </label>
                    <label>
                      <input type="checkbox" name="Saffola" checked={selectedCategories.includes("Saffola")} onChange={handleCategoryChange} />
                      Saffola
                    </label>
                    <label>
                      <input type="checkbox" name="Yogabar" checked={selectedCategories.includes("Yogabar")} onChange={handleCategoryChange} />
                      Yogabar
                    </label>
                    <label>
                      <input type="checkbox" name="Kwality" checked={selectedCategories.includes("Kwality")} onChange={handleCategoryChange} />
                      Kwality
                    </label>
                    <label>
                      <input type="checkbox" name="Kissan" checked={selectedCategories.includes("Kissan")} onChange={handleCategoryChange} />
                      Kissan
                    </label>
                    <label>
                      <input type="checkbox" name="Pintola" checked={selectedCategories.includes("Pintola")} onChange={handleCategoryChange} />
                       Pintola
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleBreakFastRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isBreakFastRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isBreakFastRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsBreakFastDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isBreakFastDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBreakFastDiscountsOpen && (
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

export default BreakfastSidebar