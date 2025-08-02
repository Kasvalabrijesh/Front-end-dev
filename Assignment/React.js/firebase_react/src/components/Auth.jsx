import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const provider = new GoogleAuthProvider();

function Auth() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Auth;
