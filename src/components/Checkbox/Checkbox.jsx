import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checked = false, onChange, disabled = false, id }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom">
          {checked && (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;

