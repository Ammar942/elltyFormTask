import React from 'react';
import './Button.css';

const Button = ({ children, onClick, disabled = false, className = '' }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

