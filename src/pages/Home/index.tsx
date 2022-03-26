import Calculadora from "../../components/Calculadora";
import Conteudo from "../../components/Conteudo";
import Cookie from "../../components/Cookies";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export function Home() {
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
