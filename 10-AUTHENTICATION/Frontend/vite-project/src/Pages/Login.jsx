import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";
import { DataContext } from "../Context/UserContext";
import axios from "axios";

const Login = () => {
  const { ServerUrl } = useContext(DataContext);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${ServerUrl}/api/login`,
        {
          Email,
          Password,
        },
        { withCredentials: true }
      );

      console.log("Login Success:", response.data);
    } catch (error) {
      console.log(error.response?.data.message || error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] h-[500px] bg-[#141f1f] rounded-lg flex flex-col justify-center items-center gap-[20px] p-4">
        
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 object-cover rounded-full border-4 border-green-500 shadow-lg"
        />

        <h1 className="text-white text-[22px] font-semibold">Login</h1>

        <form
          className="w-full flex flex-col items-center justify-center gap-[20px]"
          onSubmit={handleLogin}
        >
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
            required
          />

          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
            required
          />

          <button
            type="submit"
            className="w-[80%] h-[50px] bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>

          {/* ✅ Added Signup Redirect */}
          <p className="text-white text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
