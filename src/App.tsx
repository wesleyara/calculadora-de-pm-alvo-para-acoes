import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Politicas from "./pages/Politicas";
import { Home } from "./pages/Home";
import "./styles/global.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<Politicas />} />
      </Routes>
    </Router>
  );
}
