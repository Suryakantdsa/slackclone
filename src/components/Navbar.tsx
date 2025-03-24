"use client";

import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <nav className=" w-full py-1 shadow-xl">
      <div className="container mx-auto">
        <div className="flex w-full justify-between items-center px-2">
          <div className="flex items-center">
            <Image
              src={"/slack_logo.jpg"}
              width={150}
              height={100}
              alt="logo"
            />
            <div className="hidden md:flex items-center justify-between gap-x-8 font-semibold text-[#767371] cursor-pointer">
              <p className="flex items-center gap-1">
                <span>Product </span>
                <span className="text-black font-bold">
                  <ChevronDown />
                </span>
              </p>
              <p>Enterprise</p>
              <p>Resources</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between gap-10">
            <div>
              <p>
                <Search />
              </p>
            </div>
            <button className="font-bold">Sigin in</button>
            <button className="rounded-md border-2 border-[#B99DB4] px-6 py-2 text-primary-60000 font-bold text-primary-500">
              Talk to sales
            </button>
            <button className="rounded-md bg-primary-500 text-white font-semibold  px-8 py-3">
              Try for free
            </button>
          </div>
          <div className="md:hidden">
            <button
              className="text-primary-500 hover:text-primary-600 transition-colors"
              onClick={() => SetIsOpen(!isOpen)}
            >
              {!isOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
