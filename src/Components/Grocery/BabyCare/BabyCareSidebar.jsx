import React, { useState } from 'react'

const BabyCareSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isBabyCareOpen, setIsBabyCareOpen] = useState(true);
  const [isBabyCareBrandsOpen, setIsBabyCareBrandsOpen] = useState(true);
  const [isBabyCareRatingsOpen, setIsBabyCareRatingsOpen] = useState(true);
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
  const toggleBabyCare = () => {
    setIsBabyCareOpen(!isBabyCareOpen);
  };
  const toggleBabyCareBrands = () => {
    setIsBabyCareBrandsOpen(!isBabyCareBrandsOpen);
  };
  const toggleBabyCareRatings = () => {
    setIsBabyCareRatingsOpen(!isBabyCareRatingsOpen);
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
                <div className="category-header" onClick={toggleBabyCare}>
                  <h4>Baby Care</h4>
                  <span className={`dropdown-icon ${isBabyCareOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBabyCareOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Baby Food & Formula" checked={selectedCategories.includes("Baby Food & Formula")} onChange={handleCategoryChange} />
                      Baby Food & Formula
                    </label>
                    <label>
                      <input type="checkbox" name="Daiper & Wipes" checked={selectedCategories.includes("Daiper & Wipes")} onChange={handleCategoryChange} />
                      Daiper & Wipes
                    </label>
                    <label>
                      <input type="checkbox" name="Bath & Hair" checked={selectedCategories.includes("Bath & Hair")} onChange={handleCategoryChange} />
                      Bath & Hair
                    </label>
                    <label>
                      <input type="checkbox" name="Skin Care" checked={selectedCategories.includes("Skin Care")} onChange={handleCategoryChange} />
                      Skin Care
                    </label>
                    <label>
                      <input type="checkbox" name="Baby Pharma" checked={selectedCategories.includes("Baby Pharma")} onChange={handleCategoryChange} />
                      Baby Pharma
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBabyCareBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBabyCareBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBabyCareBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Nestle" checked={selectedCategories.includes("Nestle")} onChange={handleCategoryChange} />
                      Nestle
                    </label>
                    <label>
                      <input type="checkbox" name="Slurrp Farm" checked={selectedCategories.includes("Slurrp Farm")} onChange={handleCategoryChange} />
                      Slurrp Farm
                    </label>
                    <label>
                      <input type="checkbox" name="Huggies" checked={selectedCategories.includes("Huggies")} onChange={handleCategoryChange} />
                      Huggies
                    </label>
                    <label>
                      <input type="checkbox" name="Luvlap" checked={selectedCategories.includes("Luvlap")} onChange={handleCategoryChange} />
                      Luvlap
                    </label>
                    <label>
                      <input type="checkbox" name="Jhonson's" checked={selectedCategories.includes("Jhonson's")} onChange={handleCategoryChange} />
                      Jhonson's
                    </label>
                    <label>
                      <input type="checkbox" name="Jhonson's Jhonson's" checked={selectedCategories.includes("Jhonson's Jhonson's")} onChange={handleCategoryChange} />
                      Jhonson's Jhonson's
                    </label>
                    <label>
                      <input type="checkbox" name="Himalaya" checked={selectedCategories.includes("Himalaya")} onChange={handleCategoryChange} />
                      Himalaya
                    </label>
                    <label>
                      <input type="checkbox" name="Woodword's" checked={selectedCategories.includes("Woodword's")} onChange={handleCategoryChange} />
                      Woodword's
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleBabyCareRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isBabyCareRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isBabyCareRatingsOpen && (
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

export default BabyCareSidebar