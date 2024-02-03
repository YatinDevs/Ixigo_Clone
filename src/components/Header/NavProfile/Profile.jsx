import React from "react";
import { RxAvatar } from "react-icons/rx";

function Profile() {
  return (
    <>
      <div className="border border-solid border-orange-500 rounded-lg flex truncate flex-auto items-center  w-[168px] h-11 px-[10px] gap-2 m-3  cursor-pointer max-sm:w-fit">
        <img
          src="https://edge.ixigo.com/st/nivas/_next/static/media/userFilled.12154510.svg"
          className=" inline-block w-6 h-6 nav-service-logo text-orange-500 rounded-full bg-blue-100"
        />
        <span className="text-orange-500 font-medium text-xs md:text-md text-ellipsis">
          LOGIN/SIGNUP
        </span>
      </div>
    </>
  );
}

export default Profile;
