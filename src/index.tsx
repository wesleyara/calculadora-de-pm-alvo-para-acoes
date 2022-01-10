import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Politicas from "./components/main/components-secondary/Politicas";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-de-privacidade" element={<Politicas />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
