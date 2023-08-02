import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Linea from "./components/Linea";
import Seguimiento from "./components/Seguimiento";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/linea" element={<Linea />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
