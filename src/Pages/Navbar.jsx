import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-holder">
      <nav>
        <div className="skill">
          {/* <img
            className="nav-img"
            src="/src/assets/theskillclub-black.svg"
            alt=""
          /> */}
          <img className='nav-img'src="/src/assets/theskillclub.svg" alt="" />
          <span className="beta">BETA</span>
        </div>
        <div className="links">
          <a href="">For Companies</a>
          <a href="">Contact Us</a>
          <a href="">Community</a>
          <a href="">Resources</a>
          <Link to="/login">
          <button className="login-btn text-black ">log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
