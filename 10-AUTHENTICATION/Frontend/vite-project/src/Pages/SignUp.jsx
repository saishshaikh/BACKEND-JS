import React, { useContext, useState } from "react";
import "../index.css";
import logo from "../assets/logo.png";   
import { DataContext } from "../Context/UserContext";



function SignUp() {

let {ServerUrl} = useContext(DataContext)


let [FirstName, setFirstName] = useState("")
let [LastName, setLastName] = useState("")
let [UserName, setUserName] = useState("")
let [Email, setEmail] = useState("")
let [Password, setPassword] = useState("")

const handleSinguup = async () => {
  e.preventDefualt()
}
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      
      <div className="w-[90%] max-w-[500px] h-[650px] bg-[#141f1f] rounded-lg flex flex-col justify-center items-center gap-[20px] p-4">
        
       
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 object-cover rounded-full border-4 border-green-500 shadow-lg"
        />

        <h1 className="text-white text-[22px] font-semibold">Sign Up</h1>

        <form className="w-full flex flex-col items-center justify-center gap-[20px]" onSubmit={handleSinguup}>
          
          <div className="w-[80%] h-[50px] flex gap-[10px]">
            <input
            value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
              type="text"
              placeholder="first name"
              className="w-1/2 h-full bg-white outline-none rounded-lg px-3"
            />

            <input
             value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
              type="text"
              placeholder="last name"
              className="w-1/2 h-full bg-white outline-none rounded-lg px-3"
            />
          </div>

          <input
           value={UserName}
            onChange={(e)=>setUserName(e.target.value)}
            type="text"
            placeholder="username"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
          />

          <input
           value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            type="Email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
          />

          <input
           value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
          />

          <button className="w-[80%] h-[50px] bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
