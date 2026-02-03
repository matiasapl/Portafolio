import BtnUrlBlank from "./BtnUrlBlank";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <section className="my-16">
      <h1
        className="text-4xl font-bold text-center mb-6 scroll-mt-16 bg-clip-text text-transparent bg-linear-to-bl from-purple-500 to-pink-500"
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
          <span className="text-4xl bg-clip-text font-bold text-transparent mt-4 bg-linear-to-bl from-purple-500 to-pink-500">
            Matias APL
          </span>
          <span className="text-xl bg-clip-text text-transparent bg-linear-to-bl from-purple-500 to-pink-500 mb-6">
            Desarrollador Web Full Stack
          </span>
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
