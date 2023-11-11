import { useState } from "react";
import { MenuButton } from "./buttons/MenuButton";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex bg-black border-b border-b-zinc-900 sticky top-0 w-full items-center justify-between px-4  h-12">
      <div><p className="text-2xl text-white font-mono tracking-tighter">Diaz.</p></div>
      <ul className="flex flex-row gap-2">
        <MenuButton toggle={toggle} setToggle={setToggle}/>
      </ul>
    </nav>
  );
};
