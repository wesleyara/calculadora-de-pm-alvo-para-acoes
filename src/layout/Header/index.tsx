import style from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <div id="header" className={style.header}>
        <h1>CALCULADORA DE PREÇO MÉDIO ALVO</h1>
        <h3 className={style.sub}>
          Calcule a quantidade de ativos necessários para alcançar seu preço
          médio alvo!
        </h3>
      </div>
    </>
  );
}
