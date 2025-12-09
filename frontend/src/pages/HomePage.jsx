import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NavBar  */}
      <Navbar />
      {/* Hero  */}
      <Hero />
      {/* Feature Sections  */}
      <Features />
    </div>
  );
};

export default HomePage;
