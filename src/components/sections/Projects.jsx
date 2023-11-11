import { BiLogoGithub, BiNavigation } from "react-icons/bi";
import { projectData } from "../../data/projectsData";

export const Projects = () => {
  return (
    <section className="grid border border-zinc-900">
      <div className="row-span-1 mt-8 border border-zinc-900">
        <h3 className="text-zinc-200 text-3xl pb-8 mt-8 font-medium tracking-tighter text-center">
          My projects
        </h3>
      </div>
      <div className="grid grid-cols-1 mt-11 py-8 gap-8 border border-zinc-900">
        {projectData.map((project, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center rounded mx-auto  w-11/12 bg-gradient-to-br from-transparent from-70% to-zinc-900 border border-zinc-900"
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
    </section>
  );
};
