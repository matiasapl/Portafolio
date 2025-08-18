import "./App.css";
import NavBar from "./components/NavBar/Index";
import Inicio from "./components/Inicio/Index";
import SobreMi from "./components/SobreMi/Index";
import Estudios from "./components/Estudios/Index";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <body className="bg-dark text-white">
      <NavBar />
      <Inicio />
      <SobreMi />
      <Estudios />
    </body>
  );
}

export default App;
