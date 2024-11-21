"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      className="max-w-6xl p-4 mx-auto justify-between flex gap-4"
      onSubmit={handleSubmit}
    >
      {currentTheme === "dark" ? (
        <>
          <input
            type="text"
            placeholder="Seach keyword..."
            className="w-full px-4 py-3 rounded-md placeholder-gray-500 outline-none flex-1 bg-neutral-800"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-8 py-1 rounded-lg disabled:bg-gray-800 bg-blue-700 disabled:text-gray-600"
            disabled={!search}
          >
            Search
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Seach keyword..."
            className="w-full px-4 py-3 rounded-md placeholder-gray-500 outline-none flex-1 bg-neutral-200"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-8 py-1 rounded-lg disabled:bg-gray-400 bg-blue-800 disabled:text-gray-600 text-white"
            disabled={!search}
          >
            Search
          </button>
        </>
      )}
    </form>
  );
};

export default SearchBox;
