import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import comercio from "../../assets/comercio.jpg";

export const Comercio = () => {
  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Comércio varejista",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  const description = [
    {
      img: comercio,

      infor:
        " A grande tendência atual do varejo é o “Omnichannel”, estratégia utilizada para a integração de todos os canais de vendas (físicos e digitais), aplicativos e mídias sociais, objetivando um contato maior com os clientes e proporcionando uma experiência diferenciada e abrangente. Devido à grande complexidade na construção e manutenção desse ambiente, a grande maioria das empresas busca aplicar uma parte desse conceito com o “cross channel”, que consiste em fazer as vendas cruzadas entre os diversos canais.",

      infor1: "",

      infor2: "  ",
    },
  ];

  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "materiais elétricos ",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "materiais de construção civil",
      href: "/sobre",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: " equipamentos e  suplementos de informatica",
      href: "",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "tratamento de dados ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "provedores de serviços de aplicação",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "serviços de hospedagem na internet",
      href: "",
      newTab: false,
    },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="Comércio Varejista" />

      <Servico description={description} icons={icons} />
    </article>
  );
};
