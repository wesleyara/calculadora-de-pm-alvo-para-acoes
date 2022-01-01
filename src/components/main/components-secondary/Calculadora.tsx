/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import style from "../components-styles/Calculadora.module.css";

export default function Calculadora() {
  return (
    <div className={style.containerCalc}>
      <div>
        <h2>Insira sua quantidade de ações e seu preço médio:</h2>
        <br />
        <input
          min={0}
          type="number"
          className={style.values}
          placeholder="Quantidade de ações"
          id="valueQ"
        />
        <input
          min={0}
          type="number"
          className={style.values}
          placeholder="Preço Médio em (R$)"
          id="valuePM"
        />
        <br />
        <br />
        <h2>Depois o seu valor de compra e preço médio alvo:</h2>
        <br />
        <input
          min={0}
          type="number"
          className={style.values}
          placeholder="Valor que vai comprar (R$)"
          id="valueH"
        />
        <input
          min={0}
          type="number"
          className={style.values}
          placeholder="Preço Médio alvo (R$)"
          id="valueA"
        />
        <input
          type="button"
          className={style.btn}
          value="Calcular"
          onClick={calcular}
        />
      </div>

      <div className={style.answer} id="answer"></div>
    </div>
  );
}

function calcular() {
  const resposta = document.getElementById("answer") as HTMLDivElement;
  const valorQ: any = document.getElementById("valueQ");
  const valorPM: any = document.getElementById("valuePM");
  const valorA: any = document.getElementById("valueA");
  const valorH: any = document.getElementById("valueH");
  let q = 0;

  resposta.innerHTML = "";

  const valueQ = Number(valorQ.value);
  const valuePM = Number(valorPM.value);
  const valueA = Number(valorA.value);
  const valueH = Number(valorH.value);

  if (valueQ === 0 || valuePM === 0 || valueA === 0 || valueH === 0) {
    alert("Insira os valores que faltam para realizar o cálculo");
  } else if (valueA >= valuePM || valueH >= valuePM) {
    alert(
      "O preço médio alvo ou o valor de compra não podem ser maiores ou iguais ao seu preço médio atual.",
    );
  } else if (valueA <= valueH) {
    alert(
      "Não é possível calcular uma redução de preço médio alvo onde o valor de compra é maior que o alvo.",
    );
  } else {
    let desejado = (valueQ * valuePM + q * valueH) / (valueQ + q);

    while (desejado > valueA) {
      q++;
      desejado = (valueQ * valuePM + q * valueH) / (valueQ + q);
    }

    resposta.innerHTML = `
    <hr>
    <br>
  
    <p>
    Tendo em vista que você possui ${valueQ} cotas dessa ação a um preço médio de R$ ${valuePM
      .toFixed(2)
      .replace(
        ".",
        ",",
      )}, desde que você compre mais ações no preço informado de R$ ${valueH
      .toFixed(2)
      .replace(".", ",")}, para atigir o preço médio alvo de R$ ${valueA
      .toFixed(2)
      .replace(".", ",")} ou menos, será necessário comprar: 
      <br>
      <br>
      <h2 style="margin-left: 0px; text-align:center;">${q} ações no valor de R$ ${valueH
      .toFixed(2)
      .replace(".", ",")}.</h2>
    </p>
    `;
  }
}
