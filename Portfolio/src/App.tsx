import "./App.css";
import Inicio from "./components/Inicio/Index";
import NavBar from "./components/NavBar/Index";
import Skills from "./components/Skills/Index";
import SobreMi from "./components/SobreMi/Index";
import Estudios from "./components/Estudios/Index";
import Proyectos from "./components/Proyectos/Index";

function App() {
  return (
    <div className="">
      {/* Aquí puedes agregar los componentes que desees renderizar */}
      <NavBar />
      <Inicio id="Inicio" />
      <Proyectos id="Proyectos" />
      <Estudios id="Estudios" />
      <Skills id="Habilidades" />

      <SobreMi id="Sobre_MI" />
    </div>
  );
}

export default App;
