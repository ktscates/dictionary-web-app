import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import ResultField from "./components/ResultField";

function App() {
  const [theme, setTheme] = useState("light");

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
    <div className=" max-w-[1440px] mx-auto min-h-screen dark:bg-black">
      <div className="w-3/6 mx-auto py-12">
        <Navbar changeTheme={changeTheme} />
        <SearchField />
        <ResultField />
      </div>
    </div>
  );
}

export default App;
