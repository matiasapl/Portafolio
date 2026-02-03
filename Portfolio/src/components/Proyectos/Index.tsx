import Proyecto from "./ModalProyecto";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div
        className="container-fluid bg-secondary px-0 py-4 section p-1 scroll-mt-16 my-10"
        id={id}
      >
        <Seccion texto="Proyectos">
          <Proyecto
            titulo="Portfolio (Esta Web)"
            descripcion={
              <>
                este portfolio fue creado para mostrar mis habilidades y
                proyectos.
                <br />
                hecho con [React, TypeScript, TailWind, vite]
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink="https://mapl.dev/"
            RepositorioLink="https://github.com/matiasapl/Portafolio"
          />

          <Proyecto
            titulo="Gestion de Inventarios con Laravel"
            descripcion={
              <>
                <br />
                Una web para gestion de inventarios actualmente no es practica
                pero sirve como demostracion
                <br />
                hecho con [Laravel + React con Inertia] Alojado en Hostinger
                <br />
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink="https://inventario.mapl.dev/"
            RepositorioLink="https://github.com/matiasapl/INVENTARIO"
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
