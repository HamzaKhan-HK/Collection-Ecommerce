import React from "react";
import { Link } from "react-router-dom";
import title_logo from "../../assets/images/title.svg";

export const Navbar = () => {
  return (
    <nav className="text-xs text-red pt-4 inline-grid grid-cols-3 fixed left-0 right-0 w-full px-4 z-40">
      <div className="w-32 flex justify-between">
        <Link to="/" className="hidden md:block">
          Shop
        </Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/" className="flex items-center justify-center w-64">
          <img src={title_logo} />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};
