import React from "react";
import NavItem from "./navItem";
// import { BellIcon, SearchIcon } from "@heroicons/react/outline";
// npm install @heroicons/react

const Nav=()=> {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Nav */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="GonnaMakeIt"
            className="h-8 w-auto mr-8"
          />
          <nav className="flex space-x-1">
            <NavItem>Dashboard</NavItem>
            <NavItem active>Collections</NavItem>
            <NavItem>Settings</NavItem>
          </nav>
        </div>

        {/* Search / Bell / Avatar */}
        <div className="flex items-center space-x-4">
          <div className="relative text-gray-500">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {/* <SearchIcon className="w-5 h-5 absolute left-3 top-2.5" /> */}
          </div>
          {/* <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" /> */}
          <img
            src="https://i.pravatar.cc/300"
            alt="User avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;


// It's a temporary Code