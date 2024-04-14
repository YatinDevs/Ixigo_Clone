import { useRef, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Buttons/Button";

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
    <form className="flex flex-col gap-6" onSubmit={handleSignUpButton}>
      <h2 className="text-xl font-bold text-gray-800">Sign up to ixigo</h2>
      <InputBox
        onChange={removeError}
        placeholder="Enter Name"
        ref={signupNameRef}
        className="input-field"
      />
      <InputBox
        onChange={removeError}
        placeholder="Enter Email"
        ref={signupEmailRef}
        className="input-field"
      />
      <InputBox
        onChange={removeError}
        ref={signupPasswordRef}
        placeholder="Enter Password"
        className="input-field"
        type="password"
      />
      <InputBox
        onChange={removeError}
        ref={signupConfirmPasswordRef}
        placeholder="Confirm Password"
        className="input-field"
        type="password"
      />
      <Button
        type="SignUp"
        handleClick={handleSignUpButton}
        className="bg-orange-500 py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
      >
        SignUp
      </Button>
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
