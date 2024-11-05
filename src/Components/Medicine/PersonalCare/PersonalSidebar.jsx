import React, { useState } from 'react'

const PersonalSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isPersonalCareOpen, setIsPersonalCareOpen] = useState(true);
  const [isPersonalBrandsOpen, setIsPersonalBrandsOpen] = useState(true);
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
    setIsPersonalCareOpen(!isPersonalCareOpen);
  };
  const toggleBrands = () => {
    setIsPersonalBrandsOpen(!isPersonalBrandsOpen);
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
                  <h4>Personal Care Medication</h4>
                  <span className={`dropdown-icon ${isPersonalCareOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPersonalCareOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="face care" checked={selectedCategories.includes("faceCare")} onChange={handleCategoryChange} />
                      Face Care
                    </label>
                    <label>
                      <input type="checkbox" name="lipCare" checked={selectedCategories.includes("lipCare")} onChange={handleCategoryChange} />
                      Lip Care
                    </label>
                    <label>
                      <input type="checkbox" name="hairOil" checked={selectedCategories.includes("hairOil")} onChange={handleCategoryChange} />
                      Hair oil
                    </label>
                    <label>
                      <input type="checkbox" name="hairColor" checked={selectedCategories.includes("hairColor")} onChange={handleCategoryChange} />
                      Hair Color 
                    </label>
                    <label>
                      <input type="checkbox" name="shampoo" checked={selectedCategories.includes("shampoo")} onChange={handleCategoryChange} />
                      Shampoo
                    </label>
                    <label>
                      <input type="checkbox" name="razorShavingBrush" checked={selectedCategories.includes("razorShavingBrush")} onChange={handleCategoryChange} />
                      Razors & Saving Brush
                    </label>
                    <label>
                      <input type="checkbox" name="toothPaste" checked={selectedCategories.includes("toothPaste")} onChange={handleCategoryChange} />
                      ToothPastes
                    </label>
                    <label>
                      <input type="checkbox" name="toothBrushTongueCleaner" checked={selectedCategories.includes("toothBrushTongueCleaner")} onChange={handleCategoryChange} />
                      Tooth Brush & Tongue Cleaner
                    </label>
                    <label>
                      <input type="checkbox" name="handWashSanitizer" checked={selectedCategories.includes("handWashSanitizer")} onChange={handleCategoryChange} />
                      Hand Wash & Sanitizer
                    </label>
                    <label>
                      <input type="checkbox" name="mouthFreshners" checked={selectedCategories.includes("mouthFreshners")} onChange={handleCategoryChange} />
                      Mouth Freshners
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isPersonalBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPersonalBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="himalaya" checked={selectedCategories.includes("himalaya")} onChange={handleCategoryChange} />
                      Himalaya 
                    </label>
                    <label>
                      <input type="checkbox" name="nivea" checked={selectedCategories.includes("nivea")} onChange={handleCategoryChange} />
                      Nivea 
                    </label>
                    <label>
                      <input type="checkbox" name="dove" checked={selectedCategories.includes("dove")} onChange={handleCategoryChange} />
                      Dove 
                    </label>
                    <label>
                      <input type="checkbox" name="pearls" checked={selectedCategories.includes("pearls")} onChange={handleCategoryChange} />
                      Pearls 
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
export default PersonalSidebar