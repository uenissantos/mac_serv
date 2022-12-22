import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import aluguel from "../../assets/aluguel.jpg";

export const AluguelEquipamentos = () => {
  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Aluguel de Maquinas e Equipamentos",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  const description = [
    {
      img: aluguel,

      infor:
        "A utilização de máquinas  é sinônimo de otimização de tempo e recursos, além de produção com elevados índices de qualidade. No entanto, a aquisição de uma máquina dessas representa um custo elevado, além de outros gastos associados. Por isso, o aluguel de máquinas  tem se apresentado como uma opção fácil e segura para suprir as demandas temporárias por esses equipamentos. ",

      infor1:
        "a MacServ aluga,  equipamentos para escritorio ,indústria e  comercio e caracteriza-se por estratégias de criação de negócios, qualidade, crescimento a longo prazo, integração com a comunidade, valorização e desenvolvimento da força de trabalho local e compromisso com o equilíbrio ambiental.",

      infor2:
        " Os investimentos na aquisição de equipamentos de alta tecnologia, treinamentos e formação de uma equipe forte, sólida e capacitada a fornecer um atendimento de excelência aos nossos clientes e fornecedores na área comercial e administrativa . ",
    },
  ];

  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "equipamentos para escritório ",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "maquinas e equipamentos industriais",
      href: "/sobre",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: " sem operador",
      href: "",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "maquinas e equipamentos  de comercio ",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "reduzir custo e ganhar produtividade",
      href: "",
      newTab: false,
    },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="Aluguel de Maquinas e Equipamentos" />

      <Servico description={description} icons={icons} />
    </article>
  );
};
