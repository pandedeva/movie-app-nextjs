import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItems title="Home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            MV DB
          </span>
          <span className="text-xl hidden sm:inline">Deva</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;