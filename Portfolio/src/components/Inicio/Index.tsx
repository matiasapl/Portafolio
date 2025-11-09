import BtnUrlBlank from "./BtnUrlBlank";

import { FaGithub, FaLinkedin, FaWordpress } from "react-icons/fa6";

type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <section className="my-16">
      <h1
        className="text-white text-4xl font-bold text-center mb-6 scroll-mt-16"
        id={id}
      >
        Inicio
      </h1>
      <article className="flex flex-col items-center text-center p-8">
        <img
          src="/mi-foto.jpg"
          alt="Foto de Matias Alexander Polhwein Lara"
          className="size-16 rounded-full"
        />
        <span className="text-4xl font-bold text-white mt-4">Matias APL</span>
        <span className="text-xl text-white mb-6">
          Desarrollador Web Full Stack
        </span>
        <div className="flex space-x-4">
          <BtnUrlBlank url="https://github.com/matiasapl" icono={<FaGithub />}>
            GitHub
          </BtnUrlBlank>

          <BtnUrlBlank
            url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b"
            icono={<FaLinkedin />}
          >
            LinkedIn
          </BtnUrlBlank>

          <BtnUrlBlank
            url="https://matiasapl.blogspot.com/ "
            icono={<FaWordpress />}
          >
            Mi Blog
          </BtnUrlBlank>
        </div>
      </article>
    </section>
  );
}

export default Index;
