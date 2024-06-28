import React from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import { Select, Switch } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between items-center gap-6">
        <Select
          className="bg-transparent"
          name="status"
          aria-label="Project status"
        >
          <option value="paused">Sans Serif</option>
          <option value="delayed">Serif</option>
          <option value="canceled">Mono</option>
        </Select>
        <Switch
          //   checked={enabled}
          //   onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray transition data-[checked]:bg-purple"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
        <img src={moon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
