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

      <div className="min-h-[300vh]">
        <Inicio id="Inicio" />
      </div>

      <div className="min-h-[300vh]">
        <Proyectos id="Proyectos" />
      </div>

      <div className="min-h-[300vh]">
        <Estudios id="Estudios" />
      </div>

      <div className="min-h-[300vh]">
        <Skills id="Habilidades" />
      </div>

      <div className="min-h-[300vh]">
        <SobreMi id="Sobre_MI" />
      </div>
    </div>
  );
}

export default App;
