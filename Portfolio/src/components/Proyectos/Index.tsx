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
                <br />
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
            VideoText="Imagenes del proyecto"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink="https://drive.google.com/drive/folders/1TszLGK-xCxbZ73TxGU_z2nY5gUpTxB-3?usp=drive_link"
            WebLink="https://inventario.mapl.dev/"
            RepositorioLink="https://github.com/matiasapl/INVENTARIO"
          />

          <Proyecto
            titulo="Top/Dashboard de Armadores de Pallets"
            descripcion={
              <>
                <br />
                Una web app que permite visualizar las cantidades de pallets
                producidos por cada armador alimentado de un excel de
                producciones en la empresa donde trabajo permite filtrar
                facilmente por fecha y nombre para llevar una trazabilidad de
                armado, cantidades, y saber quienes cumplen quienes no y permite
                cargarse importando directamente el excel usado para registrar
                producciones
                <br />
                <br />
                hecho con [Laravel + React con Inertia, BBDD MYSQL, Docker
                Compose, Bash Scripts]
                <br />
              </>
            }
            VideoText="N/A"
            WebText="N/A"
            RepositorioText="N/A"
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
