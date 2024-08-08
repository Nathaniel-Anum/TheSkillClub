import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div>
      <div className="bg- w-[14.3rem] h-[36.5rem] py-[2.3rem] bg-white flex flex-col gap-[4.5rem] justify-between fixed ">
        <div className="skill justify-center">
          <img
            className="nav-img"
            src="/src/assets/theskillclub-black (1).svg"
            alt=""
          />
          <span className="beta">BETA</span>
        </div>
        {/* Whole links div */}
        <div className=" flex flex-col  gap-8">
          <div className="flex items-center  px-[2.5rem]  gap-3 ">
            <AiOutlineHome />

            <p>Home</p>
          </div>
          <div className="flex items-center px-[2.5rem] gap-3">
            <CiUser />

            <p>Profile</p>
          </div>
          <div className="flex items-center px-[2.5rem]  gap-3">
            <div>
              <LuFileSpreadsheet />
            </div>

            <p>Assessments</p>
          </div>
          <div className="flex items-center  px-[2.5rem] gap-3">
            <MdOutlineMessage />
            <p>Messages</p>
          </div>
          <div className="flex items-center px-[2.5rem] gap-3">
            <AiOutlineHome />
            <p>Applied</p>
          </div>
          <div className="flex items-center px-[2.5rem] gap-3">
            <BsBriefcase />
            <p>Jobs</p>
          </div>
        </div>
        <div>
          <div className="flex items-center px-[2.5rem] gap-3">
            <IoSettingsOutline />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
