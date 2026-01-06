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
            WebLink=""
            RepositorioLink="https://github.com/matiasapl/Portafolio"
          />

          <Proyecto
            titulo="Web App Gestion de Inventarios (Terminado)"
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
            titulo="Gestion de Inventarios (Proyecto Principal)"
            descripcion={
              <>
                es una web de gestion de inventarios en desarrollo continuo
                <br />
                se acepta sugerencias que ayuden al desarrollo del producto
                <br />
                hecho con [Laravel + React con Inertia]
                <br />
                <br />
                Repositorio Privado
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink="https://inventario.mapl.dev/"
            RepositorioLink=""
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
