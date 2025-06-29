import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevStatus) => !prevStatus);
  };
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please log in."}</h2>
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default LoginStatus;
