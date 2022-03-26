import { Link } from "react-router-dom";
import style from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.reserv}>
        <Link className={style.copyright} to="/politica-de-privacidade">
          Políticas de Privacidade
        </Link>
      </p>
      <br />
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
