import Proyecto from "./ModalProyecto";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="container-fluid bg-secondary px-0 py-4 section" id={id}>
        <Seccion texto="Mis Proyectos">
          <Proyecto
            titulo="Portfolio"
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
            WebLink=""
            RepositorioLink=""
          />

          <Proyecto
            titulo="Web App Gestion de Inventarios"
            descripcion={
              <>
                con este proyecto aprendi html css y js, hay un video sobre la
                demo pero aun no hago una version bien hecha con mis
                conocimientos actuales
                <br />
                FRONT: [HTML, CSS, Bootstrap, JS]
                <br />
                BACK: [PHP, PHPMAILER, COMPOSER]
                <br />
                BBDD: [MYSQL SERVER]
                <br />
              </>
            }
            VideoText="Video DEMO"
            WebText="Web"
            RepositorioText="GitHub DEMO"
            VideoLink="https://www.youtube.com/watch?v=jKZoG9FT1lA&t=0s"
            WebLink=""
            RepositorioLink="https://github.com/matiasapl/INVENTARIO_DEMO_1.0_"
          />

          <Proyecto
            titulo="Dashboard Web"
            descripcion={
              <>
                <br />
                <br />
                <span>un Dashboard web para la empresa donde trabajo</span>
                <br />
                <p>este es un proyecto que actualmente esta en desarrollo.</p>
                <br />
                <span>
                  es un dashboard que permite la visualizacion de datos de un
                  exel como web app
                </span>
                <br />
                <br />
                <span>permite filtrar por nombre, fecha inicio, fecha fin</span>
                <br />
                <br />
                <span>aplica una arquitectura cliente servidor</span>
                <br />
                <br />
                <span>es un proyecto dockerizado</span>
                <br />
                <p>
                  probablemente haga un articulo en mi blog cuando este
                  terminado
                </p>
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink=""
            RepositorioLink=""
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
