import React from "react";
import * as Styled from "./styles";
import { Text } from "../../components/Text/Text";
import { MyLink } from "../../components/Link";
import { Image } from "../../components/Image";
import { Button } from "../../components/Buttom/Button";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";

export const Politica = () => {
  const menu = [
    { children: "Home/", href: "/", newTab: false },

    { children: "Sobre/", href: "/sobre", newTab: false },

    { children: "politica", href: "", newTab: false, classe: "thisPage" },
  ];

  return (
    <Styled.Politica>
      <article>
        <MenuSecundario menu={menu} title={"Políticas"} />
      </article>

      <article className="politica">
        <div className="itensPolitica">
          <Image
            src="https://www.primefacility.com.br/site/img/codigo-de-conduta.jpg"
            alt=""
          />
          <Button>DOWNLOAD</Button>
        </div>

        <div className="itensPolitica">
          <Image
            src="https://www.primefacility.com.br/site/img/politica-de-direitos-humanos.jpg"
            alt=""
          />
          <Button>DOWNLOAD</Button>
        </div>

        <div className="itensPolitica">
          <Image
            src="https://www.primefacility.com.br/site/img/politica-anti-corrupcao.jpg"
            alt=""
          />
          <Button>DOWNLOAD</Button>
        </div>
      </article>
    </Styled.Politica>
  );
};
