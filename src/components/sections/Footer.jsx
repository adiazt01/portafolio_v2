import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const linksSocial = [
  {
    name: "Github",
    url: "",
    icon: <BiLogoGithub />,
  },
  { name: "Linkedin", url: "", icon: <BiLogoLinkedin /> },
  { name: "Email", url: "", icon: <BiLogoGmail /> },
];

export const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-4 border border-zinc-900 mt-16">
        <div className="flex mt-4 flex-col justify-center items-center rounded mx-auto w-full px-3">
          <p className="text-2xl w-full text-left font-medium  mt-3 px-5 text-zinc-300">
            Armando Diaz
          </p>
          <p className="text-sm w-full text-left tracking-tight text-zinc-400 px-5">
            Made with a lot of love and enthusiasm thanks to my family and my
            girlfriend 🤍
          </p>
        </div>
        <div className="grid grid-rows-1 grid-cols-2 px-4">
          <div className="flex flex-col px-2 mb-4">
            <ul className="flex justify-start gap-2">
              {linksSocial.map((link, i) => (
                <li key={i} className="mx-2">
                  <a href="" className="text-2xl text-gray-300">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-zinc-500 text-sm">
            <p>©️Copyright 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
