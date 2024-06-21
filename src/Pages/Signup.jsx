import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.jpg";

const Signup = () => {
  return (
    <div className="p-14">
      <div className="grid grid-cols-2 gap-4">
        <div className="px-[5.8rem] text-center flex flex-col gap-4">
          <Link to="/">
            <div className="skill justify-center">
              <img
                className="nav-img"
                src="/src/assets/theskillclub-black (1).svg"
                alt=""
              />
              <span className="beta">BETA</span>
            </div>
          </Link>
          <p className="font-extrabold text-[2rem]">Welcome </p>

          <div className="flex flex-col gap-[2.5rem]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Company Name"
              className=" border-none bg-white text-black outline p-3 rounded-full "
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className=" border-none bg-white text-black outline p-3 rounded-full "
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className=" border-none bg-white text-black outline p-3 rounded-full"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className=" border-none bg-white text-black outline p-3 rounded-full"
            />
          </div>

          <div></div>
          <button className="login-btn2 text-black  ">Sign Up</button>

          <div className="flex justify-center gap-1">
            <p>Already have an account?</p>
            <Link to='/login' className="text-black">
            <p className="font-extrabold">Login</p>
            </Link>
          </div>
        </div>
        <div className=" rounded-[3rem] overflow-hidden h-[36rem] ">
          <img src={login} alt="" className=" object-cover h-full " />
        </div>
      </div>
    </div>
  );
};

export default Signup;
