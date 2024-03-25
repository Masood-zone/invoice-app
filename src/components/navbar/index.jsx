import React from "react";
import { mainLogo } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1F213A] w-24 h-screen flex flex-col rounded-tr-3xl rounded-br-3xl max-md:w-full max-md:h-24 overflow-hidden max-md:flex max-md:justify-between max-md:rounded-br-3xl max-md:rounded-bl-3xl max-md:rounded-tr-none p-0">
      {/* Logo */}
      <div
        className="w-24 h-24 flex-1"
        role="button"
        onClick={() => navigate("/")}
      >
        <img src={mainLogo} alt="main-logo" className="" />
      </div>
      {/* Links */}
      <div className="py-10 text-center border-t-2 max-md:border-l-2 max-md:flex max-md:items-center max-md:justify-center max-md:p-5 text-white">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Navbar;
