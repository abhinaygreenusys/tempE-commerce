<header className="dashoboadHeader">
  <div className="dashoboadHeader-row">
    <div className="dashoboadHeader-left">
      <div
        className={`icon-text-item ${activeTab === 'grocery' ? 'active' : ''}`}
        onClick={() => handleClick('grocery')}
      >
        <Link to="/grocery">
          <FaShoppingCart className="icon" />
          <span>Grocery</span>
        </Link>
      </div>
      <div
        className={`icon-text-item ${activeTab === 'medicine' ? 'active' : ''}`}
        onClick={() => handleClick('medicine')}
      >
        <Link to="/medicine">
          <FaPills className="icon" />
          <span>Medicine</span>
        </Link>
      </div>
      {/* Repeat for other tabs */}
    </div>
  </div>
</header>
