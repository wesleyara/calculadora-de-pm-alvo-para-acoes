export const Content = () => {
  return (
    <section className="window-width mx-auto mt-24 flex flex-col gap-4" id="content">
      <span className="flex flex-col gap-4">
        <h3>Descrição:</h3>
        <span>
          Impulsionados pela vontade de melhor investir o seu dinheiro, cada dia
          mais vem crescendo o número de investidores no Brasil, e com isso vem
          também a necessidade de fazer diferentes cálculos para manter toda
          movimentação do seu dinheiro em ordem e da forma mais lucrativa
          possível, de acordo com seu perfil de investidor.
        </span>
        <span>
          Com isso, surge essa ferramenta, a Calculadora de Preço Médio Alvo
          nada mais é do que um recurso para o auxílio e melhor gestão do seu
          dinheiro investido, pois afinal de contas, quem não quer rentabilizar
          o máximo da sua grana? O recurso ajuda a calcular a quantidade de
          ativos necessários para alcançar seu preço médio alvo. Para entender
          melhor o que essa ferramenta pode lhe ajudar, segue alguns conteúdos
          que são importantes para você entender como funciona a dinâmica por
          trás desse recurso importantíssimo na vida de um investidor:
        </span>
      </span>

      <span className="flex flex-col gap-4">
        <h3 id="howtouse">Como usar a ferramenta?</h3>

        <span className="flex flex-col">
          Para utilizar a ferramenta, basta inserir seus dados do ativo que
          deseja que seja calculado, segue o passo a passo:
          <span>1º Inserir a sua quantidade de ações atuais;</span>
          <span>2º Inserir seu preço médio atual em R$;</span>
          <span>3º Inserir o valor em R$ desejado para comprar o ativo;</span>
          <span>
            4º Insira o preço médio alvo, ou seja, o que você deseja reduzir e
            clique em calcular.
          </span>
          <span className="my-2">OBS:</span>
          <span>
            - O valor de compra do ativo e o preço médio alvo sempre tem que ser
            menor do que o seu preço médio atual, afinal de contas você quer
            reduzir o seu preço médio;
          </span>
          <span>
            - O valor de compra tem que ser menor que o preço médio alvo, pois
            somente assim será possivel reduzir o preço médio atual.
          </span>
        </span>
        <h3>O que é preço médio?</h3>
        <span>
          O preço médio nada mais é do que o cálculo utilizado para medir a a
          média de preço entre valores de compras diferentes. Muito utilizado na
          bolsa de valores, o cálculo do preço médio é indispensável para o
          controle de seus ativos.
        </span>
        <span>
          Como por exemplo, você tem 10 ativos de uma empresa no valor de R$
          12,00, depois de um tempo você viu que o valor desses ativos
          diminuiram e então você decide comprar novamente mais 10 ativos, só
          que agora pelo valor de R$ 10,00, o seu preço médio vai ser calculado
          em cima da quantidade de ativos que você possui e o valor total gasto
          neles, em uma conta simples, você gastou R$ 220,00 para adquirir esses
          20 ativos, quando você calcula o preço total divido pela quantidade de
          ativos, você obtém o seu preço médio que é de R$ 11,00.
        </span>
        <span>
          Nesse caso vimos o que acontece quando compramos ativos de uma mesma
          empresa com preços diferentes, que chamamos de preço médio, mas e se
          tentarmos ir além? invés de somente comprar e ver abaixar o valor do
          seu preço médio, podemos determinar o valor do preço médio que quer
          alcançar!
        </span>
        <h3>O que é preço médio alvo?</h3>
        <span>
          O preço médio alvo nada mais é do que um valor estipulado pelo
          investidor para ser alcançado, serve como um controlador do lucro e do
          crescimento de sua carteira de invetimentos. Saber utilizar bem essas
          estimativas a seu favor é um fator muito importante e decisivo dentro
          desse ramo, principalmente no que tange a tomada de decisões na hora
          de comprar ou vender qualquer ativo.
        </span>
        <span>
          Pelo cálculo do preço médio alvo ser um pouco complicado de se fazer,
          é dai que surge essa ferramenta, que age como facilitadora para a
          realização desse cálculo de forma fácil e prática. É por isso que esse
          recurso é tão importante, a possibilidade de fazer isso sem muito
          trabalho adianta bastante o tempo de investidores que precisam de
          agilidade na hora de tomar uma decisão.
        </span>
        <h3>Onde obtenho essas informações?</h3>
        <span>
          Você já realizou várias compras e não sabe as informações sobre os
          preços que comprou o ativo? Fica calmo que isso é fácil de se
          resolver. As corretoras da bolsa tem seus próprios sistemas que
          guardam essas informações para você, pois elas são muito necessárias
          para negociações futuras, então basta que você olhe no aplicativo ou
          site da corretora, lá provavelmente também já estará descrito o seu
          preço médio em cada ativo, com isso, basta utiliza-lo aqui no site e
          calcular a quantidade de ativos necessários para alcançar seu preço
          médio alvo.
        </span>
      </span>
    </section>
  );
};
