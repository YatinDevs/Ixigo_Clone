import React, { useState } from "react";
import CustomInputBox from "../../../components/CustomInputBox/CustomInputBox";
import { useAuthContext } from "../../../context/AuthProvider/AuthProvider";
import { COUNTRIES } from "../../../constants";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

function UserDetails({ finalfare }) {
  const { userDetails } = useAuthContext();
  console.log(userDetails);
  const [title, setTitle] = useState("Mr.");
  const [users, setUsers] = useState([]);
  const [userDetailsLocal, setUserDetailsLocal] = useState({
    name: userDetails?.name || "",
    email: userDetails?.email || "",
    billingAddress: "",
    pincode: "",
    state: "",
    gender: "",
    nationality: "",
  });

  const [travellers, setTravellers] = useState(0);

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

  const handleAddTraveller = () => {
    setTravellers((prev) => prev + 1);
    setUsers((prevUsers) => [...prevUsers, userDetailsLocal]);
    setUserDetailsLocal({
      name: userDetails?.name || "",
      email: userDetails?.email || "",
      billingAddress: "",
      pincode: "",
      state: "",
      gender: "",
      nationality: "",
    });
  };
  console.log(users);
  const handleDeleteTraveller = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };
  const navigate = useNavigate();

  const handlePayment = (e) => {
    const encodedPrice = btoa(JSON.stringify(finalfare * users.length + 1));
    setTimeout(() => {
      navigate(`payment--${encodedPrice}`);
    }, 1000);
  };
  return (
    <>
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
              value={userDetailsLocal.nationality}
              onChange={(e) => handleInputChange("nationality", e.target.value)}
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

        <div className="flex flex-col text-xs md:text-lg md:flex-row gap-5">
          <CustomInputBox
            label="State"
            className="w-full"
            placeholder="State"
            value={userDetailsLocal.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          />
          <CustomInputBox
            label="Billing Address"
            className="w-full"
            placeholder="Billing Address"
            value={userDetailsLocal.billingAddress}
            onChange={(e) =>
              handleInputChange("billingAddress", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col text-xs md:text-lg md:flex-row gap-5">
          <CustomInputBox
            label="Pincode"
            className="w-full"
            placeholder="Pincode"
            value={userDetailsLocal.pincode}
            onChange={(e) => handleInputChange("pincode", e.target.value)}
          />
          <div className="w-full relative">
            <label
              htmlFor="gender"
              className={`absolute -top-2 left-3 px-1 text-xs md:text-lg rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] z-[2]`}
            >
              Gender
            </label>
            <select
              id="gender"
              value={userDetailsLocal.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="mt-1 block w-full text-xs md:text-lg py-2 px-4 md:py-4 md:px-4 border  hover:border-orange-500  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <Button
            type={`Add Traveller`}
            handleClick={handleAddTraveller}
            className="bg-orange-500 w-full rounded-md  shadow-md text-white hover:bg-orange-600 cursor-pointer py-2 md:py-2 px-4  md:px-6 "
          />
        </div>
        <UserList users={users} onDelete={handleDeleteTraveller} />
      </div>
      <div className="mt-2 flex justify-center items-center">
        <Button
          type={<span>PAY : &#x20B9; {finalfare * users.length + 1}</span>}
          handleClick={handlePayment}
          className="bg-orange-500  rounded-md  shadow-md text-white hover:bg-orange-600 cursor-pointer py-2 md:py-2 px-4  md:px-6 "
        />
      </div>
    </>
  );
}

export default UserDetails;

const UserList = ({ users, onDelete }) => {
  return (
    <div className="mx-2 flex gap-2 flex-col ">
      {users.map((user, index) => (
        <div
          key={index}
          className="flex flex-col text-xs md:text-md gap-1 h-[200px] border border-gray-300 p-4 rounded-md"
        >
          <div className="flex justify-between  items-center">
            <h3 className="text-lg font-semibold">{`Traveller ${
              index + 1
            }`}</h3>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 font-semibold hover:text-red-700"
            >
              Delete
            </button>
          </div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Nationality:</strong> {user.nationality}
          </p>
          <p>
            <strong>State:</strong> {user.state}
          </p>
          <p>
            <strong>Billing Address:</strong> {user.billingAddress}
          </p>
          <p>
            <strong>Pincode:</strong> {user.pincode}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
      ))}
    </div>
  );
};
