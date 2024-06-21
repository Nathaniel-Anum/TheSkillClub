import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-holder">
      <nav>
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
          <Link to='/resources'>
            <p>Resources</p>
          </Link>
          <Link to="/login">
            <button className="login-btn text-black ">log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
