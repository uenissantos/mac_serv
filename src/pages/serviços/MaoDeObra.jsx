import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import maodeobra from "../../assets/maodeobra.png";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const MaoDeObra = () => {
  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Mão de Obra Especializada",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  const description = [
    {
      img: maodeobra,

      infor:
        "A terceirização de mão de obra é uma prática usual em diversos tipos de organizações. A conotação de praticidade em processos e redução de custos diversos é ponto comum para quem opta por essa modalidade.",

      infor1:
        " A terceirização gera  fluidez e liberação dos gestores, que passam a focar mais no negócio macro sem a preocupação com operações realizadas pelas empresas de terceirização.",

      infor2:
        " Em última análise, podemos afirmar que a contratação de uma empresa especializada em terceirização, que seja autoridade e referência no que faz, é a garantia de mais tranquilidade e rentabilidade no seu negócio!  ",
    },
  ];

  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "Vigia ",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Porteiro",
      href: "/sobre",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Recepcionista comum e bilingue",
      href: "",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "Segurança de evento ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Serviços de escritorio e apoio administrativo ",
      href: "",
      newTab: false,
    },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="MÃO DE OBRA ESPECIALIZADA " />

      <Servico description={description} icons={icons} />
    </article>
  );
};
