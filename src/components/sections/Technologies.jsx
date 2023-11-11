import { BiLogoBootstrap, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

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
  }
  ,
  {
    name: "MongoDB",
    icon: <BiLogoMongodb />,
  }
  ,
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
  }
];

export const Technologies = () => {
  return (
    <section className="grid border border-zinc-900 pb-8">
      <div className="row-span-1">
        <h3 className="text-zinc-200 text-3xl mt-8 font-medium tracking-tighter text-center">
          My technologies
        </h3>
      </div>
      <div className="grid mt-8 grid-cols-2  w-full">
        {technologies.map((technology, index) => (
          <div key={index} className="border border-zinc-900 py-2 flex flex-col  items-center justify-center">
            <div className="text-zinc-50 text-7xl">{technology.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
