import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";
import { DataContext } from "../Context/UserContext";
import axios from "axios";

const Login = () => {
  const { ServerUrl } = useContext(DataContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${ServerUrl}/api/login`,
        {
          Email: email,
          Password: password,
        },
        { withCredentials: true }
      );

      console.log("Login Success:", response.data);

      // Redirect after successful login
      navigate("/"); // change to "/dashboard" if needed
    } catch (err) {
      const message =
        err.response?.data?.message || "Invalid email or password";
      setError(message);
    } finally {
      setLoading(false);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white outline-none rounded-lg px-3"
            required
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-[80%] h-[50px] bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

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
