import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="p-8 text-white flex">
      <Link to="/">
        <img src={logo} alt="Karthik R" className="w-10 logo" />
      </Link>
    </div>
  );
};

export default Logo;
