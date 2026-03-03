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
            titulo="Portfolio y Consultoría Web"
            descripcion={
              <>
                <br />
                Esta web es un ejemplo de lo que puedo construir para ti: una
                plataforma optimizada, profesional y lista para convertir
                visitas en mensajes. Ayudo a profesionales a digitalizar sus
                servicios.
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
            titulo="Software de Gestión de Stock (SaaS)"
            descripcion={
              <>
                <br />
                Un sistema profesional diseñado para optimizar la logística de
                tu comercio. Actualmente en fase beta, disponible para
                profesionales que busquen digitalizar su control de almacén con
                una herramienta rápida y segura.
                <br />
              </>
            }
            VideoText="Imagenes del proyecto"
            WebText="Probar Demo"
            RepositorioText="GitHub"
            VideoLink="https://drive.google.com/drive/folders/1TszLGK-xCxbZ73TxGU_z2nY5gUpTxB-3?usp=drive_link"
            WebLink="https://inventario.mapl.dev/"
            RepositorioLink="https://github.com/matiasapl/INVENTARIO"
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
