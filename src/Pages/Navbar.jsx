import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { text: "Hire Talents", link: "/about" },
    { text: "Contact Us", link: "/location" },
    { text: "Log in", link: "/documentation" },
    { text: "Resources", link: "/more" },
  ];

  return (
    <div className="nav-holder">
      <nav className="max-sm:hidden md:hidden lg:flex">
        <Link to="/">
          <div className="skill">
            <img
              className="nav-img"
              src="/src/assets/theskillclub.svg"
              alt=""
            />
            <span className="beta">BETA</span>
          </div>
        </Link>
        <div className="links">
          <Link to="/sign-up">
            <p>Hire Talents</p>
          </Link>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
          <Link to="/community">
            <p>Community</p>
          </Link>
          <Link to="/resources">
            <p>Resources</p>
          </Link>
          <Link to="/login">
            <button className="login-btn text-black ">log In</button>
          </Link>
        </div>
      </nav>
      <div className="navbar hidden max-sm:block md:block ">
        <div className="navbar-content">
          <div className="menu-icon lg:hidden md:pr-3" onClick={toggleDrawer} >
            <RiMenu3Line className="text-[2rem]" />
          </div>
        </div>
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleDrawer}>
            <AiOutlineClose className="text-black text-[2rem]" />
          </div>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
