import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flex dark:bg-gray-600 bg-amber-100 px-3 py-2 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="topRated" />
    </nav>
  );
};

export default Navbar;
