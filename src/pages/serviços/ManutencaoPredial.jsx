import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import manutencao from "../../assets/manutencao.png";

export const ManutencaoPredial = () => {
  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Manutenção",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  const description = [
    {
      img: manutencao,

      infor:
        "Essenciais para uma rotina segura em ambientes corporativos e residenciais, os serviços de manutenção  são um conjunto de medidas visando a conservação e perfeito funcionamento de toda a estrutura e sistemas de um edificio ou equipamentos . ",

      infor1:
        "Quando aplicadas da forma correta e com a periodicidade necessária, essas medidas proporcionam mais segurança e garantem a funcionalidade do empreendimento. Os serviços de manutenção do Grupo  MacServ aumentam a confiabilidade e segurança dos ambientes e da infraestrutura das empresas ou condomínios de seus clientes, com planejamento dos procedimentos e utilização de novas e modernas tecnologias.",

      infor2:
        "Nossos profissionais possuem treinamento, orientação e supervisão constantes para cada função e posto de serviço, agindo sempre conforme os procedimentos padrão, atendendo as necessidades específicas de cada cliente.  ",
    },
  ];

  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "Zeladoria ",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Manutençãoe limpeza de piscinas",
      href: "/sobre",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Limpeza industrial,comercial,predial .",
      href: "",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "Reparo e manutençao de computadores e equipamentos periféricos ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Especializada em pós-obra ",
      href: "",
      newTab: false,
    },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="Manutenção" />

      <Servico description={description} icons={icons} />
    </article>
  );
};
