import BtnVerCV from "./BtnVerCV";
import BtnScroll from "./BtnScroll";
import PersonalInfo from "./PersonalInfo";
type Props = {};

function Index({}: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top shadow-sm">
        <div className="container-fluid">
          {/* Branding: Foto + Nombre + Profesión */}
          <PersonalInfo
            Nombre="Matías Polhwein"
            Profecion="Desarrollador Web"
            Foto="/mi-foto.jpg"
          />
          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Contenido colapsable */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <BtnScroll GoTo="Inicio">Inicio</BtnScroll>
              </li>
              <li className="nav-item">
                <BtnScroll GoTo="Proyectos">Proyectos</BtnScroll>
              </li>
              <li className="nav-item">
                <BtnScroll GoTo="Estudios">Estudios</BtnScroll>
              </li>
              <li className="nav-item">
                <BtnScroll GoTo="Skills">Habilidades</BtnScroll>
              </li>
              <li className="nav-item">
                <BtnScroll GoTo="Sobre_MI">Sobre MI</BtnScroll>
              </li>
              <li className="nav-item">
                <BtnVerCV verCV="https://drive.google.com/file/d/17KIoMA5zzdBDAdRO8uIQTrWg3NupMbGK/view">
                  Ver CV
                </BtnVerCV>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Index;
