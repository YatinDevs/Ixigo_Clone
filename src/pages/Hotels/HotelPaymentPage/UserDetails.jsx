import React, { useState } from "react";
import CustomInputBox from "../../../components/CustomInputBox/CustomInputBox";
import { useAuthContext } from "../../../context/AuthProvider/AuthProvider";
import { COUNTRIES } from "../../../constants";

function UserDetails() {
  const { userDetails } = useAuthContext();
  console.log(userDetails);
  const [title, setTitle] = useState("Mr.");
  const [userDetailsLocal, setUserDetailsLocal] = useState({
    name: userDetails?.name || "",
    email: userDetails?.email || "",
  });

  const [nationality, setNationality] = useState("");

  const handleInputChange = (key, value) => {
    setUserDetailsLocal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };
  return (
    <div className="px-5 md:px-10 py-5  text-xs md:text-lg flex flex-col gap-5 bg-white  border rounded-md">
      <h1 className="text-lg md:text-2xl font-bold">Enter Your Details</h1>
      <div className="relative w-full ">
        <label
          htmlFor={"id"}
          className={`absolute -top-2  text-xs md:text-lg left-3 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px]  z-[2]`}
        >
          Title
        </label>
        <select
          value={title}
          onChange={handleTitleChange}
          className="mt-1 block w-full text-xs md:text-lg py-2 px-4 md:py-4 md:px-4 border  hover:border-orange-500  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        >
          {["Mr.", "Mrs.", "Miss."].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-xs md:text-lg md:flex-row gap-5">
        <CustomInputBox
          label="First Name"
          className="w-full"
          placeholder="First Name text-xs md:text-lg"
          value={userDetailsLocal.name.split(" ")[0]}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <CustomInputBox
          label="Last Name"
          className="w-full text-xs md:text-lg"
          placeholder="Last Name"
          value={userDetailsLocal.name.split(" ")[1]}
          onChange={(e) =>
            handleInputChange(
              "name",
              userDetailsLocal.name.split(" ")[0] + " " + e.target.value
            )
          }
        />
      </div>
      <div className="flex flex-col text-xs md:text-lg md:flex-row gap-5">
        <CustomInputBox
          label="Email Address"
          className="w-full text-xs md:text-lg"
          placeholder="Email Address"
          value={userDetailsLocal.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        <div className="relative w-full ">
          <label
            htmlFor={"id"}
            className={`absolute -top-2 left-3 px-1 text-xs md:text-lg rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] z-[2]`}
          >
            Nationality
          </label>
          <select
            value={nationality}
            onChange={handleNationalityChange}
            className="mt-1 block w-full text-xs md:text-lg  py-2 px-4 md:py-4 md:px-4 border  hover:border-orange-500  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          >
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
