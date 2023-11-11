import { BiExit, BiMenu } from "react-icons/bi";

export const MenuButton = ({ toggle, setToggle }) => {
  return (
    <>
      <button className="text-white text-2xl" onClick={() => setToggle(!toggle)}>
        {toggle ? <BiExit /> : <BiMenu />}
      </button>
      {toggle && (
        <div className="flex flex-col gap-2 absolute top-12 right-0 bg-black border w-full text-right px-4 py-4 border-zinc-900 text-2xl font-medium tracking-tight">
          <a href="#about" className="text-white">
            About
          </a>
          <hr className="border border-zinc-900"/>
          <a href="#projects" className="text-white">
            Projects
          </a>
          <hr className="border border-zinc-900"/>
          <a href="#contact" className="text-white">
            Contact
          </a>
          
        </div>
      )}
    </>
  );
};
