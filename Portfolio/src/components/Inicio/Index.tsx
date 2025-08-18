import BtnUrlBlank from "./BtnUrlBlank";
import Seccion from "./Seccion";
type Props = {};

function Index({}: Props) {
  const texto =
    "Mi portafolio profesional. Aquí encontrarás información sobre mis proyectos y habilidades. texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho textotexto mucho texto texto mucho texto texto mucho texto texto mucho texto  texto mucho texto";
  return (
    <>
      <div className="container-fluid bg-secondary text-dark p-0">
        <Seccion texto="Inicio">
          <p>{texto}</p>
          <BtnUrlBlank url="https://github.com/matiasapl">GitHub</BtnUrlBlank>
          <BtnUrlBlank url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b">
            LinkedIn
          </BtnUrlBlank>
        </Seccion>
      </div>
    </>
  );
}

export default Index;
