import React, { useState } from 'react'

const FrozenSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isFrozenOpen, setIsFrozenOpen] = useState(true);
  const [isFrozenBrandsOpen, setIsFrozenBrandsOpen] = useState(true);
  const [isFrozenRatingsOpen, setIsFrozenRatingsOpen] = useState(true);
  const [isFrozenDiscountsOpen, setIsFrozenDiscountsOpen] = useState(true);
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
  const toggleFrozen = () => {
    setIsFrozenOpen(!isFrozenOpen);
  };
  const toggleFrozenBrands = () => {
    setIsFrozenBrandsOpen(!isFrozenBrandsOpen);
  };
  const toggleFrozenRatings = () => {
    setIsFrozenRatingsOpen(!isFrozenRatingsOpen);
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
                <div className="category-header" onClick={toggleFrozen}>
                  <h4>Instant & Frozen Food</h4>
                  <span className={`dropdown-icon ${isFrozenOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isFrozenOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Noodles & Vermicelli" checked={selectedCategories.includes("Noodles & Vermicelli")} onChange={handleCategoryChange} />
                      Noodles & Vermicelli
                    </label>
                    <label>
                      <input type="checkbox" name="Pasta & Soup" checked={selectedCategories.includes("Pasta & Soup")} onChange={handleCategoryChange} />
                      Pasta & Soup
                    </label>
                    <label>
                      <input type="checkbox" name="Non Veg-Frozen" checked={selectedCategories.includes("Non Veg-Frozen")} onChange={handleCategoryChange} />
                      Non Veg-Frozen
                    </label>
                    <label>
                      <input type="checkbox" name="Batter & Breakfast" checked={selectedCategories.includes("Batter & Breakfast")} onChange={handleCategoryChange} />
                      Batter & Breakfast
                    </label>
                    <label>
                      <input type="checkbox" name="Veg Frozen" checked={selectedCategories.includes("Veg Frozen")} onChange={handleCategoryChange} />
                      Veg Frozen
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleFrozenBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isFrozenBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isFrozenBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Maggie" checked={selectedCategories.includes("Maggie")} onChange={handleCategoryChange} />
                      Maggie
                    </label>
                    <label>
                      <input type="checkbox" name="Yu" checked={selectedCategories.includes("Yu")} onChange={handleCategoryChange} />
                      Yu
                    </label>
                    <label>
                      <input type="checkbox" name="Sunfeast Yippee" checked={selectedCategories.includes("Sunfeast Yippee")} onChange={handleCategoryChange} />
                      Sunfeast Yippee
                    </label>
                    <label>
                      <input type="checkbox" name="Knorr" checked={selectedCategories.includes("Knorr")} onChange={handleCategoryChange} />
                      Knorr
                    </label>
                    <label>
                      <input type="checkbox" name="Disano" checked={selectedCategories.includes("Disano")} onChange={handleCategoryChange} />
                      Disano
                    </label>
                    <label>
                      <input type="checkbox" name="Meatzza" checked={selectedCategories.includes("Meatzza")} onChange={handleCategoryChange} />
                      Meatzza
                    </label>
                    <label>
                      <input type="checkbox" name="Sumeru" checked={selectedCategories.includes("Sumeru")} onChange={handleCategoryChange} />
                      Sumeru
                    </label>
                    <label>
                      <input type="checkbox" name="Pillsbury" checked={selectedCategories.includes("Pillsbury")} onChange={handleCategoryChange} />
                      Pillsbury
                    </label>
                    <label>
                      <input type="checkbox" name="Saffola" checked={selectedCategories.includes("Saffola")} onChange={handleCategoryChange} />
                      Saffola
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleFrozenRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isFrozenRatingsOpen ? 'open' : ''}`}>▼</span>
                    </div>
                    {isFrozenRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsFrozenDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isFrozenDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isFrozenDiscountsOpen && (
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
export default FrozenSidebar