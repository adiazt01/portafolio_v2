// Purpose: Hero section of the website.
import {
  BiBuilding,
  BiCode,
  BiCoinStack,
  BiDownload,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiMouse,
  BiServer,
  BiTerminal,
  BiWorld,
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
      <section className="grid h-min mt-12 md:mt-14">
        <div className=" row-span-1 flex border-2 border-purple-950 rounded-lg md:rounded-t-lg md:rounded-b-none bg-gradient-to-b from-transparent from-40% via-purple-950 to-purple-900 justify-center items-center flex-col h-80 md:h-96 lg:h-[30rem]">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-purple-500 tracking-tighter text-center font-medium">
            Armando Díaz
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl -mt-1 text-center tracking-tighter text-zinc-200">
            What do you want to build?{" "}<BiBuilding className="inline-block align-text-bottom mr-2 mb-1"/> 
          </h3>
          <div className="mt-3 md:mt-5 px-4 py-1 border-white border-2 rounded-3xl bg-black">
            <ul className="flex justify-center gap-2">
              {linksSocial.map((link, i) => (
                <li key={i} className="mx-2">
                  <a href="" className="text-2xl md:text-4xl text-purple-500">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row-span-1 h-min grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
          <div className="col-span-1 px-5 tracking-tight mt-4 md:mt-0 md:rounded-bl-2xl md:rounded-none flex flex-col md:justify-start md:border-r-0 border-2 rounded-xl border-purple-950 pb-12 py-8 bg-gradient-to-b from-transparent from-60% via-zinc-950 to-zinc-900">
            <p className="underline-offset-2 underline decoration-2 decoration-purple-500 text-md md:text-xl lg:text-2xl md:mt-0 text-white font-medium">
              Full Stack developer
            </p>
            <p className="text-zinc-400 mt-1 md:text-md lg:text-xl">
              Specializing in building{" "}
              <span className="font-medium text-zinc-300">awesome</span>,{" "}
              <span className="font-medium text-zinc-300">expert</span> and{" "}
              <span className="font-medium text-zinc-300">exceptional</span>{" "}
              apps web <BiWorld className="inline-block align-text-bottom mb-0.5"/> . Currently, I am focused on exploring different back end <BiServer className="inline-block align-text-bottom mb-0.5"/>{" "}
              environments to improve my versatility as a programmer. <BiCode className="inline-block align-text-bottom mb-0.5"/>
            </p>
          </div>
          <div className="py-8 col-span-1 flex justify-center items-center gap-8 flex-row md:flex-col border-2 rounded-xl md:rounded-none md:rounded-br-2xl  border-purple-950 text-gray-400 bg-gradient-to-b from-transparent from-60% via-zinc-950 to-zinc-900">
              <a
                href=""
                className="px-4 md:text-lg lg:text-2xl md:px-12 lg:px-10  flex flex-row items-center gap-2 bg-zinc-100 py-1 lg:py-2 rounded-3xl text-black tracking-tighter font-medium"
              >
                <BiDownload className="text-xl lg:text-3xl" /> Curriculum
              </a>
              <a
                href=""
                className="px-4 md:text-lg md:px-16 py-1 lg:py-2 rounded-3xl font-medium tracking-tight border-2 border-purple-500 text-zinc-100"
              >
                Projects
              </a>
          </div>
        </div>
        <div className="flex flex-col justify-center border border-purple-950 h-56 rounded-2xl bg-gradient-to-b from-transparent from-50% via-purple-950 mt-8 to-purple-900 ">
          <p className="text-gray-100 text-4xl tracking-tighter text-center px-3 font-medium">
            <span className="text-purple-500">{"<"}</span> Building solutions <BiMouse className="inline-block align-text-bottom mb-0.5"/>,
            one stack at a time <BiCoinStack className="inline-block align-text-bottom mb-0.5"/> <span className="text-purple-500">{"/>"}</span>
          </p>
        </div>
      
        </section>
    </>
  );
};
