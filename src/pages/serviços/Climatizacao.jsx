import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import cimatizacao from "../../assets/climatizacao.jpg";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const Climatizacao = () => {
  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "Consultoria e Avaliação",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "projetos de climatização de ambientes",
      href: "/sobre",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "Instalação residencial e comercial",
      href: "/sobre",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "Manutenção preventiva e corretiva",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Limpeza e higienização dos dutos",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "PMOC ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Sistemas VRF/VRV ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Trabalhamos com todas as marcas ",
      href: "",
      newTab: false,
    },
  ];

  const description = [
    {
      img: cimatizacao,

      infor: `Fazemos instalação , manutenção preventiva e corretiva de equipamentos de refrigeração, com equipe de profissionais habilitados para diagnosticar e reparar defeitos nos equipamentos com rapidez e confiabilidad  .`,

      infor1:
        "Garantimos sua satisfação ao contratar nossa equipe de profissionais capacitados e qualificados.",
      infor2:
        " Nós da MacServ mantemos contrato de manutenção preventiva para garantir que sua empresa evite grandes prejuízos.",
    },
  ];

  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    { children: "Climatização", href: "", newTab: false, classe: "thisPage" },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="CLIMATIZAÇÃO" />

      <Servico description={description} icons={icons} />
    </article>
  );
};
