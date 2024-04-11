import { useRef, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";

function LogInTab() {
  const { setShowLoginSignupForm, logIn } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  async function handleLoginButton(e) {
    e.preventDefault();
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    // Validation
    if (email === "") {
      setErrorMessage("Please Enter Email!");
      return;
    }
    if (password === "") {
      setErrorMessage("Please Enter Password!");
      return;
    }

    // Log in
    logIn({ email, password }).then((res) => {
      if (res && res.message === "Incorrect EmailId or Password") {
        setErrorMessage("Incorrect EmailId or Password");
        return;
      } else {
        setShowLoginSignupForm(false);
      }
    });
  }

  function removeError() {
    setErrorMessage("");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleLoginButton}>
      <h2 className="text-xl font-bold text-gray-800">Log in to ixigo</h2>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={removeError}
        ref={loginEmailRef}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={removeError}
        ref={loginPasswordRef}
        className="input-field"
      />
      <button type="submit" className="button">
        Login
      </button>
      {errorMessage && (
        <div className="error-message">
          <BiSolidError className="error-icon" />
          {errorMessage}
        </div>
      )}
    </form>
  );
}

export default LogInTab;
