import "./App.css";
import NavBar from "./components/NavBar/Index";
import Inicio from "./components/Inicio/Index";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <body className="bg-dark text-white">
      <NavBar />
      <Inicio />
    </body>
  );
}

export default App;
