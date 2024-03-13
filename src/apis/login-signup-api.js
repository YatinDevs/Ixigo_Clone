import { projectID } from "../constants";

export async function signUp(user, setIsLoggedIn) {
  const bodyObj = { ...user, appType: "bookingportals" };
  try {
    const response = await fetch(
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
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error("User already exists");
    }
    if (data.status === "success") {
      localStorage.setItem("authToken", JSON.stringify(data.token));
      const userDetails = {
        name: data.data.user.name,
        email: data.data.user.email,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setIsLoggedIn(true);
    }
  } catch (error) {
    return error;
  }
}

export async function logIn(user, setIsLoggedIn) {
  const bodyObj = { ...user, appType: "bookingportals" };
  try {
    const response = await fetch(
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
    const data = await response.json();
    if (data.status === "fail") {
      throw new Error("Incorrect EmailId or Password");
    }
    if (data.status === "success") {
      localStorage.setItem("authToken", JSON.stringify(data.token));
      const userDetails = { name: data.data.name, email: data.data.email };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setIsLoggedIn(true);
    }
  } catch (error) {
    return error;
  }
}

export function logOut(setIsLoggedIn) {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userDetails");
  setIsLoggedIn(false);
}
