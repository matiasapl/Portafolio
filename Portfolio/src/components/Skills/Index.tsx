import Tecnologia from "./Tecnologia";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaDocker,
  FaUbuntu,
  FaWindows,
  FaGitAlt,
  FaFolderOpen,
  FaLaravel,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiVite,
  SiComposer,
  SiPhp,
  SiVirtualbox,
  SiUml,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuFrame } from "react-icons/lu";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <h1
        className="text-indigo-600 text-shadow-pink-200 text-shadow-md text-6xl font-light text-center mb-6 scroll-mt-16 p-2"
        id={id}
      >
        Habilidades
      </h1>
      <div className="text-center mx-2 p-4 grid grid-cols-3 gap-8 w-fit">
        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Front End">
            <Tecnologia foto={<FaHtml5 />} texto="HTML 5" />
            <Tecnologia foto={<FaCss3Alt />} texto="CSS 3" />
            <Tecnologia foto={<FaJs />} texto="JavaScript" />
            <Tecnologia foto={<FaReact />} texto="React" />
            <Tecnologia foto={<SiTailwindcss />} texto="Tailwind CSS" />
            <Tecnologia foto={<FaBootstrap />} texto="Bootstrap" />
            <Tecnologia foto={<SiVite />} texto="Vite" />
          </Seccion>
        </div>
        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Back End">
            <Tecnologia foto={<SiPhp />} texto="PHP" />
            <Tecnologia foto={<SiComposer />} texto="Composer" />
            <Tecnologia foto={<FaReact />} texto="MySQL" />
            <Tecnologia foto={<FaLaravel />} texto="Laravel" />
          </Seccion>
        </div>
        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Herramientas">
            <Tecnologia foto={<VscVscode />} texto="VS Code" />
            <Tecnologia foto={<SiVirtualbox />} texto="VirtualBox" />
            <Tecnologia foto={<FaDocker />} texto="Docker" />
          </Seccion>
        </div>
        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Sistemas Operativos">
            <Tecnologia foto={<FaUbuntu />} texto="Ubuntu" />
            <Tecnologia foto={<FaWindows />} texto="Windows" />
          </Seccion>
        </div>

        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Modelado">
            <Tecnologia foto={<SiUml />} texto="Star UML" />
            <Tecnologia foto={<LuFrame />} texto="Miro Wireframes" />
          </Seccion>
        </div>

        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Control de Versiones">
            <Tecnologia foto={<FaGitAlt />} texto="Git" />
            <Tecnologia foto={<FaGithub />} texto="Git Hub" />
          </Seccion>
        </div>

        <div className="border-yellow-400 text-center border-2 m-2">
          <Seccion texto="Estructuras de Carpetas">
            <Tecnologia foto={<FaFolderOpen />} texto="MVC" />
            <Tecnologia foto={<FaFolderOpen />} texto="Features" />
          </Seccion>
        </div>
      </div>
    </>
  );
}

export default Index;
