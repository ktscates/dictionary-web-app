import React from "react";
import searchIcon from "../assets/images/icon-search.svg";

const SearchField = () => {
  return (
    <div className="bg-veryLightG dark:bg-darkGray w-full flex justify-between items-center p-5 mt-12 rounded-2xl shadow-sm">
      <input
        className=" text-darkGray dark:text-white placeholder:text-gray placeholder:text-xl font-semibold w-3/4 bg-transparent"
        type="text"
        placeholder="Search for any word..."
      />
      <img src={searchIcon} alt="search-icon" />
    </div>
  );
};

export default SearchField;
