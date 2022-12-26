import React from "react";
import * as Styled from "./styles";
import { Text } from "../../../components/Text/Text";
import { MyLink } from "../../../components/Link";
import { Image } from "../../../components/Image";
import { Button } from "../../../components/Buttom/Button";
import { MenuSecundario } from "../../../components/MenuSecundario/MenuSecundario";

import conduta from "../../../assets/conduta.png";
import direitos from "../../../assets/direitos.png";
import corrupcao from "../../../assets/corrupcao.png";
import codgoconduta from "../../../assets/codgoconduta.pdf";
import direito from "../../../assets/direitos.pdf";
import anticorrupcao from "../../../assets/anticorrupcao.pdf";

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
          <Image src={conduta} alt="  codigo de conduta" />
          <Button>
            <a href={codgoconduta} download>
              DOWNLOAD
            </a>
          </Button>
        </div>

        <div className="itensPolitica">
          <Image src={direitos} alt=" politica de direitos humanos" />
          <Button>
            {" "}
            <a href={direito} download>
              DOWNLOAD
            </a>
          </Button>
        </div>

        <div className="itensPolitica">
          <Image src={corrupcao} alt="politica de corrupção" />
          <Button>
            {" "}
            <a href={anticorrupcao} download>
              DOWNLOAD
            </a>
          </Button>
        </div>
      </article>
    </Styled.Politica>
  );
};
