import BtnUrlBlank from "./BtnUrlBlank";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  const texto =
    "Soy un desarrollador web principiante en constante aprendizaje. Me apasiona crear aplicaciones web y mejorar mis habilidades en programación. Actualmente, estoy enfocado en aprender tecnologías como React, TypeScript y PHP. Mi objetivo es desarrollar proyectos interesantes y seguir creciendo profesionalmente en el campo del desarrollo web.";

  return (
    <>
      <div className="container-fluid px-0 py-4 bg-secondary section" id={id}>
        <Seccion texto={"Sobre Mi"}>
          {
            <div>
              {texto}
              <br />
              <br />
              <p>numero de teléfono: +56 983894202</p>
              <p>email: polhweinmatias@gmail.com</p>
              <br />
              <BtnUrlBlank url="https://github.com/matiasapl">
                GitHub
              </BtnUrlBlank>
              <BtnUrlBlank url="https://drive.google.com/file/d/17KIoMA5zzdBDAdRO8uIQTrWg3NupMbGK/view">
                Ver CV
              </BtnUrlBlank>
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
