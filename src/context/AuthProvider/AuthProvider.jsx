import React, { createContext, useContext, useEffect, useState } from "react";
import { projectID } from "../../constants";
import { useNavigate, useLocation } from "react-router-dom";

// Creating context
const AuthContext = createContext();
// AuthProvider component
export default function AuthProvider({ children }) {
  const [showLoginSignupForm, setShowLoginSignupForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const [previousPath, setPreviousPath] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
      console.log(data);
      if (data.status === "fail") {
        return new Error("User already exists");
      }
      if (data.status === "success") {
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
        } else {
          navigate(previousPath || "/");
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
      if (data.status === "fail") {
        return new Error("Incorrect EmailId or Password");
      }
      if (data.status === "success") {
        localStorage.setItem("authToken", JSON.stringify(data.token));
        const user = { name: data.data.name, email: data.data.email };
        localStorage.setItem("userDetails", JSON.stringify(user));
        setIsLoggedIn(true);
        if (redirect) {
          setRedirect(false);
          navigate(redirectTo);
        } else {
          navigate(previousPath || "/");
        }
      }
    } catch (error) {
      return error;
    }
  }

  function logOut() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDetails");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    const JWT = JSON.parse(localStorage.getItem("authToken"));
    if (JWT) {
      setIsLoggedIn(true);
    }
    setPreviousPath(location.pathname);
  }, [location.pathname]);

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
    userDetails: JSON.parse(localStorage.getItem("userDetails")),
  };

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
