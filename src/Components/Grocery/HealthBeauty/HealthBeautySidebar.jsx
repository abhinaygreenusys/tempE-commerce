import React, { useState } from 'react'

const HealthBeautySidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isBeautyOpen, setIsBeautyOpen] = useState(true);
  const [isBeautyBrandsOpen, setIsBeautyBrandsOpen] = useState(true);
  const [isBeautyRatingsOpen, setIsBeautyRatingsOpen] = useState(true);
  const [isBeautyDiscountsOpen, setIsBeautyDiscountsOpen] = useState(true);
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
  const toggleBeauty = () => {
    setIsBeautyOpen(!isBeautyOpen);
  };
  const toggleBeautyBrands = () => {
    setIsBeautyBrandsOpen(!isBeautyBrandsOpen);
  };
  const toggleBeautyRatings = () => {
    setIsBeautyRatingsOpen(!isBeautyRatingsOpen);
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
                <div className="category-header" onClick={toggleBeauty}>
                  <h4>Body Care</h4>
                  <span className={`dropdown-icon ${isBeautyOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBeautyOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Shampoo and Conditioner" checked={selectedCategories.includes("Shampoo and Conditioner")} onChange={handleCategoryChange} />
                      Shampoo and Conditioner
                    </label>
                    <label>
                      <input type="checkbox" name="Soap" checked={selectedCategories.includes("Soap")} onChange={handleCategoryChange} />
                      Soap
                    </label>
                    <label>
                      <input type="checkbox" name="Body Lotion" checked={selectedCategories.includes("Body Lotion")} onChange={handleCategoryChange} />
                      Body Lotion
                    </label>
                    <label>
                      <input type="checkbox" name="Shower Gel" checked={selectedCategories.includes("Shower Gel")} onChange={handleCategoryChange} />
                      Shower Gel
                    </label>
                    <label>
                      <input type="checkbox" name="Face Wash and Scrub" checked={selectedCategories.includes("Face Wash and Scrub")} onChange={handleCategoryChange} />
                      Face Wash and Scrub
                    </label>
                    <label>
                      <input type="checkbox" name="Perfume Deo and Tal" checked={selectedCategories.includes("Perfume Deo and Tal")} onChange={handleCategoryChange} />
                      Perfume Deo and Tal
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBeautyBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBeautyBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBeautyBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Nyle" checked={selectedCategories.includes("Nyle")} onChange={handleCategoryChange} />
                      Nyle
                    </label>
                    <label>
                      <input type="checkbox" name="Mother Dairy" checked={selectedCategories.includes("Mother Dairy")} onChange={handleCategoryChange} />
                      Park Avenue
                    </label>
                    <label>
                      <input type="checkbox" name="Dove" checked={selectedCategories.includes("Dove")} onChange={handleCategoryChange} />
                      Dove
                    </label>
                    <label>
                      <input type="checkbox" name="Head & Shoulder" checked={selectedCategories.includes("Head & Shoulder")} onChange={handleCategoryChange} />
                      Head & Shoulder
                    </label>
                    <label>
                      <input type="checkbox" name="L'Oreal Paris" checked={selectedCategories.includes("L'Oreal Paris")} onChange={handleCategoryChange} />
                      L'Oreal Paris
                    </label>
                    <label>
                      <input type="checkbox" name="Vaseline" checked={selectedCategories.includes("Vaseline")} onChange={handleCategoryChange} />
                      Vaseline
                    </label>
                    <label>
                      <input type="checkbox" name="Nivea" checked={selectedCategories.includes("Nivea")} onChange={handleCategoryChange} />
                      Nivea
                    </label>
                    <label>
                      <input type="checkbox" name="Himalaya" checked={selectedCategories.includes("Himalaya")} onChange={handleCategoryChange} />
                      Himalaya
                    </label>
                    <label>
                      <input type="checkbox" name="Garnier" checked={selectedCategories.includes("Garnier")} onChange={handleCategoryChange} />
                      Garnier
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                <div className="subsection ratings">
                  <div className="category-header" onClick={toggleBeautyRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isBeautyRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isBeautyRatingsOpen && (
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
                <div className="category-header" onClick={() => toggleSection(setIsBeautyDiscountsOpen)}>
                  <h4>Discount</h4>
                  <span className={`dropdown-icon ${isBeautyDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBeautyDiscountsOpen && (
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

export default HealthBeautySidebar