import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import loginSignupImg from "../../assets/images/loginsignup/login-signup-banner.png";
import LoginTab from "./LoginTab";
import SignUpTab from "./SignUpTab";

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-2">{children}</div>}
    </div>
  );
}

function LoginForm() {
  const [tab, setTab] = useState(0);
  const handleTabSwitch = (newValue) => {
    setTab(newValue);
  };
  const { setShowLoginSignupForm, signUp } = useAuthContext();

  return (
    <div className="">
      <div className="flex mx-auto">
        <img
          className="w-1/3 rounded-l-lg"
          src={loginSignupImg}
          alt="Login/Signup"
        />
        <div className="w-full md:px-10 md:py-2">
          <div className="flex">
            <div
              onClick={() => handleTabSwitch(0)}
              className={`flex-1  py-2 px-2 md:py-3 md:px-4 text-xs md:text-lg text-center border-b-2 ${
                tab === 0
                  ? "border-orange-600 text-orange-600"
                  : "text-slate-500"
              } cursor-pointer`}
            >
              LOGIN
            </div>
            <div
              onClick={() => handleTabSwitch(1)}
              className={`flex-1 py-2 px-2 md:py-3 md:px-4 text-xs md:text-lg text-center border-b-2 ${
                tab === 1
                  ? "border-orange-600 text-orange-600"
                  : "text-slate-500"
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
    </div>
  );
}

export default LoginForm;
