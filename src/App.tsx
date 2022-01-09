import React from "react";
import Header from "./components/main/components-secondary/Header";
import Calculadora from "./components/main/components-secondary/Calculadora";
import Conteudo from "./components/main/components-secondary/Conteudo";
import Footer from "./components/main/components-secondary/Footer";
import Cookie from "./components/main/components-secondary/Cookies";

function App() {
  return (
    <div className="corpo">
      <Header />
      <Cookie />
      <Calculadora />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
