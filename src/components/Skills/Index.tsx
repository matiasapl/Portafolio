import Tecnologia from "./Tecnologia";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="container-fluid bg-secondary px-0 py-4 section" id={id}>
        <Seccion texto="Mis Habilidades">
          <Tecnologia tecnologia="HTML" calidad="Dominado" />
          <Tecnologia tecnologia="CSS" calidad="Principiante" />
          <Tecnologia tecnologia="JS" calidad="Intermedio" />
          <Tecnologia tecnologia="Bootstrap" calidad="Intermedio" />
          <Tecnologia tecnologia="PHP" calidad="Principiante" />
          <Tecnologia tecnologia="MySql" calidad="Intermedio" />
          <Tecnologia tecnologia="React" calidad="Principiante" />
          <Tecnologia tecnologia="UML" calidad="Intermedio" />
          <Tecnologia tecnologia="WireFrames" calidad="Principiante" />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
