import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NavBar  */}
      <Navbar />
    </div>
  );
};

export default HomePage;
