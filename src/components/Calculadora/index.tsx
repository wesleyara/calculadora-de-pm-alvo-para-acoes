import { MdOutlineMouse } from "react-icons/md";
import { Container, Scroll } from "./styles";

export default function Calculadora() {
  return (
    <Container>
      <div>
        <h2>Insira sua quantidade de ações e seu preço médio em R$:</h2>
        <span>
          <input min={0} type="number" placeholder="Quantidade de ações" />
          <input min={0} type="number" placeholder="Preço Médio em (R$)" />
        </span>
        <h2>Depois o seu valor de compra em R$ e preço médio alvo em R$:</h2>
        <span>
          <input
            min={0}
            type="number"
            placeholder="Valor que vai comprar (R$)"
          />
          <input min={0} type="number" placeholder="Preço Médio alvo (R$)" />
          <button>Calcular</button>
        </span>
      </div>

      <div></div>

      <Scroll>
        <MdOutlineMouse />
        <a href="#howtouse">
          <span>Clique para saber como calcular</span>
        </a>
      </Scroll>
    </Container>
  );
}
