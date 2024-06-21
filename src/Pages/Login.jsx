import React from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="p-14">
      <div className="grid grid-cols-2 gap-4">
        <div className=" rounded-[3rem] overflow-hidden h-[33rem] ">
          <img src={login} alt="" className=" object-cover h-full " />
        </div>
        <div className="px-[4.5rem] text-center flex flex-col gap-4">
          <Link to='/'>
          <div className="skill justify-center">
            <img
              className="nav-img"
              src="/src/assets/theskillclub-black (1).svg"
              alt=""
              />
            <span className="beta">BETA</span>
          </div>
              </Link>
          <p className="font-extrabold text-[2.4rem]">Welcome Back</p>
          <button className="login-btn2 text-black ">
            Sign In with Google
          </button>
          <p>---------- or ---------- </p>
          <div className="flex flex-col gap-4">
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
          </div>
          <div>
            <p className=" text-end">Forgot Password?</p>
          </div>

          <button className="login-btn2 text-black ">Login</button>

          <div className="flex justify-center gap-1 ">
            <p>Don't have an account?</p>
             <Link to='/sign-up' className="text-black">
            <p className="font-extrabold">Sign Up</p>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
