import React from "react";
import Navbar from "./Navbar";
import { GrGraphQl } from "react-icons/gr";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[12rem] p-[5rem] bg-[#161816] ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search skill"
          className=" border-none bg-white text-black outline p-4 rounded-full w-full"
        />
      </div>
      <div className="bg-[#F4F7F6] pb-[8rem] py-2 ">
        <div className="flex gap-3 justify-center  ">
          <div className="w-[16rem] h-[15rem] rounded-lg text-center p-2 bg-white">
            <div className="flex justify-center">
              <GrGraphQl className="text-[8rem]" />
            </div>
            <div className="p-2">
              <p className="py-2 font-extrabold text-[1.7rem]">GraphQL</p>
              <p>1 resource</p>
            </div>
          </div>
          <div className="w-[16rem] h-[15rem] rounded-lg text-center p-2 bg-white">
            <div className="flex justify-center">
              <RiReactjsFill className="text-[8rem]" />
            </div>
            <div className="p-2">
              <p className="py-2 font-extrabold text-[1.7rem]">ReactJs</p>
              <p>1 resource</p>
            </div>
          </div>
          <div className="w-[16rem] h-[15rem] rounded-lg text-center p-2 bg-white">
            <div className="flex justify-center">
              <IoLogoFirebase className="text-[8rem]" />
            </div>
            <div className="p-2">
              <p className="py-2 font-extrabold text-[1.7rem]">Firebase</p>
              <p>2 resource</p>
            </div>
          </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default Resources;
