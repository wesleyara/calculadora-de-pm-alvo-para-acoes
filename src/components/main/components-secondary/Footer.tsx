import React from "react";
import style from "../components-styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <a className={style.copyright} href="mailto:wesleyara.contato@gmail.com">
        <p>Desenvolvido por Wesley Araújo</p>
      </a>
      <br />
      <p className={style.reserv}>
        Todos os direitos reservados - Wesley Araújo.
      </p>
    </div>
  );
}