import React, { useState } from 'react'

const PetSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isPetOpen, setIsPetOpen] = useState(true);
  const [isPetBrandsOpen, setIsPetBrandsOpen] = useState(true);
  const [isPetRatingsOpen, setIsPetRatingsOpen] = useState(true);
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
    setIsPetOpen(!isPetOpen);
  };
  const toggleBrands = () => {
    setIsPetBrandsOpen(!isPetBrandsOpen);
  };
  const toggleRatings = () => {
    setIsPetRatingsOpen(!isPetRatingsOpen);
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
                  <h4>Pet Medication</h4>
                  <span className={`dropdown-icon ${isPetOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPetOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Abamectin" checked={selectedCategories.includes("Abamectin")} onChange={handleCategoryChange} />
                      Abamectin
                    </label>
                    <label>
                      <input type="checkbox" name="Acepromazine" checked={selectedCategories.includes("Acepromazine")} onChange={handleCategoryChange} />
                      Acepromazine
                    </label>
                    <label>
                      <input type="checkbox" name="Acetaminophen/Paracetamol" checked={selectedCategories.includes("Acetaminophen/Paracetamol")} onChange={handleCategoryChange} />
                      Acetaminophen/Paracetamol
                    </label>
                    <label>
                      <input type="checkbox" name="Acyclovir" checked={selectedCategories.includes("Acyclovir")} onChange={handleCategoryChange} />
                      Acyclovir
                    </label>
                    <label>
                      <input type="checkbox" name="Albendazole" checked={selectedCategories.includes("Albendazole")} onChange={handleCategoryChange} />
                      Albendazole
                    </label>
                    <label>
                      <input type="checkbox" name="Amitraz" checked={selectedCategories.includes("Amitraz")} onChange={handleCategoryChange} />
                      Amitraz
                    </label>
                    <label>
                      <input type="checkbox" name="Polymyxin B" checked={selectedCategories.includes("Polymyxin B")} onChange={handleCategoryChange} />
                      Polymyxin B
                    </label>
                    <label>
                      <input type="checkbox" name="Povidone-iodine" checked={selectedCategories.includes("Povidone-iodine")} onChange={handleCategoryChange} />
                      Povidone-iodine
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isPetBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPetBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Parth Medical" checked={selectedCategories.includes("Parth Medical")} onChange={handleCategoryChange} />
                      Parth Medical 
                    </label>
                    <label>
                      <input type="checkbox" name="Merck Animal Health" checked={selectedCategories.includes("Merck Animal Health")} onChange={handleCategoryChange} />
                      Merck Animal Health 
                    </label>
                    <label>
                      <input type="checkbox" name="Vee Remedies" checked={selectedCategories.includes("Vee Remedies")} onChange={handleCategoryChange} />
                      Vee Remedies 
                    </label>
                    <label>
                      <input type="checkbox" name="GMT Pharma International" checked={selectedCategories.includes("GMT Pharma International")} onChange={handleCategoryChange} />
                      GMT Pharma International 
                    </label>
                  </div>
                )}
                <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isPetRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isPetRatingsOpen && (
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

export default PetSidebar