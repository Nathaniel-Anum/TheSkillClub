import React from "react";
import Sidebar from "./Sidebar";
import DasboardNav from "./DashboardNav";
import { BsBriefcase } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { useUser } from "../UseUser";

const Dashboard = () => {
  const {user} = useUser();
  return (
    <div className="bg-[#F0F5F3]">
      <div>
        <DasboardNav />
        <Sidebar />
      </div>
      <div className="px-[15rem] pt-[6rem] h-[36rem]">
        <div className="w-[64.2rem] h-[0.14rem] bg-white"></div>
        <div className="pt-2 pl-4">
          <h2 className="font-bold text-[1.6rem]">  Howdy, {user?.name.split(" ")[0]}</h2>
        </div>
        <div className="pt-2 pl-2  grid grid-cols-4 gap-4 w-[64rem] ">
          <div className="bg-white h-[9rem] w-[15rem] rounded-lg flex  items-center gap-5 ">
            <div className=" pl-[2rem] pr-6">
              <p className="font-bold text-[2.5rem]">00</p>
              <p className=" text-[13px]">Applied Jobs</p>
            </div>
            <div className="bg-[#7EED5E] rounded-full h-[3rem] w-[3rem] flex items-center justify-center ">
              <BsBriefcase className="text-[1.5rem]" />
            </div>
          </div>
          <div className="bg-white h-[9rem] w-[15rem] rounded-lg flex  items-center gap-5 ">
            <div className=" pl-[2rem]">
              <p className="font-bold text-[2.5rem]">00</p>
              <p className=" text-[13px]">Scheduled Interviews</p>
            </div>
            <div className="bg-[#7EED5E] rounded-full h-[3rem] w-[3rem] flex items-center justify-center ">
              <CiCalendar className="text-[1.5rem]" />
            </div>
          </div>
          <div className="bg-white h-[9rem] w-[15rem] rounded-lg flex  items-center gap-5  ">
            <div className=" pl-[2rem] pr-7">
              <p className="font-bold text-[2.5rem]">00</p>
              <p className=" text-[13px]">Messages</p>
            </div>
            <div className="bg-[#7EED5E] rounded-full h-[3rem] w-[3rem] flex items-center justify-center ">
              <MdOutlineMessage className="text-[1.5rem]" />
            </div>
          </div>
          <div className="bg-white h-[9rem] w-[15rem] rounded-lg flex  items-center gap-5 ">
            <div className=" pl-[2rem]">
              <p className="font-bold text-[2.5rem]">00</p>
              <p className=" text-[13px]">Assessment Left</p>
            </div>
            <div className="bg-[#7EED5E] rounded-full h-[3rem] w-[3rem] flex items-center justify-center ">
              <LuFileSpreadsheet className="text-[1.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
