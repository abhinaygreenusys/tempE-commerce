import React from 'react';
import './Footer.css'; // Assuming you will add styles in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo-footer.png`}
            alt="Logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-column">
          <h3>Partner With Us</h3>
          <ul>
            <li>Partnership Program</li>
            <li>Affiliated Program</li>
            <li>Connectivity Program</li>
            <li>Promotion and Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Centre</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get the App</h3>
          <ul>
            <li>Resia for Android</li>
            <li>Resia for iOS</li>
            <li>Mobile Site</li>
          </ul>
          <div className="app-links">
            <div className="app-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/apple-icon.png`}
                alt="Apple"
                className="app-icon"
              />
              <span>Download on the App Store</span>
            </div>
            <div className="app-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/playstore-icon.png`}
                alt="Play Store"
                className="app-icon"
              />
              <span>Download on Google Play</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Resia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
