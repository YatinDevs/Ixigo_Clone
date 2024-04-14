import { useRef, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Buttons/Button";
import InputBoxRef from "../../components/InputBox/InputBoxRef";

function SignUpTab() {
  const { setShowLoginSignupForm, signUp } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupConfirmPasswordRef = useRef();

  function handleSignUpButton(e) {
    e.preventDefault();
    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;
    const confirmPassword = signupConfirmPasswordRef.current.value;

    // Validation
    if (name === "") {
      setErrorMessage("Please Enter Your Name!");
      return;
    }
    if (email === "") {
      setErrorMessage("Please Enter Email!");
      return;
    }
    if (password === "") {
      setErrorMessage("Please Enter Password!");
      return;
    }
    if (confirmPassword === "") {
      setErrorMessage("Please Re-enter Password!");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords Don't Match!");
      return;
    }

    // Sign up
    signUp({ name, email, password }).then((res) => {
      if (res && res.message === "User already exists") {
        setErrorMessage("Account already exists on this email! Please Login.");
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
    <form className="flex flex-col md:gap-6" onSubmit={handleSignUpButton}>
      <h2 className="text-xs md:text-2xl font-thin  text-gray-800">
        Sign up to ixigo
      </h2>
      <InputBoxRef
        onChange={removeError}
        placeholder="Enter Name"
        ref={signupNameRef}
        className="input-field"
      />
      <InputBoxRef
        onChange={removeError}
        placeholder="Enter Email"
        ref={signupEmailRef}
        className="input-field"
      />
      <InputBoxRef
        onChange={removeError}
        ref={signupPasswordRef}
        placeholder="Enter Password"
        className="input-field"
        type="password"
      />
      <InputBoxRef
        onChange={removeError}
        ref={signupConfirmPasswordRef}
        placeholder="Confirm Password"
        className="input-field"
        type="password"
      />
      <button
        type="submit"
        onClick={handleSignUpButton}
        className="bg-orange-500 mx-16 my-5 md:mx-0  text-xs md:text-lg py-1 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
      >
        SIGN UP
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

export default SignUpTab;
