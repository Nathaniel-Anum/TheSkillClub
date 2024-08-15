import React, { useState } from "react";
import { message } from "antd";
import login from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../UseUser";

const Login = () => {
  const { setUser, user } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const login = { email, password };
    // console.log(login);
    axios
      .post("http://localhost:3000/login", login)
      .then((res) => {
        localStorage.setItem("accessToken", res?.data?.accessToken);
        console.log(res?.data);
        setUser(res?.data?.user);
        setEmail("");
        setPassword("");
        message.success(`Welcome back ${res?.data?.user?.name.split(" ")[0]}`);
        navigate("/dashboard");
      })
      .catch((err) => {
        message.error(err?.response?.data);
        setEmail("");
        setPassword("");
      });
  }
  return (
    <div className="lg:p-14 max-sm:p-4 md:p-4  ">
      <div className="grid grid-cols-2 gap-4   max-sm:block">
        <div className=" rounded-[3rem] max-sm:hidden overflow-hidden lg:h-[33rem] md:h-[66rem] ">
          <img src={login} alt="" className=" object-cover h-full " />
        </div>
        <div className="lg:px-[4.5rem] max-sm:px-0 md:px-0 text-center flex flex-col gap-4">
          <Link to="/">
            <div className="skill flex justify-center max-sm:pb-[4.5rem] md:pb-[10rem] lg:pb-0  pt-6">
              <img
                className="nav-img"
                src="/src/assets/theskillclub-black (1).svg"
                alt=""
              />
              <span className="beta44">BETA</span>
            </div>
          </Link>
          <p className="font-extrabold text-[2.4rem] max-sm:text-[2rem]">Welcome Back</p>
          <button className="login-btn2 text-black ">
            Sign In with Google
          </button>
          <p>---------- or ---------- </p>
          <div className="flex   flex-col gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border-none bg-white text-black outline p-3 rounded-full "
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border-none bg-white text-black outline p-3 rounded-full"
            />
          </div>
          <div>
            <p className=" text-end">Forgot Password?</p>
          </div>

          <button className="login-btn2 text-black " onClick={handleLogin}>
            Login
          </button>

          <div className="flex justify-center gap-1 ">
            <p>Don't have an account?</p>
            <Link to="/sign-up" className="text-black">
              <p className="font-extrabold">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
