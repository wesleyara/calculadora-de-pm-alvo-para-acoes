import React from "react";
import style from "../components-styles/Politicas.module.css";
import arrow from "../images/arrow-back.svg";

export default function Politicas() {
  setTimeout(() => {
    const topo = document.getElementById("top") as HTMLDivElement;
    topo.scrollIntoView();
  }, 100);
  return (
    <>
      <a className={style.links} href="/">
        <div id="top" className={style.backHome}>
          <img src={arrow} alt="" />
          <span>Voltar para a página inicial</span>
        </div>
      </a>
      <div className={style.containerPoliticas}>
        <h1>Política de Privacidade</h1>
        <br />
        <p>
          Na precomedioalvo.com, privacidade e segurança são prioridades e nos
          comprometemos com a transparência do tratamento de dados pessoais dos
          nossos usuários/clientes. Por isso, esta presente Política de
          Privacidade estabelece como é feita a coleta, uso e transferência de
          informações de clientes ou outras pessoas que acessam ou usam nosso
          site. <br /> <br /> Ao utilizar nossos serviços, você entende que
          coletaremos e usaremos seus dados nas formas descritas nesta Política,
          sob as normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018),
          das disposições consumeristas da Lei Federal 8078/1990 e as demais
          normas do ordenamento jurídico brasileiro aplicáveis. <br /> <br />{" "}
          Dessa forma, ao utilizar o precomedioalvo.com, você concorda com toda
          coleta e uso de dados descritos abaixo:
        </p>
        <br />
        <p>
          <h2>1. Quais dados coletamos sobre você e para qual finalidade?</h2>
          <br />
          Nosso site coleta e utiliza alguns dados pessoais seus, de forma a
          viabilizar a prestação de serviços e aprimorar a experiência de uso.
          <br />
          <br />
          <ul>
            <li>
              Informações sobre a sua visita e utilização do site, como fonte do
              acesso, duração da visita, visualização de páginas e caminhos de
              navegação dentro do website.
            </li>
            <li>
              Informações como email, nome e demais informações enviadas ao
              entrar em contato conosco via email.
            </li>
            <li>
              Informações geradas enquanto usa o website incluindo onde, com que
              frequência e em que circunstâncias.
            </li>
            <li>
              Informações sobre o computador, incluindo endereço IP, localização
              geográfica, tipo de navegador e versão, duração de visita e
              sistema operacional.
            </li>
          </ul>
        </p>
        <br />
        <p>
          <h2>2. Cookies</h2>
          <br />
          A precomedioalvo.com faz uso de Cookies, que são arquivos de texto
          enviados pela plataforma ao seu computador e que nele se armazenam,
          que contém informações relacionadas à navegação do site. Em suma, os
          Cookies são utilizados para aprimorar a experiência de uso. <br />{" "}
          <br />
          Ao acessar nosso site e consentir com o uso de Cookies, você manifesta
          conhecer e aceitar a utilização de um sistema de coleta de dados de
          navegação com o uso de Cookies em seu dispositivo. <br /> <br />
          Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões,
          bloquear ou recusar os Cookies. Todavia, a revogação do consentimento
          de determinados Cookies pode inviabilizar o funcionamento correto de
          alguns recursos da plataforma. <br /> <br />
          Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente
          nas configurações do navegador, na área de gestão de Cookies. Você
          pode acessar tutoriais sobre o tema diretamente nos links abaixo:
          <br />
          <br />
          <ul>
            <li>
              {" "}
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                rel="noreferrer"
              >
                Internet Explorer
              </a>{" "}
              .
            </li>
            <li>
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
                rel="noreferrer"
              >
                Firefox
              </a>
              .{" "}
            </li>
            <li>
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                rel="noreferrer"
              >
                Safari
              </a>
              .{" "}
            </li>
            <li>
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR"
                rel="noreferrer"
              >
                Google Chrome
              </a>
              .{" "}
            </li>
            <li>
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
              .{" "}
            </li>
            <li>
              {" "}
              Se você usa o{" "}
              <a
                target="_blank"
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                rel="noreferrer"
              >
                Opera
              </a>{" "}
              .
            </li>
          </ul>
        </p>
        <br />
        <p>
          <h2>3. Como coletamos os seus dados?</h2>
          <br />
          Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte
          forma:
          <br />
          <br />
          <ul>
            <li>Anúncios: Google Adsense.</li>
            <li>
              Comunicação: Email. Ao entrar em contato com o dono do site, você
              compartilha a informação do seu email, que será utilizada para que
              possamos responde-lo.
            </li>
            <li>Dados pessoais: Cookies e dados de uso.</li>
            <li>Estatísticas: Google Analytics com IP anônimo.</li>
          </ul>
          <br />
          <h3>3.1. Consentimento</h3>
          <br />
          É a partir do seu consentimento que tratamos os seus dados pessoais. O
          consentimento é a manifestação livre, informada e inequívoca pela qual
          você autoriza a precomedioalvo.com a tratar seus dados. <br /> <br />
          Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados
          só serão coletados, tratados e armazenados mediante prévio e expresso
          consentimento.
        </p>
        <br />
        <p>
          <h2>4. Como e por quanto tempo seus dados serão armazenados?</h2>
          <br />
          Seus dados pessoais coletados pelo precomedioalvo.com serão utilizados
          e armazenados durante o tempo necessário para a prestação do serviço
          ou para que as finalidades elencadas na presente Política de
          Privacidade sejam atingidas, considerando os direitos dos titulares
          dos dados e dos controladores. <br /> <br />
          De modo geral, seus dados serão mantidos exclusivamente para a
          melhoria da experiência durante o uso do site, não vendemos ou
          alugamos quaisquer dados dos usuários, seja para qualquer propósito. O
          uso dos dados estão especificados nesta política de privacidade,
          respeitando os limites impostos pela lei nº 13.709. <br /> <br />
          Portanto, o usuário é proprietário de seus dados, e poderá optar por
          não os compartilhar, utilizando a opção de desabilitação dos cookies
          de seu navegador.
        </p>
        <br />
        <p>
          <h2>5. O que fazemos para manter seus dados seguros?</h2>
          <br />
          Para mantermos suas informações pessoais seguras, usamos ferramentas
          eletrônicas para a proteção da sua privacidade. É válido lembrar que o
          precomedioalvo.com toma as devidas precauções para garantir a
          segurança durante o uso do site. Porém, ao usar o precomedioalvo.com
          as informações irão passar por infraestruturas que não estão no nosso
          controle.
        </p>
        <br />
        <p>
          <h2>6. Alteração desta Política de Privacidade</h2>
          <br />
          A atual versão da Política de Privacidade foi formulada e atualizada
          pela última vez em: 10/01/2022. <br />
          Reservamos o direito de modificar essa Política de Privacidade a
          qualquer tempo, principalmente em função da adequação a eventuais
          alterações feitas em nosso site ou em âmbito legislativo. Recomendamos
          que você a revise com frequência. <br /> <br />
          Eventuais alterações entrarão em vigor a partir de sua publicação em
          nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.{" "}
          <br /> <br />
          Ao utilizar nossos serviços e fornecer seus dados pessoais após tais
          modificações, você as consente.
        </p>
        <br />
        <p>
          <h2>7. Encarregado de Proteção de Dados</h2>
          <br />
          Email para contato:{" "}
          <a
            target="_blank"
            href="mailto:wesleyara.contato@gmail.com"
            rel="noreferrer"
          >
            Wesley Araújo
          </a>
          .
        </p>
      </div>
      <a className={style.links} href="/">
        <div className={style.backHome}>
          <img src={arrow} alt="" />
          <span>Voltar para a página inicial</span>
        </div>
      </a>
    </>
  );
}
