import { BiLogoGithub, BiNavigation, BiPlay } from "react-icons/bi";
import { projectData } from "../../data/projectsData";

export const Projects = () => {
  return (
    <section id="Projects" className="grid mt-12">
      <div className="row-span-1 mt-8 mx-3 md:mx-12 lg:mx-24 h-auto lg:h-32 py-8 border rounded-xl border-emerald-900 shadow-emerald-950 shadow-lg flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-emerald-950">
        <p className="text-gray-100 w-full text-3xl lg:text-5xl tracking-tighter text-center px-0 lg:px-10 font-medium ">
          Projects we&apos;ve built{" "}
          <BiPlay className="inline-block align-text-bottom mb-0" />
        </p>
      </div>
      <div className="flex flex-col justify-center mt-1 mb-1 items-center">
        <div className="border-dashed border-emerald-700 border-2 h-16"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projectData.map((project, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-between items-center rounded mx-auto  w-11/12 bg-gradient-to-br h-full from-transparent from-70% to-zinc-900 border border-zinc-900"
            >
              <div>
                <p className="text-xl font-medium text-center  mt-3 px-3 text-zinc-300">
                  {project.title}
                </p>
              </div>
              <div className="rounded-lg mt-4 w-full">
                <img
                  src={project.imgUrl}
                  className="w-full rounded-lg h-44 object-cover px-4"
                />
              </div>
              <div className="w-full">
                <p className="text-md text-left tracking-tighter mt-3 px-4 text-zinc-500">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-row justify-end w-full px-4 mt-3 gap-4 mb-4">
                <a
                  href=""
                  className="px-4 flex flex-row gap-3 items-center py-1 text-zinc-300 border border-zinc-800 rounded-xl bg-gradient-to-br to-zinc-900 from-zinc-950"
                >
                  <BiLogoGithub />
                  Github
                </a>
                <a
                  href=""
                  className="px-4 flex flex-row gap-3 items-center py-1 text-zinc-900 font-medium tracking-tight bg-gradient-to-br to-green-400 from-teal-500 rounded-xl"
                >
                  <BiNavigation />
                  Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center mt-1 items-center">
        <div className="border-dashed border-emerald-700 border-2 h-16"></div>
        <div className="bg-emerald-600 h-4 w-4 mt-1 shadow-lg shadow-emerald-500"></div>
      </div>
    </section>
  );
};
