import BtnUrlBlank from "./BtnUrlBlank";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <section className="my-16">
      <h1
        className="text-6xl font-light text-center mb-6 scroll-mt-16 text-indigo-600 text-shadow-pink-200 text-shadow-lg"
        id={id}
      >
        Inicio
      </h1>
      <article className="flex flex-row justify-center items-center text-center p-8">
        <div>
          <img
            src="/mi-foto.png"
            alt="Foto de Matias Alexander Polhwein Lara"
            className="mix-blend-screen opacity-75"
          />
        </div>
        <div className="flex flex-col items-center text-center p-8">
          <span className="text-4xl font-light mt-4 text-indigo-600 text-shadow-pink-200 text-shadow-lg">
            Matias APL
          </span>
          <p className="text-2xl mb-6 text-indigo-600 text-shadow-pink-200 text-shadow-md">
            Desarrollador Web Full Stack <br /> Laravel · React · PHP · MySQL
            <br />
            <br />
            Desarrollo aplicaciones web para automatizar procesos, optimizar
            operaciones y resolver problemas reales mediante software.
          </p>
          <div className="flex space-x-4 ">
            <BtnUrlBlank
              url="https://github.com/matiasapl"
              icono={<FaGithub />}
            >
              GitHub
            </BtnUrlBlank>

            <BtnUrlBlank
              url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b"
              icono={<FaLinkedin />}
            >
              LinkedIn
            </BtnUrlBlank>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Index;
