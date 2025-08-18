import BtnUrlBlank from "./BtnUrlBlank";
import Seccion from "./Seccion";
type Props = {};

function Index({}: Props) {
  const texto =
    "Mi portafolio profesional. Aquí encontrarás información sobre mis proyectos y habilidades. texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho texto texto mucho textotexto mucho texto texto mucho texto texto mucho texto texto mucho texto  texto mucho texto";
  return (
    <>
      <div className="container-fluid px-0 py-4 bg-secondary">
        <Seccion texto={"Sobre Mi"}>
          {
            <div>
              <p>{texto}</p>
              <BtnUrlBlank url="https://github.com/matiasapl">
                GitHub
              </BtnUrlBlank>
              <BtnUrlBlank url="https://bit.ly/472J4lO">Ver CV</BtnUrlBlank>
              <BtnUrlBlank url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b">
                LinkedIn
              </BtnUrlBlank>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
