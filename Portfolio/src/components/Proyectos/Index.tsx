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
            RepositorioLink="https://github.com/matiasapl/Portafolio"
          />

          <Proyecto
            titulo="Web App Gestion de Inventarios"
            descripcion={
              <>
                con este proyecto aprendi html css y js, hay un video sobre la
                demo, fue la inspiracion para mi proyecto personal actual.
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

          <Proyecto
            titulo="Gestion de Inventarios"
            descripcion={
              <>
                Web APP en desarrollo puedes visitarla y probarla pero la
                <br />
                base de datos sera borrada 1 a 2 veses por semana, aunque esta
                <br />
                en web aun no esta habilitado para uso en la practica se aceptan
                <br />
                sugerencias que ayuden al desarrollo del producto
                <br />
                hecho con [React, TypeScript, TailWind, vite, Laravel, PHP]
                <br />
                Repositorio Privado
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink="https://greenyellow-mongoose-294732.hostingersite.com/"
            RepositorioLink=""
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
