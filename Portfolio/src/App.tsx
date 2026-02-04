import { useEffect } from "react";
import "./App.css";
import Inicio from "./components/Inicio/Index";
import NavBar from "./components/NavBar/Index";
import Skills from "./components/Skills/Index";
import SobreMi from "./components/SobreMi/Index";
import Estudios from "./components/Estudios/Index";
import Proyectos from "./components/Proyectos/Index";

function App() {
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    // IMPORTANTE: Usamos clientX/Y para la posición relativa a la ventana
    document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <div className="font-mono relative z-10 text-white">
      <NavBar />
      <div className=" flex flex-col justify-center mb-80 scroll-mt-10">
        <Inicio id="Inicio" />
      </div>

      <div className="lex flex-col justify-center mb-80 scroll-mt-10">
        <Proyectos id="Proyectos" />
      </div>

      <div className="flex flex-col justify-center mb-80 scroll-mt-10">
        <Estudios id="Estudios" />
      </div>

      <div className="min-h-[300vh] flex flex-col justify-center mb-80 scroll-mt-10">
        <Skills id="Habilidades" />
      </div>

      <div className="min-h-[300vh] flex flex-col justify-center mb-80 scroll-mt-10">
        <SobreMi id="Sobre_MI" />
      </div>
    </div>
  );
}

export default App;
