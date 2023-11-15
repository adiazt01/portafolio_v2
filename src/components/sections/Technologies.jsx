import {
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
} from "react-icons/bi";
import "../../styles/gradients/textGradients.css"
import "../../styles/hovers/iconHover.css"
import ".././../styles/hovers/backgroundGradients.css"

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
    <section className="grid border border-zinc-900">
      <div className="row-span-1 mt-8 border-t border-t-zinc-900">
        <h3 className="text-zinc-200 text-3xl mt-8 font-medium tracking-tighter text-center text-gradient-orange">
          My technologies
        </h3>
      </div>
      <div className="grid mt-8 mb-8 grid-cols-2  w-full">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="border techCell hover:bg-orange-950 hover:bg-opacity-20 transition duration-400 hover:border-orange-600  border-zinc-900 py-2 flex flex-col items-center justify-center"
          >
            <div className="text-zinc-50 text-7xl z-10 tech-icon">{technology.icon}</div>
          </div>
        ))}
      </div>
      <div className="row-span-1 flex flex-col justify-center border border-zinc-900 h-56">
        <p className="text-gray-100 text-4xl tracking-tighter text-center px-3 font-medium">
          There&apos;s so much
        </p>
      </div>
    </section>
  );
};
