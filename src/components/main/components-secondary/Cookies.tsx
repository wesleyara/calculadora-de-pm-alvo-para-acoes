import React from "react";
import CookieConsent from "react-cookie-consent";
import style from "../components-styles/Cookies.module.css";

export default function Cookie() {
  return (
    <>
      <CookieConsent
        location="bottom"
        style={{ backgroundColor: "black" }}
        buttonStyle={{
          padding: "15px",
          fontWeight: "bold",
        }}
        buttonText="PERMITIR TODOS OS COOKIES"
        expires={90}
      >
        Utilizamos cookies essenciais para melhorar a experiência do usuário ao
        acessar este site, veja as{" "}
        <a className={style.link} href="/politica-de-privacidade">
          Política de Privacidade
        </a>
        .
      </CookieConsent>
    </>
  );
}
