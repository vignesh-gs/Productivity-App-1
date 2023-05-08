import React from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Welcome = ({ onFormSwitch }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onFormSwitch('login');
    navigate('/login');
  };

  return (
    <div className="welcome_container">
      <div className="bg"></div>
      <div className="maintitle">
        Track Productivity
        <Button onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Welcome;
