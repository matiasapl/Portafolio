import "./App.css";
import NavBar from "./components/NavBar/Index";
import Inicio from "./components/Inicio/Index";
import SobreMi from "./components/SobreMi/Index";
import Estudios from "./components/Estudios/Index";
import Proyectos from "./components/Proyectos/Index";
import Skills from "./components/Skills/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <NavBar />
      <Inicio id="Inicio" />
      <Proyectos id="Proyectos" />
      <Estudios id="Estudios" />
      <Skills id="Skills" />
      <SobreMi id="Sobre_MI" />
    </>
  );
}

export default App;
