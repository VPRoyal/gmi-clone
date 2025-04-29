// components/Navbar.tsx
"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#141619] text-white h-[60px] flex items-center justify-between px-6 shadow-md border-b border-[#2e333a]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">GMI</span>
        <span className="text-green-500 text-lg">▲</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-[15px]">
        {["Collections", "Portfolio", "Activity", "Airdrop", "Launchpad", "Resources"].map((item) => (
          <li key={item} className="cursor-pointer hover:text-gray-300">{item}</li>
        ))}
      </ul>

      {/* Search Bar + Connect Wallet */}
      <div className="flex items-center gap-4">
        <div className="relative w-[180px] md:w-[250px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-[14px] bg-[#2e333a] text-white px-3 py-2 rounded-md border border-[#2e333a] focus:border-gray-500 focus:outline-none"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <button className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 text-[15px]">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;