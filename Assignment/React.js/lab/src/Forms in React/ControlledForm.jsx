import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return(
  <div>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}/>
      <br />

      <button type="submit">Submit</button>
    </form>

    {submittedData && (
      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Data:</h3>
        <p>
          <strong>Name:</strong> {submittedData.name}
        </p>
        <p>
          <strong>Email:</strong> {submittedData.email}
        </p>
        <p>
          <strong>Password:</strong> {submittedData.password}
        </p>
      </div>
    )}
  </div>
  );
}

export default ControlledForm;
