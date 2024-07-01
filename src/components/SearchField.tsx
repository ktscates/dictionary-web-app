import React, { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import { SearchFieldProps } from "../interfaces";

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    if (searchWord.trim() && searchWord !== "") {
      onSearch(searchWord);
    }
  };

  return (
    <>
      <div className="bg-veryLightG dark:bg-darkGray w-full flex justify-between items-center p-5 mt-12 rounded-2xl shadow-sm">
        <input
          className=" text-darkGray dark:text-white focus:outline-none placeholder:text-gray placeholder:text-xl font-semibold w-3/4 bg-transparent"
          type="text"
          placeholder="Search for any word..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={() => handleSearch()}>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <div>
        {searchWord === "" ? (
          <p className=" text-red mt-2">Whoops, can't be empty</p>
        ) : null}
      </div>
    </>
  );
};

export default SearchField;
