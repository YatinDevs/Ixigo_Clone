import React, { createContext, useContext, useEffect, useState } from "react";
import { projectID } from "../../constants";
import { signUp, logIn, logOut } from "../../apis/login-signup-api";

// Creating context
const AuthContext = createContext();

// Setting JWT if exists
const JWT = JSON.parse(localStorage.getItem("authToken"));

// AuthProvider component
export default function AuthProvider({ children }) {
  const [showLoginSignupForm, setShowLoginSignupForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (JWT) {
      setIsLoggedIn(true);
    }
  }, []);

  const provider = {
    showLoginSignupForm,
    setShowLoginSignupForm,
    isLoggedIn,
    setIsLoggedIn,
    logIn: async (user) => await logIn(user, setIsLoggedIn),
    signUp: async (user) => await signUp(user, setIsLoggedIn),
    logOut: () => logOut(setIsLoggedIn),
  };

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
