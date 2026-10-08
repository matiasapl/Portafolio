import BtnScroll from "./BtnScroll";

function Index() {
  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <div className="site-nav-inner">
        <BtnScroll GoTo="Inicio">Inicio</BtnScroll>
        <BtnScroll GoTo="Proyectos">Proyectos</BtnScroll>
        <BtnScroll GoTo="Estudios">Estudios</BtnScroll>
        <BtnScroll GoTo="Habilidades">Habilidades</BtnScroll>
        <BtnScroll GoTo="Sobre_MI">Sobre MI</BtnScroll>
      </div>
    </nav>
  );
}

export default Index;
