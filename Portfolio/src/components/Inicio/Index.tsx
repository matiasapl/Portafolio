type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <section className="page-section" aria-labelledby={id}>
      <h1
        className="section-heading"
        id={id}
      >
        Inicio
      </h1>
      <article className="home-hero">
        <div className="home-photo-wrap">
          <img
            src="/mi-foto.png"
            alt="Foto de Matias Alexander Polhwein Lara"
            className="home-photo"
          />
        </div>
        <div className="home-copy">
          <span className="home-name">
            Matias APL
          </span>
          <div>
            <span className="home-role">
              Desarrollador Web Full Stack con enfoque en Backend
            </span>
            <span className="home-tech-stack">
              Laravel · React · PHP · MySQL · Docker · TailwindCSS · Git · GitHub
            </span>
          </div>
          <div className="home-bio">
            <p>
              Soy Matías Alexander Polhwein Lara, desarrollador web con
              experiencia profesional desarrollando aplicaciones internas para
              optimizar procesos en entornos industriales.
            </p>
            <p>
              Trabaje como Técnico Informático / Desarrollador Interno en
              Embalajes Troya SpA, donde desarrolle herramientas utilizando
              Laravel, React, MySQL, Docker, N8N, Etc. para automatizar tareas,
              gestionar información y facilitar la toma de decisiones mediante
              dashboards y aplicaciones web.
            </p>
            <p>
              Disfruto construir software que resuelva problemas reales. Me
              interesa especialmente el desarrollo backend, la arquitectura de
              aplicaciones y la automatización de procesos, aunque también me
              desenvuelvo cómodamente en el desarrollo frontend cuando el
              proyecto lo requiere.
            </p>
            <p>
              Actualmente busco incorporarme a un equipo de ingeniería de
              software donde pueda seguir creciendo profesionalmente, aprender
              de otros desarrolladores y aportar con soluciones de calidad.
            </p>
            <p>
              Si quieres conocer mi trabajo, puedes revisar mis proyectos en
              este portafolio, explorar mi GitHub o ponerte en contacto conmigo.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Index;
