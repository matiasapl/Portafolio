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
            titulo="Plataforma de Gestión de Inventarios"
            descripcion={
              <>
                Aplicación web desarrollada con
                <strong>Laravel, React, MySQL y Docker</strong>
                para administrar inventarios de forma eficiente.
                <br />
                <br />
                Actualmente incorpora:
                <ul>
                  <li>✔ Gestión de productos</li>
                  <li>✔ Gestión por lotes</li>
                  <li>✔ Control de almacenes</li>
                  <li>✔ Movimientos de inventario</li>
                  <li>✔ Historial de acciones</li>
                  <li>✔ Usuarios y permisos</li>
                  <li>
                    ✔ Arquitectura modular preparada para seguir creciendo
                  </li>
                </ul>
                Proyecto desarrollado como iniciativa personal y en constante
                evolución.
              </>
            }
            WebText="Probar Demo"
            WebLink="https://inventario.mapl.dev/"
          />

          <Proyecto
            titulo="Dashboard KPI Embalajes Troya"
            descripcion={
              <>
                Aplicación web desarrollada con
                <strong>Laravel, React, MariaDB y Docker</strong>
                Para ver KPI de produccion de [Pallets, BINS, Parrillas,
                Personal, Licencias] en forma de graficos de barra con recharts
                <br />
                <br />
                Se alimenta desde aplicacion Front que tambien sirve para
                Visualizar:
                <ul>
                  <li>Top Armadores [Cantidad de Pallets, Valor Frabricado]</li>
                  <li>✔ Filtrar por Producto</li>
                  <li>✔ Filtrar por Armador</li>
                  <li>✔ Filtrar por Fecha</li>
                  <li>✔ Selector que permite ver</li>
                  <li>✔ Vista Rotativa por codigo tipo carrusell</li>
                  <li>✔ Vista Estatica por codigo</li>
                  <li>✔ Se alimenta con el Excel de produccion Existente</li>
                  <li>
                    ✔ Tambien Cuenta con un Apartado para verificar cumplimiento
                    de armadores acorde a la planificacion semanal, carga por
                    CSV.
                  </li>
                  <li>
                    ✔ Arquitectura modular preparada para seguir creciendo
                  </li>
                </ul>
                Proyecto desarrollado como parte de mi trabajo en Embalajes
                Troya Spa.
              </>
            }
          />
          <Proyecto
            titulo="Aplicacion Formulario para Cargar producciones de Armado"
            descripcion={
              <>
                Aplicación web desarrollada con
                <strong>
                  React Native + Expo + Microsoft Active Directory
                </strong>
                Un Formulario para Cargar y Visualizar Informacion de Produccion
                en Tiempo Real
                <br />
                <br />
                Hecha para usarse en una Tablet y llenar campos tipo formulario,
                , y lo pueden ver quienes tengan acceso, usa la autenticacion
                oath de microsoft,
                <ul>
                  <li>✔ Historia de registros</li>
                  <li>✔ El excel esta en onedrive</li>
                  <li>
                    ✔ Para ingresar Produccion se requiere permiso de edicion al
                    correo
                  </li>
                  <li>✔ Usa el login de OAuth de Microsoft AD</li>
                  <li>✔ Funcional</li>
                </ul>
                Proyecto desarrollado como parte de mi trabajo en Embalajes
                Troya Spa. Este Proyecto no termino de gustar por temas de UX y
                se Descarto debido a que se decidio contratar un erp y yo tenia
                demaciados Proyectos Abiertos. El repositorio con el codigo esta
                en manos de Troya en caso que decida Retomar su desarrollo en un
                futuro aunque seria impractico.
              </>
            }
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
