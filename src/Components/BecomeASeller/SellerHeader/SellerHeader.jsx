import React from 'react'
import { Link } from 'react-router-dom'
import './SellerHeader.css';

const SellerHeader = () => {
  return (
    <div><header className="become-a-seller-header">
    <div className="become-a-seller-header-row">
      <div className="become-a-seller-header-left">
        <img src="assets/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="become-a-seller-header-right">
        <div className="seller-text-elements">
          <div className="seller-text-element">
            <Link to="/grow">
              <span>How to Grow</span>
            </Link>
          </div>
          <div className="seller-text-element">
            <Link to="/learn">
              <span>Learn</span>
            </Link>
          </div>
          <div className="seller-text-element start-selling">
            <Link to="/seller-log-in">
              <span>Start Selling</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
  )
}

export default SellerHeader