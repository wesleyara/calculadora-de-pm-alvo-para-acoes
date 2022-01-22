import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import style from "../components-styles/Cookies.module.scss";

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
        <Link className={style.link} to="/politica-de-privacidade">
          Política de Privacidade
        </Link>
        .
      </CookieConsent>
    </>
  );
}
