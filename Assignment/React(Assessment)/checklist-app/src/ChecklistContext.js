import React, { createContext, useState } from 'react';

// Create Context
export const ChecklistContext = createContext();

// Provider Component
export const ChecklistProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to update checkbox selection
  const toggleItem = (item) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  // Log current selected items
  console.clear();
  console.log("✅ Currently Selected Items:", selectedItems);

  return (
    <ChecklistContext.Provider value={{ selectedItems, toggleItem }}>
      {children}
    </ChecklistContext.Provider>
  );
};
