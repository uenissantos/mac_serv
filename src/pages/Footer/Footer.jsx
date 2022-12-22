import React from "react";
import * as Styled from "./styles";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text/Text";
import logo3 from "../../assets/logo3.png";
import uenis from "../../assets/uenis.svg";

import { MyLink } from "../../components/Link";

import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <Styled.Footer>
      <article className="footer">
        <section className="endereco">
          <Image src={logo3} />
          <Text>Rua Dr. Télio Barreto, 326 - Sala 102</Text>
          <Text>Centro - Macaé/RJ CEP: 27.910-060. </Text>

          <a href="tel:+5521999999999">
            <BsFillTelephoneFill /> +55 22 2791-6524
          </a>

          <a classe="email" href="mailto:webmaster@example.com">
            <MdOutlineEmail />
            contato@MacServ.com.br
          </a>
        </section>
        <section className="contato">
          <Text as="h3">Acesso Rápido</Text>

          <MyLink href="/">Home</MyLink>
          <MyLink href="/sobre">Empresa</MyLink>
          <MyLink href="/orcamento">Orçamento</MyLink>
          <MyLink href="/faleconosco">Fale conosco</MyLink>
        </section>
        <section className="social">
          <Text as="h2">Linkedin Company Page</Text>

          <MyLink>
            <RiLinkedinFill />
          </MyLink>
        </section>
      </article>

      <section className="meuContato">
        <Text as="h2">© 2022 MacServ • Desenvolvido por </Text>
        <MyLink href=" https:/com.br/site/ ">
          <Image src={uenis} alt="criador do site" />
        </MyLink>
      </section>
    </Styled.Footer>
  );
};
