import React from "react";

function LoginTab() {
  const { setShowLoginSignupForm, logIn } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorMesaage, setErrorMessage] = useState("");
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const loginButtonRef = useRef();
  async function handleLoginButton(e) {
    e.preventDefault();
    if (loginEmailRef.current.value === "") {
      setErrorMessage("Please Enter Email!");
      loginEmailRef.current.focus();
      setAnchorEl(loginEmailRef.current);
      return;
    }
    if (!isValidEmail(loginEmailRef.current.value)) {
      setErrorMessage("Invalid Email! Please Enter Valid Email.");
      loginEmailRef.current.focus();
      setAnchorEl(loginEmailRef.current);
      return;
    }
    if (loginPasswordRef.current.value === "") {
      setErrorMessage("Please Enter Password!");
      loginPasswordRef.current.focus();
      setAnchorEl(loginPasswordRef.current);
      return;
    }
    const user = {
      email: loginEmailRef.current.value,
      password: loginPasswordRef.current.value,
    };
    logIn(user).then((res) => {
      if (res && res.message == "Incorrect EmailId or Password") {
        setErrorMessage("Incorrect EmailId or Password");
        // loginEmailRef.current.focus();
        setAnchorEl(loginButtonRef.current);
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
      onSubmit={handleLoginButton}
      style={{ display: "flex", flexDirection: "column", gap: "24px" }}
    >
      <Typography variant="h5" component="h2" color={"rgba(0,0,0,0.87)"}>
        Log in to ixigo
      </Typography>
      <TextField
        label="Enter Email"
        onChange={removeError}
        type="text"
        inputRef={loginEmailRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        label="Enter Password"
        inputRef={loginPasswordRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <Button ref={loginButtonRef} type="submit" sx={{ ...buttonSX }}>
        Login
      </Button>
      <Box sx={{ mt: 2 }}>
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
        disablePortal
        placement="bottom-start"
        open={anchorEl != null}
        anchorEl={anchorEl}
        sx={{ zIndex: 2000 }}
      >
        <Box
          sx={{
            ...popperSX,
            mt: anchorEl === loginButtonRef.current ? 1.5 : 0,
          }}
          textAlign={"center"}
        >
          <BiSolidError size="15px" />{" "}
          <Typography fontSize={12}>{errorMesaage}</Typography>
        </Box>
      </Popper>
    </form>
  );
}

export default LoginTab;
