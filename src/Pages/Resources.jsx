import React from "react";
import Navbar from "./Navbar";
import { GrGraphQl } from "react-icons/gr";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[12rem] p-[8rem] bg-[#161816] ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search skill"
          className=" border-none bg-white text-black outline p-4 rounded-full w-full"
        />
      </div>
      <div className="bg-[#F4F7F6] py-[13rem]">
        <div className=" ">
          <div className=" relative">
            <div className="flex gap-5 justify-center absolute right-[12rem] -top-[15.4rem] cursor-pointer">
              <div className="w-[17.2rem] h-[16.5rem] rounded-lg text-center p-2 bg-white  hover:scale-110 hover:duration-500 hover:bg-black hover:text-white hover:outline ">
                <div className="flex justify-center">
                  <GrGraphQl className="text-[7rem]" />
                </div>
                <div className="p-2">
                  <p className="py-2 font-extrabold text-[1.7rem]">GraphQL</p>
                  <p>1 resource</p>
                </div>
              </div>
              <div className="w-[17.2rem] h-[16.5rem] rounded-lg text-center p-2 bg-white  hover:scale-110 hover:duration-500 hover:bg-black hover:text-white hover:outline  ">
                <div className="flex justify-center ">
                  <RiReactjsFill className="text-[7rem]" />
                </div>
                <div className="p-2">
                  <p className="py-2 font-extrabold text-[1.7rem]">ReactJs</p>
                  <p>1 resource</p>
                </div>
              </div>
              <div className="w-[17.2rem] h-[16.5rem] rounded-lg text-center p-2 bg-white  hover:scale-110 hover:duration-500  hover:bg-black hover:text-white hover:outline ">
                <div className="flex justify-center">
                  <IoLogoFirebase className="text-[7rem]" />
                </div>
                <div className="p-2">
                  <p className="py-2 font-extrabold text-[1.7rem]">Firebase</p>
                  <p>2 resource</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black text-white p-20 rounded-t-[2.4rem] ">
        <div className="text-center">
          <h2 className="text-[6rem] font-extrabold">Join Community</h2>
          <p className="text-[1.2rem]">We're your quickest way to get hired.</p>
          <div className="flex justify-center p-6">
            <button className="login-btn2 text-black ">Join Today</button>
          </div>
        </div>
        <div className="grid grid-cols-5 py-6">
          <div className=" flex flex-col gap-4 ">
            <p>Most In-demand Talent</p>
            <div className="bg-white h-[0.01rem] w-[10rem]"></div>
            <p>Web Developers</p>
            <p>Graphic Designer</p>
            <p>Data Scientist</p>
            <p>Mobile Developers</p>
            <p>Product Designer (UI/UX)</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p>Services </p>
            <div className="bg-white h-[0.01rem] w-[10rem]"></div>
            <p>Apply for a job</p>
            <p>Hire a talent</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p>Links</p>
            <div className="bg-white h-[0.01rem] w-[10rem]"></div>
            <p>Events</p>
            <p>For Companies</p>
            <p>Contact Us</p>
            <p>Join Community</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p>Resources</p>
            <div className="bg-white h-[0.01rem] w-[10rem]"></div>
            <p>ReactJs</p>
            <p>NextJs</p>
            <p>Figma</p>
            <p>Flutter</p>
          </div>
          <div className="  ">
            <p className="pb-3">Socials</p>
            <div className="bg-white h-[0.01rem] w-[10rem] "></div>
            <div className="flex gap-8 text-[2rem] pt-3">
              <IoLogoTwitter />
              <IoLogoInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="bg-white h-[0.01rem] w-full  "></div>
        <div className="  flex justify-between py-3 ">
          <div>
            <div className="skill">
              <img
                className="nav-img"
                src="/src/assets/theskillclub.svg"
                alt=""
              />
              <span className="beta">BETA</span>
            </div>
          </div>
          <div className="flex gap-3">
            <p>Copyright©2024 theSkillClub. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
