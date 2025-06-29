// UserCard.js
import React from 'react';

function UserCard({ name, age, location }) {
  return (
    <div style={{
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '250px',
      margin: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2>{name}</h2>
      <p><strong>Age:20</strong> {age}</p>
      <p><strong>Location: Ahemedabad </strong> {location}</p>
    </div>
  );
}

export default UserCard;
