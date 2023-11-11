// Purpose: Hero section of the website.
import {
  BiDownload,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiTime,
} from "react-icons/bi";

const linksSocial = [
  {
    name: "Github",
    url: "",
    icon: <BiLogoGithub />,
  },
  { name: "Linkedin", url: "", icon: <BiLogoLinkedin /> },
  { name: "Email", url: "", icon: <BiLogoGmail /> },
];

export const Hero = () => {
  return (
    <>
      <section className="grid border border-zinc-900 grid-rows-2 h-auto">
        <div className="row-span-1 h-[50vh] mt-4 flex border border-zinc-900 bg-gradient-to-b from-transparent from-60% via-black to-emerald-950 justify-center items-center flex-col">
          <h2 className="text-4xl text-gray-200 tracking-tighter text-center font-medium">
            Armando Diaz
          </h2>
          <h3 className="text-2xl -mt-1 text-center tracking-tighter text-gray-400">
            What do you want to build?
          </h3>
          <div className="mt-3">
            <ul className="flex justify-center gap-2">
              {linksSocial.map((link, i) => (
                <li key={i} className="mx-2">
                  <a href="" className="text-3xl text-gray-300">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid h-[42vh] auto-rows-min grid-cols-1 gap-4 mt-4 border border-zinc-900">
          <div className="col-span-1 text-zinc-300 mx-4 font-medium tracking-tight mt-4 text-sm">
            <p>
              Specializing in building awesome, expert and exceptional apps web.
              Currently, I am focused on exploring different back end
              environments to improve my versatility as a programmer.
            </p>
          </div>
          <div className="col-span-1 flex flex-col align-middle justify-center border-t border-t-zinc-900 text-gray-400 pt-11">
            <div className="flex w-full flex-row justify-around">
              <a
                href=""
                className="px-4  flex flex-row items-center gap-2 bg-zinc-100 py-1 rounded-2xl text-black tracking-tighter font-medium"
              >
                <BiDownload className="text-xl" /> Curriculum
              </a>
              <a
                href=""
                className="px-4 py-1 rounded-2xl border-2 border-blue-500 text-zinc-100"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex flex-col justify-center border border-zinc-900 h-56">
          <p className="text-gray-100 text-4xl tracking-tighter text-center px-3 font-medium">{"<"} Building solutions, one stack at a time {"/>"}</p>
        </div>
      </section>
    </>
  );
};
