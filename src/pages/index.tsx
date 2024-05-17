import { About } from "~/components/About";
import { Calculator } from "~/components/Calculator";
import { Content } from "~/components/Content";
import { Footer } from "~/components/Footer";
import { Meta } from "~/components/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Calculadora de Preço Médio Alvo"
        description="A Calculadora de Preço Médio Alvo ajuda a gerenciar investimentos de
        forma eficiente, calculando a quantidade de ativos necessária para
        atingir um preço médio alvo e maximizar a rentabilidade."
      />
      <section className="window-width mx-auto mt-10 flex flex-wrap-reverse justify-center gap-20 md:mt-24">
        <Calculator />
        <About />
      </section>

      <Content />
      <Footer />
    </>
  );
}
