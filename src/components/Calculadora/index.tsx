import { useState } from "react";
import { MdOutlineMouse } from "react-icons/md";
import { Container, Scroll } from "./styles";

export default function Calculadora() {
  const [qa, setQa] = useState(0); // Quantidade de ações
  const [pm, setPm] = useState(0); // Preço médio
  const [va, setVa] = useState(0); // Valor atual
  const [pa, setPa] = useState(0); // Preço médio alvo

  const [q, setQ] = useState(0);

  const [render, setRender] = useState(false);

  function handleClick() {
    if (qa === 0 || pm === 0 || pa === 0 || va === 0) {
      alert("Insira os valores que faltam para realizar o cálculo");
    } else if (pa >= pm || va >= pm) {
      alert(
        "O preço médio alvo ou o valor de compra não podem ser maiores ou iguais ao seu preço médio atual.",
      );
    } else if (pa <= va) {
      alert(
        "Não é possível calcular uma redução de preço médio alvo onde o valor de compra é maior que o alvo.",
      );
    } else {
      let qty = 0;
      let desejado = (qa * pm + qty * va) / (qa + qty);

      while (desejado > pa) {
        qty++;
        desejado = (qa * pm + qty * va) / (qa + qty);
      }

      console.log(qty);

      setQ(qty);
      setRender(true);
      return;
    }
  }

  return (
    <Container>
      <div>
        <h2>Insira sua quantidade de ações e seu preço médio em R$:</h2>
        <span>
          <input
            min={0}
            type="number"
            onChange={(e) => {
              setQa(Number(e.target.value));
              setRender(false);
            }}
            placeholder="Quantidade de ações"
          />
          <input
            min={0}
            type="number"
            onChange={(e) => {
              setPm(Number(e.target.value));
              setRender(false);
            }}
            placeholder="Preço Médio em (R$)"
          />
        </span>
        <h2>Depois o seu valor de compra em R$ e preço médio alvo em R$:</h2>
        <span>
          <input
            min={0}
            type="number"
            onChange={(e) => {
              setVa(Number(e.target.value));
              setRender(false);
            }}
            placeholder="Valor que vai comprar (R$)"
          />
          <input
            min={0}
            type="number"
            onChange={(e) => {
              setPa(Number(e.target.value));
              setRender(false);
            }}
            placeholder="Preço Médio alvo (R$)"
          />
          <button onClick={handleClick}>Calcular</button>
        </span>
      </div>

      {render == true && (
        <div className="response">
          Tendo em vista que você possui {qa} cotas dessa ação a um preço médio
          de R$ {pm.toFixed(2).replace(".", ",")}, desde que você compre mais
          ações no preço informado de R$ {va.toFixed(2).replace(".", ",")}, para
          atigir o preço médio alvo de R$ {pa.toFixed(2).replace(".", ",")} ou
          menos, será necessário comprar:
          <h2>
            {q} ações no valor de R$ {va.toFixed(2).replace(".", ",")}.
          </h2>
        </div>
      )}

      <Scroll>
        <MdOutlineMouse />
        <a href="#howtouse">
          <span>Clique para saber como calcular</span>
        </a>
      </Scroll>
    </Container>
  );
}
