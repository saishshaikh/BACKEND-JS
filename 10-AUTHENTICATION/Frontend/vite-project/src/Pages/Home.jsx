import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../Context/UserContext";

const Home = () => {
  const { ServerUrl } = useContext(DataContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${ServerUrl}/api/user`,
          { withCredentials: true }
        );

        setUser(response.data.user);
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [ServerUrl, navigate]);

  // Logout function
  const handleLogout = async () => {
    try {
      await axios.post(
        `${ServerUrl}/api/logout`,
        {},
        { withCredentials: true }
      );

      navigate("/login");
    } catch (error) {
      console.log("Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center text-white gap-6">
      <h1 className="text-3xl font-bold">
        Welcome {user?.name || "User"} 👋
      </h1>

      <p className="text-gray-400">
        You are successfully logged in.
      </p>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
