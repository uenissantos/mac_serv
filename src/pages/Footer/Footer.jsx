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
        {" "}
        <section className="endereco">
          <Image src={logo3} />
          <Text>Rua Dr. Télio Barreto, 326 - Sala 102</Text>
          <Text>Centro - Macaé/RJ CEP: 27.910-060. </Text>

          <MyLink>
            {" "}
            <BsFillTelephoneFill /> +55 22 2791-6524{" "}
          </MyLink>

          <MyLink classe={"email"}>
            {" "}
            <MdOutlineEmail />
            contato@primefacility.com.br{" "}
          </MyLink>
        </section>
        <section className="contato">
          <Text as="h3">Acesso Rápido</Text>

          <MyLink href="/">Home</MyLink>
          <MyLink href="/sobre">Empresa</MyLink>
          <MyLink src="/orcamento">Orçamento</MyLink>
          <MyLink src="/comunicacao">Fale conosco</MyLink>
        </section>
        <section className="social">
          <Text as="h2">Linkedin Company Page</Text>

          <MyLink>
            {" "}
            <RiLinkedinFill />
          </MyLink>
        </section>
      </article>

      <section className="meuContato">
        <Text as="h2">© 2022 MacServ • Desenvolvido por </Text>
        <MyLink>
          <Image src={uenis} alt="criador do site" />
        </MyLink>
      </section>
    </Styled.Footer>
  );
};
