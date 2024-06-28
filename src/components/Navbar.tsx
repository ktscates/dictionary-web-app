import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import { Select, Switch } from "@headlessui/react";
import { NavbarProps } from "../interfaces";

const Navbar: React.FC<NavbarProps> = ({ changeTheme }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between items-center gap-6">
        <Select
          className="bg-transparent font-semibold text-lg dark:bg-black text-darkGray dark:text-white px-4 py-2 dark:data-[focus]:bg-purple"
          name="status"
          aria-label="Project status"
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </Select>
        <div className="dark:text-white">|</div>
        <Switch
          onChange={changeTheme}
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
