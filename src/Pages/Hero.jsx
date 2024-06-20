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
const Hero = () => {
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
        {/* <div className="btn-holder">
          <button className="hero-btn">
            <div className="p-text">
              <p>For Companies</p>
              <p>Hire Talents</p>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div> */}
        <div>
          <p className="hero-text  ">Are you a</p>
          <p className="p-text2">
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
          <p className="p-text3">Gain work experience, mentorship </p>
          <p className="p-text4">& Get Paid whilst doing it. </p>
        </div>
        <div className="input-signup">
          <div className="input-border">
            <input type="text" placeholder="Your email" />
            <button className="login-btn2">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="second-phase">
        <h3 className="s-h3">Our Modes</h3>
        <p className="s-p">
          You are allowed to select a mode when setting up your Profile
        </p>
        <div className="sdiv">
          <div className="s-card">
            <div className="first">
              <img className="first-img" src="/src/assets/Entry.webp" alt="" />
              <div>
                <div className="trying">
                  <h4>Entry Level (Integrate)</h4>
                </div>
                <div>
                  <p className="p-trying">
                    This mode is only available for university seniors and fresh
                    graduates.. It is designed for companies (Startups) looking
                    to hire talented students in their final year/fresh
                    graduates and steadily integrate them into their workforce.
                  </p>
                </div>
              </div>
            </div>
            <div className="second-p">
              <img
                className="second-img"
                src="/src/assets/Internship.webp"
                alt=""
              />
              <div>
                <div className="trying">
                  <h4>Internship</h4>
                </div>
                <div>
                  <p className="p-trying">
                    This mode is only available for university seniors and fresh
                    graduates looing for paid internship opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="third">
              <img
                className="third-img"
                src="/src/assets/Contract.webp"
                alt=""
              />
              <div>
                <div className="trying">
                  <h4>Contract</h4>
                </div>
                <div className="p-trying">
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
      <div className="third-phase">
        <div className="third-container">
          <div>
            <div>
              <h4 className="third-h4 font-extrabold ">Why Join?</h4>
            </div>
            <div className="parent-div ">
              <img src="../../src/assets/why-join.webp" alt="" />
              <div className="empty-div ">Brookes</div>
            </div>
          </div>
          <div>
            <div>
              <p className="third-p">
                Are you a university student or a graduate that is skilled in
                your craft but not employed yet? If you answer yes to this, then
                you're the perfect fit for this platform.
              </p>
            </div>
            <div>
              <p className="third-p">
                theskill.club is built to serve as a bridge to connect authentic
                talent with Startups/Companies in need of talent to build or
                work on their projects remotely.
              </p>
            </div>
            <div>
              <p className="third-p">
                When you sign up to be matched up with a company, you get to
                work in teams with experienced professionals. You'll be mentored
                by them and get paid what you deserve.
              </p>
            </div>
            <div className="p3-btn-holder">
              <button className="login-btn3">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-phase">
        <div className="f-grid-container">
          <div className="f-writing-controller">
            <div className="f-writings">
              <h2>Startup/Company?</h2>
              <p className="f-p1">
                Interested in hiring vetted talents for both technical &
                non-technical roles?
                <p>You're at the right place.</p>
              </p>
              <p className="f-p">
                theskill.club dashboard furnishes your HR department with a
                database of vetted young and vibrant talent they can scout.
              </p>
              <p className="f-p">
                Are you hiring for long term, contract based or for an
                internship program? Our Modes will take care of your needs
                whiles making available to you the right candidate
              </p>
            </div>
          </div>
          <div className="f-img-holder">
            <img
              src="../../src/assets/image-one_pdia2v.png"
              className="f-1-img"
              alt=""
            />
            <img
              src="../../src/assets/image-two_bkmmrk.png"
              className="f-2-img"
              alt=""
            />
            <img
              src="../../src/assets/image-three_nq7lxo.png"
              className="f-3-img"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Mapping starts here */}
      <div className="bg-black text-white pb-12">
        <p className="text-center text-[30px] pb-5 ">
          We Give you the Opportunity to;
        </p>
        <div className=" flex justify-center">
          <div className=" flex gap-9 ">
            {jobs.map((job, id) => {
              return (
                <div key={id} className=" ">
                  <div
                    onClick={() => handleClick(job)}
                    className=" text-[24px]  "
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
        <div className=" grid grid-cols-2 px-16 ">
          <div className="relative  z-50 ">
            <img src={selectedItem?.img} alt="" className="" />
            <div className="absolute top-3 left-[1px] bg-white w-[70%] h-full rounded-lg -z-10">
              {" "}
            </div>
          </div>
          <div>
            <p className="py-[73px]">{selectedItem?.description}</p>
            <p>The Dashboard Offers</p>
            <ol className=" list-disc ">
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
        <p className=" font-extrabold  text-[52px] text-center py-6">
          Meet Talent in Our Network
        </p>
        <div className="flex gap-9 justify-center py-6  ">
          {titles.map((title, id) => (
            <div
              key={id}
              className=" cursor-pointer text-[19px]"
              onClick={() => handleTitle(title)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-[2.5rem] ">
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
      <div className=" px-24">
        <div className=" text-center py-20  ">
          <h2 className=" font-extrabold text-[4rem]">Our Process</h2>
          <p>Follow these steps to hire talents.</p>
        </div>
        <div className=" ">
          <div className=" relative grid grid-cols-3 gap-14">
            <div className=" relative ">
              <p className=" absolute bottom-12 -left-10 text-[10rem] -z-20 text-[#FCF9BF]">
                1
              </p>
              <p>Sign Up</p>
              <p>
                Fill up the company form which includes key details which will
                be used to filter out the right candidates for you.
              </p>
            </div>
            <div className="relative">
              <p className=" absolute bottom-12 -left-14 text-[10rem]  -z-20 text-[#FCF9BF]">
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
              <p className=" absolute bottom-10 -left-14 text-[10rem] -z-20 text-[#FCF9BF]">
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
      </div>
    </div>
  );
};

export default Hero;
