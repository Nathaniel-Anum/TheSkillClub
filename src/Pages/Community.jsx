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
      <div className="px-[8rem]">
        <div className="text-center p-4   ">
          <h2 className="text-[3rem] font-extrabold">Join our Community</h2>
          <p>We're your quickest way to get hired as a student.</p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img src={Communit} alt="" />
          </div>
          <div className="">
            <ol className=" list-disc flex flex-col gap-4 justify-center py-[4.5rem]">
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
          <img className="nav-img" src="/src/assets/theskillclub.svg" alt="" />
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

export default Community;
