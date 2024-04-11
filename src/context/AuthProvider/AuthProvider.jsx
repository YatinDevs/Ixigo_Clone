import React, { createContext, useContext, useEffect, useState } from "react";
import { projectID } from "../../constants";
import { useNavigate } from "react-router-dom";

// Creating context
const AuthContext = createContext();

// Setting JWT if exists
const JWT = JSON.parse(localStorage.getItem("authToken"));
const user = JSON.parse(localStorage.getItem("userDetails")) || {};

// AuthProvider component
export default function AuthProvider({ children }) {
  // Two States to Track
  // Show Form on Click Button
  // Set islogged or Not
  const [showLoginSignupForm, setShowLoginSignupForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const navigate = useNavigate();

  async function signUp(user) {
    const bodyObj = { ...user, appType: "bookingportals" };
    try {
      const respone = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: projectID,
          },
          body: JSON.stringify(bodyObj),
        }
      );
      const data = await respone.json();
      if (data.status == "fail") {
        return new Error("User already exists");
      }
      if (data.status == "success") {
        localStorage.setItem("authToken", JSON.stringify(data.token));
        const user = {
          name: data.data.user.name,
          email: data.data.user.email,
        };
        localStorage.setItem("userDetails", JSON.stringify(user));
        setIsLoggedIn(true);
        if (redirect) {
          setRedirect(false);
          navigate(redirectTo);
        }
      }
    } catch (error) {
      return error;
    }
  }
  async function logIn(user) {
    const bodyObj = { ...user, appType: "bookingportals" };
    try {
      const respone = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: projectID,
          },
          body: JSON.stringify(bodyObj),
        }
      );
      const data = await respone.json();
      if (data.status == "fail") {
        return new Error("Incorrect EmailId or Password");
      }
      if (data.status == "success") {
        localStorage.setItem("authToken", JSON.stringify(data.token));
        const user = { name: data.data.name, email: data.data.email };
        localStorage.setItem("userDetails", JSON.stringify(user));
        setIsLoggedIn(true);
        if (redirect) {
          setRedirect(false);
          navigate(redirectTo);
        }
      }
    } catch (error) {
      return error;
      // console.log(error);
    }
  }
  function logOut() {
    localStorage.setItem("authToken", null);
    localStorage.setItem("userDetails", null);
    setIsLoggedIn(false);
  }

  // On initial Render to Check if Auth Token already present
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
    logIn,
    signUp,
    logOut,
    redirect,
    setRedirect,
    redirectTo,
    setRedirectTo,
  };
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
