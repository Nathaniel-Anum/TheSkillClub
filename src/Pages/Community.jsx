import React from "react";
import Navbar from "./Navbar";
import Communit from "../assets/Community.svg";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Community = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[8rem] max-sm:px-0 max-sm:py-4">
        <div className="text-center p-4   ">
          <h2 className="text-[3rem] font-extrabold max-sm:text-[2rem]">
            Join our Community
          </h2>
          <p>We're your quickest way to get hired as a student.</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 max-sm:block md:block">
          <div>
            <img src={Communit} alt="" />
          </div>
          <div className="  max-sm:px-[2rem] ">
            <ol className=" list-disc flex flex-col gap-4 justify-center py-[4.5rem] md:text-[1.2rem]">
              <li>Get exclusive access to webinars with industry experts</li>
              <li> Connect with fellow talented students</li>
              <li> Get exclusive access to student events and fairs</li>
              <li>
                Get free and exclusive access to training and coupons to LMS
                platforms to upskill and get ready for the job market.
              </li>
              <li>
                Get your Resumes and cover letters reviewed from time to time at
                no cost
              </li>
              <li>
                Exclusive access to internship slots in the most sought after
                companies
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black text-white max-sm:text-[19px] md:text-[1.4rem] p-20 max-sm:p-2  rounded-t-[2.4rem]  ">
        <div className="text-center ">
          <h2 className="text-[6rem] max-sm:text-[3rem] font-extrabold">
            Join Community
          </h2>
          <p className="text-[1.2rem] max-sm:text-[1.4rem] md:text-[1.7rem]">
            We're your quickest way to get hired.
          </p>
          <div className="flex justify-center p-6">
            <button className="login-btn2 text-black ">Join Today</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 max-sm:gap-8 py-6">
          <div className=" flex flex-col gap-4 ">
            <p className="max-sm:text-[1.4rem] md:text-[2rem] lg:text-[1.3rem]  ">
              Most In-demand Talent
            </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>Web Developers</p>
            <p>Graphic Designer</p>
            <p>Data Scientist</p>
            <p>Mobile Developers</p>
            <p>Product Designer (UI/UX)</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p className="max-sm:text-[1.4rem] md:text-[2rem] lg:text-[1.3rem]">
              Services{" "}
            </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>Apply for a job</p>
            <p>Hire a talent</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p className="max-sm:text-[1.4rem] md:text-[2rem] lg:text-[1.3rem]">
              Links
            </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem] md:w-[20rem]"></div>
            <p>Events</p>
            <p>For Companies</p>
            <p>Contact Us</p>
            <p>Join Community</p>
          </div>
          <div className=" flex flex-col gap-4  pb-2 ">
            <p className="max-sm:text-[1.4rem] md:text-[2rem] lg:text-[1.3rem]">
              Resources
            </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>ReactJs</p>
            <p>NextJs</p>
            <p>Figma</p>
            <p>Flutter</p>
          </div>
          <div className=" pb-10 ">
            <p className="pb-3 max-sm:text-[1.4rem] md:text-[2rem] lg:text-[1.3rem] ">
              Socials
            </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem] md:w-[20rem] "></div>
            <div className="flex gap-8 text-[2rem] pt-3">
              <IoLogoTwitter />
              <IoLogoInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="bg-white h-[0.01rem] w-full max-sm:hidden  "></div>
        <div className="  lg:flex justify-between py-3  ">
          <div className="flex justify-center pb-4">
            <div className="flex items-center gap-[5px]">
              <img
                className="nav-img"
                src="/src/assets/theskillclub.svg"
                alt=""
              />
              <span className="beta">BETA</span>
            </div>
          </div>
          <div className="gap-3 lg:flex text-center py-4 lg:py-0">
            <p className="pb-2">
              Copyright©2024 theSkillClub. All right reserved.
            </p>
            <p className="pb-2"> Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
