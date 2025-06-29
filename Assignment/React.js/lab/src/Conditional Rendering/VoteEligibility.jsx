import React, { useState } from "react";

function VoteEligibility() {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const isEligible = parseInt(age) >= 18;
  return (
    <div>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />
      {age && (
        <p>
          {isEligible
            ? "You are eligible to vote."
            : "You are not eligible to vote."}
        </p>
      )}
    </div>
  );
}

export default VoteEligibility;
