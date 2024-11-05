import React, { useState } from 'react';
import './SellerLoginPage.css';

const countryCodes = {
  "India": "+91",
  "United States": "+1",
  "United Kingdom": "+44",
  "Australia": "+61",
};

const SellerLoginPage = ({ setShowLogin }) => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [country, setCountry] = useState("India");

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  const handleSignInClick = () => {
    setIsCreatingAccount(false);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        {isCreatingAccount ? (
          <>
            <h2>Create Account</h2>
            <input type="text" placeholder="Your Name" />
            <div className="phone-input">
              <select value={country} onChange={handleCountryChange} className="country-select">
                {Object.keys(countryCodes).map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName} ({countryCodes[countryName]})
                  </option>
                ))}
              </select>
              <input type="text" placeholder="Mobile No" className="mobile-input" />
            </div>
            <input type="password" placeholder="Password" />
            <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
            <button className="login-button">Verify your mobile no</button>
            <p className="signin-link" onClick={handleSignInClick}>Already have an account? <span>Sign In</span></p>
          </>
        ) : (
          <>
            <h2>Seller Login</h2>
            <input type="text" placeholder="Email ID / Phone" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Login</button>
            <hr />
            <button className="create-account-button" onClick={handleCreateAccountClick}>Create an Account</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerLoginPage;
