import React from "react";

export default function SingupTab() {
  const { setShowLoginSignupForm, signUp } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorMesaage, setErrorMessage] = useState("");
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupConfirmPasswordRef = useRef();
  function handleSignUpButton(e) {
    e.preventDefault();
    if (signupNameRef.current.value == "") {
      setErrorMessage("Please Enter Your Name!");
      signupNameRef.current.focus();
      setAnchorEl(signupNameRef.current);
      return;
    }
    if (signupEmailRef.current.value == "") {
      setErrorMessage("Please Enter Email!");
      signupEmailRef.current.focus();
      setAnchorEl(signupEmailRef.current);
      return;
    }
    if (!isValidEmail(signupEmailRef.current.value)) {
      setErrorMessage("Invalid Email! Please Enter Valid Email.");
      signupEmailRef.current.focus();
      setAnchorEl(signupEmailRef.current);
      return;
    }
    if (signupPasswordRef.current.value == "") {
      setErrorMessage("Please Enter Password!");
      signupPasswordRef.current.focus();
      setAnchorEl(signupPasswordRef.current);
      return;
    }
    if (signupConfirmPasswordRef.current.value == "") {
      setErrorMessage("Please Re-enter Password!");
      signupConfirmPasswordRef.current.focus();
      setAnchorEl(signupConfirmPasswordRef.current);
      return;
    }
    if (
      signupPasswordRef.current.value != signupConfirmPasswordRef.current.value
    ) {
      setErrorMessage("Passwords Don't Match!");
      signupConfirmPasswordRef.current.focus();
      setAnchorEl(signupConfirmPasswordRef.current);
      return;
    }
    const user = {
      name:
        signupNameRef.current.value.at(0).toUpperCase() +
        signupNameRef.current.value.substring(1),
      email: signupEmailRef.current.value,
      password: signupPasswordRef.current.value,
    };
    signUp(user).then((res) => {
      if (res && res.message == "User already exists") {
        setErrorMessage("Account already exists on this email! Please Login.");
        signupEmailRef.current.focus();
        setAnchorEl(signupEmailRef.current);
        return;
      } else {
        setShowLoginSignupForm(false);
      }
    });
  }
  function removeError() {
    setErrorMessage("");
    setAnchorEl(null);
  }
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      onSubmit={handleSignUpButton}
    >
      <Typography variant="h5" component="h2" color={"rgba(0,0,0,0.87)"}>
        Sign up to ixigo
      </Typography>
      <TextField
        onChange={removeError}
        label="Enter Name"
        inputRef={signupNameRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        label="Enter Email"
        inputRef={signupEmailRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        inputRef={signupPasswordRef}
        label="Enter Password"
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <TextField
        onChange={removeError}
        inputRef={signupConfirmPasswordRef}
        label="Confirm Password"
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <Button type="submit" sx={{ ...buttonSX }}>
        SignUp
      </Button>
      <Box>
        <Typography variant="caption" color="rgba(0,0,0,0.74)">
          By signing up, I understand & agree to ixigo terms of use and privacy
          policy
        </Typography>
        <br />
        <Typography variant="caption" color="rgba(0,0,0,0.74)">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Typography>
      </Box>
      <Popper
        placement="bottom-start"
        open={anchorEl != null}
        anchorEl={anchorEl}
        sx={{ zIndex: 2000 }}
      >
        <Box sx={{ ...popperSX }}>
          <BiSolidError size="15px" />{" "}
          <Typography fontSize={12}>{errorMesaage}</Typography>
        </Box>
      </Popper>
    </form>
  );
}
