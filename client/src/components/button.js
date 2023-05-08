import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Get Started</button>
    </div>
  );
};

export default Button;
