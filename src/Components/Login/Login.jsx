
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text"placeholder="Email or Mobile No"
          value={inputValue}onChange={(e) => setInputValue(e.target.value)}className="login-input"
        />
        <button type="submit" className="login-button">Submit</button>
      </form>
    </div>
  );
};

export default Login;
