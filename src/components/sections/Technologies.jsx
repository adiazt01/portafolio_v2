import {
  BiBrain,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiSolidKeyboard,
  BiWorld,
} from "react-icons/bi";
import "../../styles/gradients/textGradients.css";
import "../../styles/hovers/iconHover.css";
import ".././../styles/hovers/backgroundGradients.css";

const technologies = [
  {
    name: "Javascript",
    icon: <BiLogoJavascript />,
  },
  {
    name: "Python",
    icon: <BiLogoPython />,
  },
  {
    name: "HTML5",
    icon: <BiLogoHtml5 />,
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 />,
  },
  {
    name: "React",
    icon: <BiLogoReact />,
  },
  {
    name: "Express",
    icon: <BiLogoRedux />,
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "Bootstrap",
    icon: <BiLogoBootstrap />,
  },
];

export const Technologies = () => {
  return (
    <section id="Technologies" className="grid mt-16">
      <div className="row-span-1 mt-8 mx-3 md:mx-12 lg:mx-24 h-auto lg:h-32 py-8 border rounded-xl border-orange-900 shadow-orange-950 shadow-lg flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-orange-950">
        <p className="text-gray-100 w-full text-2xl md:text-3xl lg:text-5xl tracking-tighter text-center px-0 lg:px-10 font-medium ">
          Technologies we use{" "}
          <BiSolidKeyboard className="inline-block align-text-bottom mb-0" />
        </p>
      </div>
      <div className="flex flex-col justify-center mt-1 mb-1 items-center">
        <div className="border-dashed border-orange-700 border-2 h-16"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 px-8 from-transparent from-80% to-orange-600  w-full">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="techCell shadow-sm group hover:shadow-orange-500 border-2 bg-gradient-to-br rounded-xl  from-black to-zinc-900 radial  hover:to-orange-950 hover:bg-opacity-20 transition-all duration-400 hover:border-orange-600 border-zinc-900 py-2 flex flex-col items-center justify-center"
          >
            <div className="text-zinc-400 group-hover:text-white group-hover:scale-105 transition-all text-7xl lg:text-8xl z-10 tech-icon">
              {technology.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center mt-1 mb-1 items-center">
        <div className="border-dashed border-orange-700 border-2 h-16"></div>
      </div>
      <div className="flex mx-3 md:mx-12 lg:mx-24 flex-col justify-center items-center border border-orange-950 py-4 rounded-2xl bg-gradient-to-b from-transparent h-auto md:h-36 from-50% via-orange-950 to-orange-900 shadow-md shadow-orange-950">
        <p className="text-gray-100 text-2xl md:text-3xl tracking-tighter text-center px-3 font-medium">
          <span className="text-orange-500">{"< "}</span>
          There so many technologies out there{" "}
          <BiWorld className="inline-block align-text-bottom mb-0.5" />, but we
          are always learning new ones to improve our skills{" "}
          <BiBrain className="inline-block align-text-bottom mb-0.5" />
          <span className="text-orange-500">{" />"}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center mt-1 items-center">
        <div className="border-dashed border-orange-700 border-2 h-16"></div>
        <div className="bg-orange-600 h-4 w-4 mt-1 shadow-lg shadow-orange-500"></div>
      </div>
    </section>
  );
};
