/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import style from "../components-styles/Calculadora.module.css";

export default function Calculadora() {
  return (
    <div className={style.containerCalc}>
      <div>
        <h2>Insira os dados das suas ações atualmente:</h2>
        <br />
        <input
          type="number"
          className={style.values}
          placeholder="Quantidade de ações"
          id="valueQ"
        />
        <input
          type="number"
          className={style.values}
          placeholder="Preço Médio"
          id="valuePM"
        />
        <br />
        <br />
        <h2>Depois o seu preço médio alvo e valor de compra:</h2>
        <br />
        <input
          type="number"
          className={style.values}
          placeholder="Valor que deseja comprar"
          id="valueH"
        />
        <input
          type="number"
          className={style.values}
          placeholder="Preço Médio alvo"
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

  const valueQ = Number(valorQ.value);
  const valuePM = Number(valorPM.value);
  const valueA = Number(valorA.value);
  const valueH = Number(valorH.value);

  let desejado = (valueQ * valuePM + q * valueH) / (valueQ + q);

  while (desejado > valueA) {
    q++;
    desejado = (valueQ * valuePM + q * valueH) / (valueQ + q);
  }

  console.log(`ValueQ = ${valueQ}`);
  console.log(`ValuePM = ${valuePM}`);
  console.log(`ValueA = ${valueA}`);
  console.log(`ValueH = ${valueH}`);
  console.log(`Q = ${q}`);
  console.log(`Desejado = ${desejado}`);

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
