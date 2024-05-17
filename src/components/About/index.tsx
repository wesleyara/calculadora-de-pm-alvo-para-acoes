import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export const About = () => {
  return (
    <main className="flex max-w-[500px] flex-col justify-center gap-4">
      <span className="flex items-center justify-center gap-2 md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#16a394"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2m1 7l6 6m-6 0l6-6"
          />
        </svg>
        <h3 className="text-white">Preço Médio Alvo</h3>
      </span>

      <span className="text-center md:text-start">
        A Calculadora de Preço Médio Alvo ajuda a gerenciar investimentos de
        forma eficiente, calculando a quantidade de ativos necessária para
        atingir um preço médio alvo e maximizar a rentabilidade.
      </span>

      <span className="my-4 flex items-center justify-center gap-4 text-[30px] md:text-[40px]">
        <FaGithub
          onClick={() =>
            open(
              "https://github.com/wesleyara/calculadora-de-pm-alvo-para-acoes",
            )
          }
          className="cursor-pointer"
        />
        <FaLinkedin
          onClick={() => open("https://www.linkedin.com/in/wesley-ara/")}
          className="cursor-pointer"
        />
        <GoMail
          onClick={() => open("mailto:wesleyara.contato@gmail.com")}
          className="cursor-pointer"
        />
      </span>

      <Link className="btn text-center" href={"#content"}>
        Como utilizar
      </Link>
    </main>
  );
};
