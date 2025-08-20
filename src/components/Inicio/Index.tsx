import BtnUrlBlank from "./BtnUrlBlank";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  const texto =
    "portafolio profesional de Matias Polhwein. Aquí encontrarás información sobre mis proyectos y habilidades.";
  return (
    <>
      <div
        className="container-fluid bg-secondary text-dark p-0 section"
        id={id}
      >
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
