import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import ResultField from "./components/ResultField";
import axios from "axios";
import { WordData } from "./interfaces";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState<WordData | null>(null);

  const getData = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const result = response.data[0];
      const { word, phonetics, meanings, sourceUrls } = result;

      setData({ word, phonetics, meanings, sourceUrls });
      console.log("data", { word, phonetics, meanings, sourceUrls });
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData(null);
    }
  };

  const changeTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className=" lg:mx-auto min-h-screen dark:bg-black">
      <div className="lg:w-3/6 md:w-11/12 w-11/12 mx-auto py-12">
        <Navbar changeTheme={changeTheme} />
        <SearchField onSearch={getData} />
        <ResultField data={data} />
      </div>
    </div>
  );
};

export default App;
