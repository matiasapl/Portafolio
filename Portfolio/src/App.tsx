import "./App.css";
import NavBar from "./components/NavBar/Index";
import Inicio from "./components/Inicio/Index";
import SobreMi from "./components/SobreMi/Index";
import Estudios from "./components/Estudios/Index";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Estudios />
    </>
  );
}

export default App;
