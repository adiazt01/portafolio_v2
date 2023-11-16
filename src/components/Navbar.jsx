import { useState } from "react";
import { MenuButton } from "./buttons/MenuButton";
import { BiBriefcase, BiCool, BiLaptop, BiPackage } from "react-icons/bi";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex z-50 bg-black border-b border-b-zinc-900 sticky top-0 w-full items-center justify-between px-4 py-2 h-20">
      <div>
        <p className="text-2xl text-white font-mono tracking-tighter">Diaz.</p>
      </div>
      <ul className="text-lg lg:text-xl text-gray-400 gap-2 hidden md:flex flex-row">
        <a
          href="#About"
          className=" transition-colors duration-200 hover:text-gray-300 px-2 py-1"
        >
          <BiCool className="inline-block" /> About
        </a>
        <a
          href="#Technologies"
          className=" transition-colors duration-200 hover:text-gray-300 px-2 py-1"
        >
          <BiLaptop className="inline-block" /> Technologies
        </a>
        <a
          href="#Projects"
          className=" transition-colors duration-200 hover:text-gray-300 px-2 py-1"
        >
          <BiBriefcase className="inline-block mr-1" />
          Projects
        </a>
      </ul>
      <MenuButton toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};
