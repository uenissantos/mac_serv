import React from "react";
import * as Styled from "./styles";
import { Text } from "../../components/Text/Text";
import { MyLink } from "../../components/Link";
import { Image } from "../../components/Image";
import { Button } from "../../components/Buttom/Button";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";

export const About = () => {
  const menu = [
    { children: "Home/", href: "/", newTab: false },

    { children: "Serviços/", href: "/", newTab: false },

    { children: "Sobre Nós", href: "", newTab: false, classe: "thisPage" },
  ];

  return (
    <Styled.About>
      <article>
        <MenuSecundario menu={menu} title="Sobre Nós" />
      </article>

      <article className="solucao">
        <div>
          <Text>
            Administrada por seus fundadores, a MacServ é conduzida por uma
            gestão profissional e participativa que envolve todos os níveis
            hierárquicos alicerçada nos pilares da confiança e do respeito.{" "}
          </Text>
          <Text>
            {" "}
            Ela surge no mercado para avivar a relação entre clientes,
            fornecedores, funcionários oferecendo serviços de terceirização e
            apoio de mão de obra para vários seguimentos, desde serviços gerais
            passando por auxilio em setores administrativos chegando até o
            suporte técnico.
          </Text>

          <Text>
            {" "}
            A MacServ é uma empresa que adota uma postura ética e transparente
            com intuito de agregar valores à todos com quem ela se envolve,
            dedicada a se aprimorar a cada dia na prática de serviços de alta
            performance e qualidade.
          </Text>
        </div>

        <div>
          <Image src="https://www.primefacility.com.br/site/img/capa-folder-digital.jpg" />

          <Button> DOWNLOAD </Button>
        </div>
      </article>

      <article className="missaoValores">
        <div>
          <Image src="https://www.primefacility.com.br/site/img/missao.jpg" />
          <Text as="h2">Missão</Text>
          <Text>
            Prestar serviço de qualidade com custo benefício atrativo para o
            cliente e assegurar a satisfação com o resultado mais que esperado.
          </Text>
        </div>

        <div>
          <Image src="https://www.primefacility.com.br/site/img/visao.jpg" />
          <Text as="h2">Visão</Text>
          <Text>
            Ser referência no mercado de terceirização e serviços combinados,
            por oferecer qualidade e transparência em virtude de possuir mão de
            obra especializada e serviços customizados às necessidades de cada
            cliente.
          </Text>
        </div>

        <div>
          <Image src="https://www.primefacility.com.br/site/img/valores.jpg" />
          <Text as="h2">Valores</Text>
          <Text>
            Ser portador de ética profissional tanto com os clientes quanto para
            com os parceiros e colaboradores, além de promover a valorização
            humana e a inovação em todas as áreas em que atuarmos.
          </Text>
        </div>
      </article>
    </Styled.About>
  );
};
