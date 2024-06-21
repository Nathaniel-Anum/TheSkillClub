import React from "react";
import Navbar from "./Navbar";
import Lottie from "react-lottie";
import Email from "../assets/json/Animation - 1718960549152.json";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Email,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Navbar />
      <div className="py-6">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
      <div className="text-center pb-[4rem]">
        <h2 className=" font-extrabold text-[3.3rem]">Get in touch</h2>
        <p className="text-[19px] p-2">Talk to us via +233544813264</p>
        <p className="text-[19px]">
          Or send us a mail via{" "}
          <span className="font-semibold">support@theskill.club</span>
        </p>
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

export default Contact;
