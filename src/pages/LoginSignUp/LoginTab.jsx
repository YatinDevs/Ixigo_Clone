import { useRef, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import InputBoxRef from "../../components/InputBox/InputBoxRef";
import { useNavigate } from "react-router-dom";
import usePreviousUrl from "../../hooks/usePreviousUrl";

function LogInTab() {
  const { setShowLoginSignupForm, logIn } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const navigate = useNavigate();
  const prevUrl = usePreviousUrl();

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
        navigate(prevUrl || "/");
      }
    });
  }

  function removeError() {
    setErrorMessage("");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleLoginButton}>
      <h2 className="text-xl font-bold text-gray-800">Log in to ixigo</h2>
      <InputBoxRef
        label="Email"
        placeholder="Enter Email"
        id="email"
        type="text"
        onChange={removeError}
        ref={loginEmailRef}
        className=""
      />
      <InputBoxRef
        type="password"
        placeholder="Enter Password"
        onChange={removeError}
        ref={loginPasswordRef}
        className=""
        label="Password"
      />
      <button
        type="submit"
        onClick={handleLoginButton}
        className="bg-orange-500 py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
      >
        LOG IN
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
