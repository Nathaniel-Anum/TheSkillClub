import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import login from "../assets/login.jpg";
import axios from "axios";
import { useUser } from "../UseUser";

const Signup = () => {
  const { setUser, user } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    setError("");
    //Checking if passwords match
    if (password !== confirmpassword) {
      setError("Passwords do not match");
      message.error(error);
      return;
    }
    const signup = { email, password, name, company };

    axios
      .post("http://localhost:3000/register", signup)
      .then((res) => {
        localStorage.setItem("accessToken", res?.data?.accessToken);
        console.log(res?.data);
        setUser(signup);
        navigate("/dashboard");
        message.success("Successfully signed in");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        setCompany("");
        setName("");
      })
      .catch((err) => {
        message.error(err?.response?.data);
        setEmail("");
        setPassword("");
        setConfirmpassword("");
      });

      console.log(user);
  };
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
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" border-none bg-white text-black outline p-3 rounded-full "
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className=" border-none bg-white text-black outline p-3 rounded-full "
            />
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
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              className=" border-none bg-white text-black outline p-3 rounded-full"
            />
          </div>

          <div></div>
          <button className="login-btn2 text-black  " onClick={handleSignup}>
            Sign Up
          </button>

          <div className="flex justify-center gap-1">
            <p>Already have an account?</p>
            <Link to="/login" className="text-black">
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
