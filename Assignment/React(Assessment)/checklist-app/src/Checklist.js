import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext';

const options = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

const Checklist = () => {
  const { selectedItems, toggleItem } = useContext(ChecklistContext);

  const handleChange = (e) => {
    const { value } = e.target;
    toggleItem(value); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📝 Select Your Skills</h2>
      {options.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            id={item}
            value={item}
            checked={selectedItems.includes(item)}
            onChange={handleChange}
          />
          <label htmlFor={item} style={{ marginLeft: "8px" }}>{item}</label>
        </div>
      ))}
      <h3>✅ Selected:</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
