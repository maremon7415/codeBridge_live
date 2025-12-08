import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div
      className="btn btn-primary"
      onClick={() => {
        toast.error("HomePage");
      }}
    >
      HomePage
    </div>
  );
};

export default HomePage;
