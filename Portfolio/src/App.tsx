import "./App.css";
import Inicio from "./components/Inicio/Index";
import NavBar from "./components/NavBar/Index";
import Skills from "./components/Skills/Index";
import SobreMi from "./components/SobreMi/Index";
function App() {
  return (
    <div className="h-dvh w-screen bg-[url(/portfolio-img-bg.png)] bg-center bg-repeat">
      {/* Aquí puedes agregar los componentes que desees renderizar */}
      <NavBar />
      <Inicio id="Inicio" />
      <Skills id="Habilidades" />
      <SobreMi id="Sobre_MI" />
    </div>
  );
}

export default App;
