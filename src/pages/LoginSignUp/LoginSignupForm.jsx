import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import loginSignupImg from "../../assets/images/loginsignup/login-signup-banner.png";
import LoginTab from "./LoginTab";
import SignUpTab from "./SignUpTab";

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-4">{children}</div>}
    </div>
  );
}

function LoginSignUpForm() {
  const [tab, setTab] = useState(0);
  const handleTabSwitch = (newValue) => {
    setTab(newValue);
  };
  const { setShowLoginSignupForm, signUp } = useAuthContext();

  return (
    <div className="flex mx-auto">
      <img
        className="w-1/3 rounded-l-lg"
        src={loginSignupImg}
        alt="Login/Signup"
      />
      <div className="w-full px-10 py-2">
        <div className="flex">
          <div
            onClick={() => handleTabSwitch(0)}
            className={`flex-1 py-3 px-4 text-center border-b-2 ${
              tab === 0 ? "border-orange-600 text-orange-600" : "text-slate-500"
            } cursor-pointer`}
          >
            LOGIN
          </div>
          <div
            onClick={() => handleTabSwitch(1)}
            className={`flex-1 py-3 px-4 text-center border-b-2 ${
              tab === 1 ? "border-orange-600 text-orange-600" : "text-slate-500"
            } cursor-pointer`}
          >
            SIGNUP
          </div>
        </div>
        <CustomTabPanel value={tab} index={0}>
          <LoginTab />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <SignUpTab />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default LoginSignUpForm;
