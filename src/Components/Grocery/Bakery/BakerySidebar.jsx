import React, { useState } from 'react'

const BakerySidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isBakeryOpen, setIsBakeryOpen] = useState(true);
  const [isBakeryBrandsOpen, setIsBakeryBrandsOpen] = useState(true);
  const [isBakeryRatingsOpen, setIsBakeryRatingsOpen] = useState(true);
  const [isBakeryDiscountsOpen, setIsBakeryDiscountsOpen] = useState(true);
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
  const toggleBakery = () => {
    setIsBakeryOpen(!isBakeryOpen);
  };
  const toggleBakeryBrands = () => {
    setIsBakeryBrandsOpen(!isBakeryBrandsOpen);
  };
  const toggleBakeryRatings = () => {
    setIsBakeryRatingsOpen(!isBakeryRatingsOpen);
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
                <div className="category-header" onClick={toggleBakery}>
                  <h4>Bakery</h4>
                  <span className={`dropdown-icon ${isBakeryOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBakeryOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Cookies" checked={selectedCategories.includes("Cookies")} onChange={handleCategoryChange} />
                      Cookies
                    </label>
                    <label>
                      <input type="checkbox" name="Cream Biscuits" checked={selectedCategories.includes("Cream Biscuits")} onChange={handleCategoryChange} />
                      Cream Biscuits
                    </label>
                    <label>
                      <input type="checkbox" name="Cakes & Pies" checked={selectedCategories.includes("Cakes & Pies")} onChange={handleCategoryChange} />
                      Cakes & Pies
                    </label>
                    <label>
                      <input type="checkbox" name="Marir and Digestive" checked={selectedCategories.includes("Marir and Digestive")} onChange={handleCategoryChange} />
                      Marir and Digestive
                    </label>
                    <label>
                      <input type="checkbox" name="Salted and Plain" checked={selectedCategories.includes("Salted and Plain")} onChange={handleCategoryChange} />
                      Salted and Plain
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBakeryBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBakeryBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBakeryBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Britania" checked={selectedCategories.includes("Britania")} onChange={handleCategoryChange} />
                      Britania
                    </label>
                    <label>
                      <input type="checkbox" name="Sun Feast" checked={selectedCategories.includes("Sun Feast")} onChange={handleCategoryChange} />
                      Sun Feast
                    </label>
                    <label>
                      <input type="checkbox" name="Rusk" checked={selectedCategories.includes("Rusk")} onChange={handleCategoryChange} />
                      Rusk
                    </label>
                    <label>
                      <input type="checkbox" name="Wafers" checked={selectedCategories.includes("Wafers")} onChange={handleCategoryChange} />
                      Wafers
                    </label>
                    <label>
                      <input type="checkbox" name="Hide & Seek" checked={selectedCategories.includes("Hide & Seek")} onChange={handleCategoryChange} />
                      Hide & Seek
                    </label>
                    <label>
                      <input type="checkbox" name="Parle" checked={selectedCategories.includes("Parle")} onChange={handleCategoryChange} />
                      Parle
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleBakeryRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isBakeryRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isBakeryRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsBakeryDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isBakeryDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBakeryDiscountsOpen && (
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

export default BakerySidebar