import React from "react";
import { mainLogo } from "../../assets/images";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="w-10 h-10">
          <img src={mainLogo} alt="main-logo" />
        </div>
        {/* Links */}
        <div>
          <ul className="flex">
            <li className="py-2 px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 px-2">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Content */}
    </div>
  );
}

export default Home;
