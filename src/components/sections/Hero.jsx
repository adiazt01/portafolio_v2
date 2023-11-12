// Purpose: Hero section of the website.
import {
  BiDownload,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
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
      <section className="grid border h-min border-zinc-900 md:mt-20">
        <div className="row-span-1 flex border border-zinc-900 bg-gradient-to-b from-transparent from-60% via-black to-purple-950 justify-center items-center flex-col h-80 md:h-96 ">
          <h2 className="text-4xl md:text-6xl text-purple-500 tracking-tighter text-center font-medium">
            Armando Diaz
          </h2>
          <h3 className="text-2xl md:text-3xl -mt-1 text-center tracking-tighter text-gray-400">
            What do you want to build?
          </h3>
          <div className="mt-3 md:mt-5">
            <ul className="flex justify-center gap-2">
              {linksSocial.map((link, i) => (
                <li key={i} className="mx-2">
                  <a href="" className="text-3xl md:text-4xl text-purple-500">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row-span-1 h-min grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 border border-zinc-900">
          <div className="col-span-1 px-5 tracking-tight mt-4 md:mt-0 md:border-r flex flex-col md:justify-start pb-12  md:border-r-zinc-900 py-8">
            <p className="underline-offset-2 underline decoration-2 decoration-purple-500 text-md md:text-xl md:mt-0 text-white font-medium">
              Full Stack developer
            </p>
            <p className="text-zinc-400 mt-1 md:text-md">
              Specializing in building{" "}
              <span className="font-medium text-purple-500">awesome</span>,{" "}
              <span className="font-medium text-purple-500">expert</span> and{" "}
              <span className="font-medium text-purple-500">exceptional</span>{" "}
              apps web. Currently, I am focused on exploring different back end
              environments to improve my versatility as a programmer.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center gap-8 order-t flex-row md:flex-col order-t border py-8 border-zinc-900 text-gray-400">
              <a
                href=""
                className="px-4 md:text-lg md:px-12  flex flex-row items-center gap-2 bg-zinc-100 py-1 rounded-2xl text-black tracking-tighter font-medium"
              >
                <BiDownload className="text-xl" /> Curriculum
              </a>
              <a
                href=""
                className="px-4 md:text-lg md:px-16 py-1 rounded-2xl font-medium tracking-tight border-2 border-purple-500 text-zinc-100"
              >
                Projects
              </a>
          </div>
        </div>
        <div className="flex flex-col justify-center border border-zinc-900 h-56  bg-gradient-to-b from-transparent from-60% via-black mt-8 to-orange-950 ">
          <p className="text-gray-100 text-4xl tracking-tighter text-center px-3 font-medium">
            <span className="text-orange-500">{"<"}</span> Building solutions,
            one stack at a time <span className="text-orange-500">{"/>"}</span>
          </p>
        </div>
      
        </section>
    </>
  );
};
