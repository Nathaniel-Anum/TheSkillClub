import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UseUser";

const DasboardNav = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/");
    setUser(null);
  }
  return (
    <div className=" fixed w-full  mb-[8rem]">
      <div className="py-6 px-[3.2rem]  flex justify-end">
        <div className="flex items-center  gap-3 ">
          <IoIosNotificationsOutline className="text-[2rem]" />
          <button className="login-btn3 text-black " onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DasboardNav;
