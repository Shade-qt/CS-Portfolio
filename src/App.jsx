import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ForkVisualizer from "./pages/ForkVisualizer";
import AlgoVisualizer from "./pages/AlgoVisualizer";

function App() {
  return(
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/fork">Fork Visualizer</Link>
        <Link to="/algo">Algo Visualizer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fork" element={<ForkVisualizer />} />
        <Route path="/algo" element={<AlgoVisualizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
