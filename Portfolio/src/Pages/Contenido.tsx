import { useEffect } from "react";
import Inicio from "../components/Inicio/Index";
import NavBar from "../components/NavBar/Index";
import Skills from "../components/Skills/Index";
import SobreMi from "../components/SobreMi/Index";
import Estudios from "../components/Estudios/Index";
import Proyectos from "../components/Proyectos/Index";

export default function Contenido() {
  //------------------------INICIO TRACKEO DE MOUSE------------------------
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //------------------------FIN TRACKEO DE MOUSE------------------------
  return (
    <>
      <div className="font-mono relative z-10 text-white"></div>
      <NavBar />
      <div className="flex flex-col justify-center mb-80 scroll-mt-10">
        <Inicio id="Inicio" />
      </div>

      <div className="lex flex-col justify-center mb-80 scroll-mt-10">
        <Proyectos id="Proyectos" />
      </div>

      <div className="flex flex-col justify-center mb-80 scroll-mt-10">
        <Estudios id="Estudios" />
      </div>

      <div className="flex flex-col justify-center mb-80 scroll-mt-10">
        <Skills id="Habilidades" />
      </div>

      <div className="flex flex-col justify-center mb-80 scroll-mt-10">
        <SobreMi id="Sobre_MI" />
      </div>
    </>
  );
}
