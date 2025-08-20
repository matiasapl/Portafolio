import Estudios from "./ModalCertificacion";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="container-fluid bg-secondary px-0 py-4 section" id={id}>
        <Seccion texto="Mis Estudios">
          <Estudios
            titulo="Tecnico Profecional"
            certificacion="Titulado en: Técnico de Nivel Superior en Programación
y Análisis de Sistemas"
            fechaInicio="Fecha Inicio: 2022"
            fechaFin="Fecha Fin: 2025"
            institucion="Institucion: Instituto Aiep San Fernando"
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
