import React, { useState } from "react";

function Inputfield() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Inputfield;
