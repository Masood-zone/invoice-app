import React from "react";
import { mainLogo } from "../../assets/images";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#1F213A] w-full h-24 overflow-hidden flex justify-between">
      {/* Logo */}
      <div className="w-24 h-24">
        <img src={mainLogo} alt="main-logo" className="" />
      </div>
      {/* Links */}
      <div className="border-l-2 flex items-center justify-center p-5 text-white">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Navbar;
