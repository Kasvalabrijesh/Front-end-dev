import React from "react";

function Dynamicdata() {
  const topic = "JSX";
  const description ="JSX lets you write HTML in React. It's powerful and expressive!";
  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Dynamicdata;
