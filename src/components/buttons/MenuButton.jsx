import { BiExit, BiMenu } from "react-icons/bi";

export const MenuButton = ({ toggle, setToggle }) => {
  return (
    <>
      <button className="text-white md:hidden block z-50 text-2xl" onClick={() => setToggle(!toggle)}>
        {toggle ? <BiExit /> : <BiMenu />}
      </button>
      {toggle && (
        <div className="flex flex-col md:hidden gap-2 z-50 absolute top-20 right-0 bg-black border w-full text-right px-4 py-4 border-zinc-900 text-2xl font-medium tracking-tight">
          <a href="#about" className="text-white">
            About
          </a>
          <hr className="border border-zinc-900"/>
          <a href="#projects" className="text-white">
            Technologies
          </a>
          <hr className="border border-zinc-900"/>
          <a href="#contact" className="text-white">
            Projects
          </a>
          
        </div>
      )}
    </>
  );
};
