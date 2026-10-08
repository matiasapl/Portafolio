import Inicio from "../components/Inicio/Index";
import NavBar from "../components/NavBar/Index";
import Skills from "../components/Skills/Index";
import SobreMi from "../components/SobreMi/Index";
import Estudios from "../components/Estudios/Index";
import Proyectos from "../components/Proyectos/Index";

export default function Contenido() {
  return (
    <div className="content-shell">
      <NavBar />
      <main className="site-shell">
        <Inicio id="Inicio" />
        <Proyectos id="Proyectos" />
        <Estudios id="Estudios" />
        <Skills id="Habilidades" />
        <SobreMi id="Sobre_MI" />
      </main>
    </div>
  );
}
