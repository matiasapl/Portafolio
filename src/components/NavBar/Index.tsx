import BtnVerCV from "./BtnVerCV";
import BtnScroll from "./BtnScroll";
import PersonalInfo from "./PersonalInfo";
type Props = {};

function Index({}: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top shadow-sm">
        <div className="container-fluid">
          <PersonalInfo
            Nombre="Matías Polhwein"
            Profecion="Desarrollador Web"
            Foto="/mi-foto.jpg"
          />
        </div>
        <div className="navbar-nav justify-content-end"></div>
        <BtnScroll GoTo="Inicio">Inicio</BtnScroll>
        <BtnScroll GoTo="Proyectos">Proyectos</BtnScroll>
        <BtnScroll GoTo="Estudios">Estudios</BtnScroll>
        <BtnScroll GoTo="Skills">Skills</BtnScroll>
        <BtnScroll GoTo="Sobre_MI">Sobre MI</BtnScroll>
        <BtnVerCV verCV="https://bit.ly/4mvckqe">Ver CV</BtnVerCV>
      </nav>
    </>
  );
}

export default Index;
