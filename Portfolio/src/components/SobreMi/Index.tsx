import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="p-1 scroll-mt-16 my-10" id={id}>
        <Seccion texto={"Sobre Mi"}>
          {
            <div className="font-light px-8 border-yellow-400 box-border border-2 text-indigo-600 text-shadow-pink-200">
              <strong className="py-5 my-4 solid text-indigo-600">
                Desarrollador Web Full Stack con enfoque en Backend
                <br />
                <br />
                Soy Matías Polhwein, desarrollador web con experiencia
                profesional desarrollando aplicaciones internas para optimizar
                procesos en entornos industriales.
                <br />
                <br />
                Actualmente trabajo como Técnico Informático / Desarrollador
                Interno en Embalajes Troya SpA, donde desarrollo herramientas
                utilizando Laravel, React y MySQL para automatizar tareas,
                gestionar información y facilitar la toma de decisiones mediante
                dashboards y aplicaciones web.
                <br />
                <br />
                Disfruto construir software que resuelva problemas reales. Me
                interesa especialmente el desarrollo backend, la arquitectura de
                aplicaciones y la automatización de procesos, aunque también me
                desenvuelvo cómodamente en el desarrollo frontend cuando el
                proyecto lo requiere.
                <br />
                <br />
                Actualmente busco incorporarme a un equipo de ingeniería de
                software donde pueda seguir creciendo profesionalmente, aprender
                de otros desarrolladores y aportar con soluciones de calidad.
                <br />
                <br />
                Si quieres conocer mi trabajo, puedes revisar mis proyectos en
                este portafolio, explorar mi GitHub o ponerte en contacto
                conmigo.
              </strong>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
