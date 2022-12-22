import React from "react";
import { Servico } from "../../components/Serviços/Servicos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import seguranca from "../../assets/seguranca.png";

export const Seguranca = () => {
  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Segurança eletrônica",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  const description = [
    {
      img: seguranca,

      infor:
        "O Sistema de Câmeras é a utilização de produtos de tecnologia para visualizar e gravar imagens e sons utilizando câmeras e placas de gravação. É um sistema que está sempre em evolução, tanto em termos de tecnologia quanto no que se referem as suas aplicações. Hoje é possível ter um sistema de câmeras em formato digital, o que nos proporciona a execução das atividades da era digital. As aplicações dos sistemas de câmeras passaram de um simples circuito de televisão para uma ampla área, como a gravação das imagens e sons, acesso remoto via celular e computadores, sensores de alarmes, dentre outras funções.",

      infor1:
        "Nossos avançados sistemas de CFTV oferecem o monitoramento via internet, onde o cliente te acesso a todas as suas câmeras em tempo real através de Smartphones, Tablets, Notebooks e Desktops",

      infor2:
        " O cliente ainda pode verificar a gravação das imagens armazenadas através de software isntalado em um Desktop ou Notebook ",
    },
  ];

  const icons = [
    {
      children: <AiOutlineCheckCircle />,
      href: "/",
      newTab: false,
      title: "Projeto,instalação e manutenção de alarme",
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "cerca elétrica",
      href: "/sobre",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "Automatizações de Portões e PABX",
      href: "",
      newTab: false,
    },
    {
      children: <AiOutlineCheckCircle />,
      title: "Atividades de monitoramento de sistemas de segurança eletronico",
      href: "",
      newTab: false,
    },

    {
      children: <AiOutlineCheckCircle />,
      title: "circuito fechadode TV",
      href: "",
      newTab: false,
    },
  ];

  return (
    <article>
      <MenuSecundario menu={menu} title="Segurança Eletrônica" />

      <Servico description={description} icons={icons} />
    </article>
  );
};
