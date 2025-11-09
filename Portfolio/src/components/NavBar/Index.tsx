import BtnVerCV from "./BtnVerCV";
import BtnScroll from "./BtnScroll";
type Props = {};

function Index({}: Props) {
  return (
    <>
      <nav className="sticky top-0 flex justify-end items-end">
        <BtnScroll GoTo="Inicio">Inicio</BtnScroll>
        <BtnScroll GoTo="Proyectos">Proyectos</BtnScroll>
        <BtnScroll GoTo="Estudios">Estudios</BtnScroll>
        <BtnScroll GoTo="Habilidades">Habilidades</BtnScroll>
        <BtnScroll GoTo="Sobre_MI">Sobre MI</BtnScroll>
        <BtnVerCV verCV="https://drive.google.com/file/d/17KIoMA5zzdBDAdRO8uIQTrWg3NupMbGK/view">
          Ver CV
        </BtnVerCV>
      </nav>
    </>
  );
}

export default Index;
