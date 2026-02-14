import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";
import { DataContext } from "../Context/UserContext";
import axios from "axios";

function SignUp() {
  const { ServerUrl } = useContext(DataContext);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ProfilePic, setProfilePic] = useState(null);

  const fileInputRef = useRef(null);   // ✅ Added

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("FirstName", FirstName);
      formData.append("LastName", LastName);
      formData.append("UserName", UserName);
      formData.append("Email", Email);
      formData.append("Password", Password);

      if (ProfilePic) {
        formData.append("ProfilePic", ProfilePic);
      }

      const response = await axios.post(
        `${ServerUrl}/api/signup`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Signup Success:", response.data);

    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] h-[650px] bg-[#141f1f] rounded-lg flex flex-col justify-center items-center gap-[20px] p-4">

        {/* ✅ Clickable Image */}
        <img
          src={ProfilePic ? URL.createObjectURL(ProfilePic) : logo}
          alt="Logo"
          onClick={() => fileInputRef.current.click()}
          className="w-24 h-24 object-cover rounded-full border-4 border-green-500 shadow-lg cursor-pointer"
        />

        {/* ✅ Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setProfilePic(e.target.files[0])}
        />

        <h1 className="text-white text-[22px] font-semibold">Sign Up</h1>

        <form
          className="w-full flex flex-col items-center gap-[20px]"
          onSubmit={handleSignup}
        >
          <div className="w-[80%] h-[50px] flex gap-[10px]">
            <input
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-1/2 h-full bg-white rounded-lg px-3"
              required
            />

            <input
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="w-1/2 h-full bg-white rounded-lg px-3"
              required
            />
          </div>

          <input
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-[80%] h-[50px] bg-white rounded-lg px-3"
            required
          />

          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white rounded-lg px-3"
            required
          />

          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white rounded-lg px-3"
            required
          />

          <button
            type="submit"
            className="w-[80%] h-[50px] bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Create Account
          </button>

          <p className="text-white text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
