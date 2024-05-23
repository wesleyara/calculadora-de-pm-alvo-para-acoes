import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { calculateAssetsNeed } from "~/lib";

const initialState = {
  assetsQuantity: 0,
  medianPrice: 0,
  buyValue: 0,
  medianPriceTarget: 0,
};

export const Calculator = () => {
  const { toast } = useToast();

  const [states, setStates] = useState(initialState);

  const [result, setResult] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStates({
      ...states,
      [e.target.name]: +e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result > 0) {
      setResult(0);
      return setStates(initialState);
    }
    if (
      states.assetsQuantity === 0 ||
      states.medianPrice === 0 ||
      states.buyValue === 0 ||
      states.medianPriceTarget === 0
    ) {
      return toast({
        title: "Atenção!",
        description: "Preencha todos os campos corretamente.",
      });
    }

    if (states.medianPriceTarget >= states.medianPrice) {
      return toast({
        title: "Atenção!",
        description:
          "O preço médio alvo deve ser menor que o preço médio atual.",
      });
    }

    if (states.buyValue >= states.medianPrice) {
      return toast({
        title: "Atenção!",
        description:
          "Não é possível calcular uma redução de preço médio alvo onde o valor de compra é maior que o alvo.",
      });
    }

    if (states.buyValue >= states.medianPriceTarget) {
      return toast({
        title: "Atenção!",
        description:
          "Não é possível calcular uma redução de preço médio alvo onde o valor de compra é maior que o alvo.",
      });
    }

    const assets = calculateAssetsNeed(states);

    setResult(assets);
  };

  return (
    <aside>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[500px] flex-col justify-center gap-5 rounded-md bg-[#ebebeb] p-10"
      >
        <h3 className="text-center text-black">
          Calculadora de Preço Médio Alvo
        </h3>

        {result > 0 ? (
          <span className="flex h-[405px] flex-col items-center justify-center">
            <span className="text-center text-black">
              Você precisa comprar {result} ações para atingir o preço médio
              alvo.
            </span>
          </span>
        ) : (
          <span className="flex h-[405px] flex-col gap-5">
            <span className="flex flex-col gap-2 text-black">
              <label htmlFor="assets-quantity">
                Quantidade de ações que você possui
              </label>
              <input
                type="number"
                min={0}
                id="assets-quantity"
                name="assetsQuantity"
                placeholder="Quantidade de ações"
                step="0.01"
                onChange={handleChange}
              />
            </span>

            <span className="flex flex-col gap-2 text-black">
              <label htmlFor="median-price">Preço médio atual</label>
              <input
                type="number"
                min={0}
                id="median-price"
                name="medianPrice"
                placeholder="Preço médio atual (R$)"
                step="0.01"
                onChange={handleChange}
              />
            </span>

            <span className="flex flex-col gap-2 text-black">
              <label htmlFor="buy-value">Valor de compra atual</label>
              <input
                type="number"
                min={0}
                id="buy-value"
                name="buyValue"
                placeholder="Valor de compra (R$)"
                step="0.01"
                onChange={handleChange}
              />
            </span>

            <span className="flex flex-col gap-2 text-black">
              <label htmlFor="median-price-target">Preço médio alvo</label>
              <input
                type="number"
                min={0}
                id="median-price-target"
                name="medianPriceTarget"
                placeholder="Preço médio alvo (R$)"
                step="0.01"
                onChange={handleChange}
              />
            </span>
          </span>
        )}

        <button type="submit" className="btn">
          {result > 0 ? "Calcular novamente" : "Calcular"}
        </button>
      </form>
    </aside>
  );
};
