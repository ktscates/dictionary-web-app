import React from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto min-h-screen">
      <div className="w-3/6 mx-auto py-12">
        <Navbar />
        <SearchField />
      </div>
    </div>
  );
}

export default App;
