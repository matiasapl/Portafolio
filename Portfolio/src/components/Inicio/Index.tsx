type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <section className="my-16">
      <h1
        className="text-6xl font-light text-center mb-6 scroll-mt-16 text-indigo-600 text-shadow-pink-200"
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
          <span className="text-4xl font-light mt-4 text-indigo-600 text-shadow-pink-200">
            Matias APL
          </span>
          <div className="text-2xl mb-6 text-indigo-600 text-shadow-pink-200">
            Desarrollador Web Full Stack con enfoque en Backend <br /> Laravel · React · PHP · MySQL · Docker · TailwindCSS · Git · GitHub <br /> <br />

            <p className="text-justify">
            Soy Matías Alexander Polhwein Lara, <br />
            desarrollador web con experiencia profesional desarrollando aplicaciones internas <br />
            para optimizar procesos en entornos industriales.<br />
            <br />
            Trabaje como Técnico Informático / Desarrollador Interno en Embalajes Troya SpA, <br />
            donde desarrolle herramientas utilizando Laravel, React, MySQL, Docker, N8N, Etc. <br />
            para automatizar tareas, gestionar información y facilitar la toma de decisiones mediante dashboards y aplicaciones web. <br />
            <br />
            Disfruto construir software que resuelva problemas reales. <br />
            Me interesa especialmente el desarrollo backend, <br />
            la arquitectura de aplicaciones y la automatización de procesos, <br />
            aunque también me desenvuelvo cómodamente en el desarrollo frontend cuando el proyecto lo requiere.<br />
            <br />
            Actualmente busco incorporarme a un equipo de ingeniería de software donde pueda seguir creciendo profesionalmente, <br />
            aprender de otros desarrolladores y aportar con soluciones de calidad.<br />
            <br />
            Si quieres conocer mi trabajo, puedes revisar mis proyectos en este portafolio, <br />
            explorar mi GitHub o ponerte en contacto conmigo. <br />
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Index;
