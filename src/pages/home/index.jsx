import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-start max-md:flex-col max-md:items-center">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="flex-0 w-full h-screen">
        <div className="max-w-5xl mx-auto  px-5 py-5 flex flex-col items-start justify-start max-md:p-0 max-md:flex-col">
          {/* Header */}
          <Header />
          {/* List */}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
