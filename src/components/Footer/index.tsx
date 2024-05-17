import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="window-width mx-auto mt-24 flex justify-center pb-7">
      <span className="text-center">
        <span className="text-center text-white">
          &copy; {year} Calculadora de Preço Médio Alvo - Todos direitos reservados
        </span>

        <span className="flex gap-2 justify-center">
          <span className="text-white">Desenvolvido por:</span>
          <a
            href="https://wesleyaraujo.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Wesley Araújo
          </a>
        </span>
      </span>
    </footer>
  );
};
