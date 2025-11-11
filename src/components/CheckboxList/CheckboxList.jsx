import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './CheckboxList.css';

const CheckboxList = ({ items, onItemChange }) => {
  return (
    <div className="checkbox-list">
      {items.map((item, index) => (
        <div key={item.id || index} className="checkbox-list-item">
          <span className="checkbox-list-label">{item.label}</span>
          <Checkbox
            id={`checkbox-${item.id || index}`}
            checked={item.checked}
            onChange={() => onItemChange(item.id || index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;

