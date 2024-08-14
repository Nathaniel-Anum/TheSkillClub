import { Typewriter } from "react-simple-typewriter";
import hire1 from "../../src/assets/hire-talent_bc0btw.webp";
import hire2 from "../../src/assets/job_card.webp";
import { useState } from "react";
import tabari from "../assets/Tabari.webp";
import oguneleye from "../assets/Ogunleye.webp";
import tsikata from "../assets/Tsikata.jpeg";
import blank from "../assets/blank.webp";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  const jobs = [
    {
      title: "Hire Talents",
      description:
        "Are you hiring for long term, contract based or for an internship program? Our dashboard gives you the ability to scout through thousand's of young, skilled and vetted talents to cater for company's human resource needs and your needs. ",
      img: hire1,
    },
    {
      title: "Post A Job",
      description:
        "Want to post a role so talents can out to you and not you scouting through our suggestions of the right fit for your needs? We got you covered. Our dashboard gives you the ability to post job, and follow through the process till the onboarding stage",
      img: hire2,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(jobs[0]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const handleClick = (job) => {
    setSelectedItem(job);
  };

  const titles = [
    "Web Developer",
    "Mobile Developer",
    "Product Designer",
    "Graphic Designer",
  ];

  const teams = [
    { title: "Web Developer", name: "Tabari Linus", img: tabari },
    { title: "Web Developer", name: "Ogunleye Emmanuel", img: oguneleye },
    { title: "Web Developer", name: "Tsikata Klenam Aku", img: tsikata },
    { title: "Mobile Developer", name: "Michael Quam Donkor", img: blank },
    { title: "Mobile Developer", name: "Adu-Acheampong Winfred", img: blank },
    { title: "Mobile Developer", name: "Norbert Aberor", img: blank },
    { title: "Product Designer", name: "George Antwi-Agyei", img: blank },
    { title: "Product Designer", name: "Arnold Mark Marowa", img: blank },
    { title: "Product Designer", name: "Siraat Hussein", img: blank },
    { title: "Graphic Designer", name: "Nathaniel Ankomah Aidoo", img: blank },
    { title: "Graphic Designer", name: "Prince Nedjoh", img: blank },
    { title: "Graphic Designer", name: "Kelvin Yesutor", img: blank },
  ];

  const handleTitle = (title) => {
    setSelectedTitle(title);
    console.log(selectedTitle);
  };

  const filteredTeam = selectedTitle
    ? teams.filter((team) => team.title === selectedTitle)
    : teams.filter((team) => team.title === titles[0]);
  console.log(filteredTeam);

  console.log(filteredTeam);
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div
          className="btn-holder lg:hidden md:py-[7rem] "
          onClick={handleNavigate}
        >
          <button className="hero-btn ">
            <div className="p-text33 md:text-[22px]">
              <p>Hire Talents</p>
            </div>
          </button>
        </div>
        <div className="max-sm:py-[1rem] md:py-[4rem]">
          <p className="hero-text max-sm:text-[2rem] md:text-[7rem] ">
            Are you a
          </p>
          <p className="p-text2  max-sm:text-[2rem] md:text-[7rem]">
            <Typewriter
              words={[
                "Developer?",
                "Product Designer?",
                "Content Creator?",
                "Social Media Manager?",
                "Writer?",
                "Graphic Designer?",
              ]}
              loop={0}
              cursor
              cursorStyle="I"
              typeSpeed={200}
              delaySpeed={100}
              deleteSpeed={100}
            />
          </p>
          <div className=" max-sm:py-6">
            <p className="p-text3 max-sm:text-[1.7rem] md:text-[2.3rem]">
              Gain work experience, mentorship
            </p>
            <p className="p-text4 max-sm:text-[1.7rem] md:text-[2.3rem]">
              & Get Paid whilst doing it.
            </p>
          </div>
        </div>
        <div className=" ">
          {/* <div className="input-signup  ">
            <div className="input-border  max-sm:px-2 md:px-2 lg:px-[3rem]">
              <input type="text" placeholder="Your email" />
              <button className="login-btn2 max-sm:py-[10px] ">Sign Up</button>
            </div>
          </div> */}
          <div className="flex justify-center border-[3px] border-3 border-white py-[12px] mx-[3rem] md:mx-[14rem] lg:mx-[34rem] rounded-full ">
            <input
              type="text"
              placeholder="Your Email"
              className="  lg:px-[6rem]  md:px-[2.7rem]"
            />
            <button className="border-none bg-gradient-to-r from-[#f3f30f] via-[#d6f700] via-[#b5fa00] via-[#8cfd00] to-[#4eff00] font-medium px-[18px] py-[5px] rounded-full cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="second-phase">
        <h3 className="text-center  text-[42px] max-sm:text-[33px] md:text-[49px] font-bold">
          Our Modes
        </h3>
        <p className="text-center max-sm:text-[20px] max-sm:px-6 md:text-[22px] pb-[40px]">
          You are allowed to select a mode when setting up your Profile
        </p>
        <div className="lg:px-[240px] md:px-[74px] max-sm:px-[40px] py-[0]">
          <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-2 gap-[20px] ">
            <div className="bg-[white] text-[15px]">
              <img
                className="w-full h-[170px]"
                src="/src/assets/Entry.webp"
                alt=""
              />
              <div>
                <div
                  className="px-[40px] py-[20px]
"
                >
                  <h4>Entry Level (Integrate)</h4>
                </div>
                <div>
                  <p className="px-[20px] py-0 leading-[23px]">
                    This mode is only available for university seniors and fresh
                    graduates.. It is designed for companies (Startups) looking
                    to hire talented students in their final year/fresh
                    graduates and steadily integrate them into their workforce.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[white] text-[14px]">
              <img
                className="w-full h-[170px]"
                src="/src/assets/Internship.webp"
                alt=""
              />
              <div>
                <div className="px-[40px] py-[20px]">
                  <h4>Internship</h4>
                </div>
                <div>
                  <p className="px-[20px] py-0 leading-[23px]">
                    This mode is only available for university seniors and fresh
                    graduates looing for paid internship opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[white] text-[14px]">
              <img
                className="w-full h-[170px]"
                src="/src/assets/Contract.webp"
                alt=""
              />
              <div>
                <div className="px-[40px] py-[20px]">
                  <h4>Contract</h4>
                </div>
                <div className="px-[20px] py-0 leading-[23px]">
                  <p>
                    Selecting this mode will aid us in matching you up with
                    projects that need talents within a specific time frame.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[190px] max-sm:px-[40px] max-sm:py-[20px] py-[50px]">
        <div className="px-[0] py-[50px] lg:grid md:block max-sm:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px]">
          <div>
            <div>
              <h4 className="flex justify-center text-[60px] max-sm:text-[36px] py-[20px] font-extrabold ">
                Why Join?
              </h4>
            </div>
            <div className="parent-div ">
              <img src="../../src/assets/why-join.webp" alt="" />
              <div className="empty-div ">Brookes</div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[20px] py-[12px]">
                Are you a university student or a graduate that is skilled in
                your craft but not employed yet? If you answer yes to this, then
                you're the perfect fit for this platform.
              </p>
            </div>
            <div>
              <p className="text-[20px] py-[12px]">
                theskill.club is built to serve as a bridge to connect authentic
                talent with Startups/Companies in need of talent to build or
                work on their projects remotely.
              </p>
            </div>
            <div>
              <p className="text-[20px] py-[12px]">
                When you sign up to be matched up with a company, you get to
                work in teams with experienced professionals. You'll be mentored
                by them and get paid what you deserve.
              </p>
            </div>
            <div className="px-[10px] py-[20px] text-center">
              <button className="login-btn3">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[black] text-[white] pt-[30px] lg:pb-[200px] md:pb-[50px] max-sm:pb-[50px]">
        <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-1 max-sm:grid-cols-1 ">
          <div className="px-[90px] py-[20px] max-sm:px-[23px] ">
            <div className="">
              <h2 className="text-[32px] md:text-center md:text-[49px] md:font-semibold py-[10px]">
                Startup/Company?
              </h2>
              <p className="text-[22px]  max-sm:text-[19px]">
                Interested in hiring vetted talents for both technical &
                non-technical roles?
                <p>You're at the right place.</p>
              </p>
              <p className="py-[30px] text-[22px] max-sm:text-[19px]">
                theskill.club dashboard furnishes your HR department with a
                database of vetted young and vibrant talent they can scout.
              </p>
              <p className="py-[30px] text-[22px] max-sm:text-[19px]">
                Are you hiring for long term, contract based or for an
                internship program? Our Modes will take care of your needs
                whiles making available to you the right candidate
              </p>
            </div>
          </div>
          <div className=" relative md:hidden lg:block max-sm:hidden ">
            <img
              src="../../src/assets/image-one_pdia2v.png"
              className="absolute rounded-[10px] -top-[64px] left-[200px]"
              alt=""
            />
            <img
              src="../../src/assets/image-two_bkmmrk.png"
              className="absolute top-[224px] z-50 left-[20px]"
              alt=""
            />
            <img
              src="../../src/assets/image-three_nq7lxo.png"
              className="absolute z-50 top-[413px] left-[200px]"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Mapping starts here */}
      <div className="bg-black text-white pb-12 pt-3">
        <p className="text-center text-[30px] pb-5 max-sm:text-[22px] ">
          We Give you the Opportunity to;
        </p>
        <div className=" flex justify-center">
          <div className=" flex gap-9 max-sm:pb-4 md:pb-4 ">
            {jobs.map((job, id) => {
              return (
                <div key={id} className=" ">
                  <div
                    onClick={() => handleClick(job)}
                    className=" lg:text-[24px] max-sm:text-[18px] md:text-[21px]  "
                    style={{
                      color:
                        job.title === selectedItem.title ? "white" : "grey",
                      cursor: "pointer",
                    }}
                  >
                    {job?.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-2 lg:px-16 md:pl-[5rem] md:pr-[5rem] max-sm:pl-[3rem] max-sm:pr-[3rem]">
          <div className="relative  z-50 ">
            <img src={selectedItem?.img} alt="" className="" />
            <div className="absolute top-3 left-[1px] bg-white w-[70%] h-full rounded-lg -z-10">
              {" "}
            </div>
          </div>
          <div>
            <p className="py-[73px] max-sm:text-[20px] md:text-[20px] lg:text-[17px]">
              {selectedItem?.description}
            </p>
            <p className="max-sm:text-[20px] md:text-[20px]">
              The Dashboard Offers
            </p>
            <ol className=" list-disc max-sm:text-[20px] md:text-[20px] lg:text-[17px] ">
              <li>Both a snapshot & detailed view of each candidate.</li>
              <li>Send messages directly to candidate.</li>
              <li>Analytics of your operations on theskill.club.</li>
              <li>
                {" "}
                Handles the entire hiring process and notifies you of any new
                development during your hiring process.
              </li>
              <li>
                Schedule video meetings between your HR manager and candidate.
              </li>
            </ol>
          </div>
        </div>
        <div className="flex justify-center p-3">
          <button className="login-btn2 text-black ">Start for free</button>
        </div>
      </div>
      {/* Fifth Phase */}
      <div className=" pb-[8rem] py-14 bg-[#F4F7F6]   ">
        <p className=" font-extrabold  lg:text-[52px] md:text-[52px] max-sm:text-[34px] text-center py-6">
          Meet Talent in Our Network
        </p>
        <div className="flex lg:gap-9 lg:justify-center lg:py-6 max-sm:overflow-x-scroll md:overflow-x-scroll   ">
          {titles.map((title, id) => (
            <div
              key={id}
              className=" max-sm:min-w-[50%] md:min-w-[33%] lg:min-w-[1%] flex-shrink-0 cursor-pointer  text-center"
              onClick={() => handleTitle(title)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-[2.5rem] md:px-[4rem] max-sm:flex-col max-sm:pl-[2rem] ">
          {filteredTeam.map((team, id) => (
            <div key={id} className=" bg-white h-[21rem]  w-[19rem]  ">
              <div className=" h-[15rem] overflow-hidden ">
                <img
                  src={team.img}
                  alt={team.name}
                  className=" overflow-hidden  "
                />
              </div>
              <p className="text-center py-5">{team.name}</p>
              <div className=" text-white py-2 bg-black text-center cursor-pointer  ">
                <p>View {team.name.split(" ")[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sixth Phase */}
      <div className=" lg:px-24 max-sm:px-5 md:px-12">
        <div className=" text-center py-20  ">
          <h2 className=" font-extrabold text-[4rem] max-sm:text-[2rem] ">
            Our Process
          </h2>
          <p className="max-sm:text-[14px]">
            {" "}
            Follow these steps to hire talents.
          </p>
        </div>
        <div className=" ">
          <div className=" relative grid lg:grid-cols-3 md:grid-cols-2 max-sm:gap-[4rem]  gap-14">
            <div className=" relative ">
              <p className=" absolute font-semibold bottom-12 -left-10 md:bottom-4 md:-left-2 max-sm:-left-2 max-sm:-bottom-[39px] text-[10rem] -z-20 text-[#FCF9BF]">
                1
              </p>
              <p>Sign Up</p>
              <p>
                Fill up the company form which includes key details which will
                be used to filter out the right candidates for you.
              </p>
            </div>
            <div className="relative">
              <p className=" absolute font-semibold bottom-12 -left-14 text-[10rem]  max-sm:-left-2 max-sm:bottom-[4px]  md:bottom-4 md:-left-2   -z-20 text-[#FCF9BF]">
                2
              </p>
              <p>Review filtered candidates</p>
              <p>
                Check through the provided list of vetted potential talents for
                your company/project. Do a quick review of your picks via our
                built-in video scheduling feature to check which talent fits
                your company best.
              </p>
            </div>
            <div className="relative ">
              <p className=" absolute font-semibold lg:bottom-4 max-sm:-left-2 max-sm:-bottom-[64px]  md:-bottom-[2rem] md:-left-2 -left-14 text-[10rem] -z-20 text-[#FCF9BF]">
                3
              </p>
              <p>Onboard your preferred candidates</p>
              <p>
                Onboard your selected candidates as new team members seamlessly,
                using our dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-6">
          <button className="login-btn2 text-black ">Start for free</button>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black text-white p-20 max-sm:p-2  rounded-t-[2.4rem]  ">
        <div className="text-center ">
          <h2 className="text-[6rem] max-sm:text-[2rem] font-extrabold">
            Join Community
          </h2>
          <p className="text-[1.2rem] max-sm:text-[0.9rem]">
            We're your quickest way to get hired.
          </p>
          <div className="flex justify-center p-6">
            <button className="login-btn2 text-black ">Join Today</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 max-sm:gap-8 py-6">
          <div className=" flex flex-col gap-4 ">
            <p>Most In-demand Talent</p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>Web Developers</p>
            <p>Graphic Designer</p>
            <p>Data Scientist</p>
            <p>Mobile Developers</p>
            <p>Product Designer (UI/UX)</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p>Services </p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>Apply for a job</p>
            <p>Hire a talent</p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <p>Links</p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem] md:w-[20rem]"></div>
            <p>Events</p>
            <p>For Companies</p>
            <p>Contact Us</p>
            <p>Join Community</p>
          </div>
          <div className=" flex flex-col gap-4  pb-2 ">
            <p>Resources</p>
            <div className="bg-white h-[0.01rem] lg:w-[10rem]  md:w-[20rem]"></div>
            <p>ReactJs</p>
            <p>NextJs</p>
            <p>Figma</p>
            <p>Flutter</p>
          </div>
          <div className=" pb-10 ">
            <p className="pb-3">Socials</p>
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
            <p className="pb-2">Copyright©2024 theSkillClub. All right reserved.</p>
            <p  className="pb-2"> Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
