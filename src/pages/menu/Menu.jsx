import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import { MyLink } from "../../components/Link";
import { MdOutlineEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import logo from "../../assets/logo.png";

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  function getDetails(mouseEvent) {
    let target = mouseEvent.target;
    if (target.tagName === "SUMMARY" || target.tagName === "A") {
      target = target.parentNode;
    }
    if (target.tagName !== "DETAILS") {
      return;
    }
    return target;
  }

  const handleHover = () => {
    const detailsCollection = document.getElementsByTagName("details");

    for (let [i, details] of Object.entries(detailsCollection)) {
      details.onmouseover = (mouseEvent) => {
        const target = getDetails(mouseEvent);
        if (typeof target != "undefined") {
          target.open = true;
        }
      };
    }

    document.addEventListener("mouseover", (mouseEvent) => {
      for (let [key, details] of Object.entries(detailsCollection)) {
        if (details.matches(":hover")) {
          return details;
        }
        details.open = false;
      }
    });
  };

  useEffect(() => {
    handleHover();
  });

  return (
    <Styled.Menu menu={menu}>
      <Styled.Contato>
        <div className="contato">
          <MdOutlineEmail />
          <MyLink>contato@macserv.com.br</MyLink>

          <BsFillTelephoneFill />
          <MyLink>+55 21 98563651</MyLink>
        </div>

        <div className="social">
          <BsLinkedin />
        </div>
      </Styled.Contato>

      <button className="bottonMenu" onClick={handleMenu}>
        {menu ? <IoMdClose /> : <IoMdMenu />}{" "}
      </button>

      <div className="image">
        <img src={logo} alt="logo" />
      </div>

      <ul className="listaMenu">
        <summary className="titulo">
          <MyLink>HOME</MyLink>{" "}
        </summary>

        <details>
          <summary className="titulo">
            {" "}
            <p>EMPRESA </p> <MdOutlineKeyboardArrowDown />
          </summary>
          <div className="infor">
            <MyLink href="/sobre">Sobre N??s</MyLink>

            <MyLink href="/politica">Pol??tica</MyLink>
          </div>
        </details>

        <details>
          <summary className="titulo">
            {" "}
            <p> SERVI??OS </p> <MdOutlineKeyboardArrowDown />{" "}
          </summary>

          <div className="infor">
            <MyLink href="/climatizacao">Climatiza????o</MyLink>
            <MyLink href="/maoDeObra">Loca????o de m??o de obra</MyLink>
            <MyLink href="manutencaopredial">Manuten????o </MyLink>
            <MyLink href="/aluguelequipamentos">
              Aluquel de Maquinas e equipamentos
            </MyLink>
            <MyLink href="/comercio">Comercio varejista</MyLink>
            <MyLink href="/seguranca">Seguran??a eletr??nica</MyLink>
          </div>
        </details>

        <summary className="titulo">
          {" "}
          <MyLink href="/orcamento">ORCAMENTO</MyLink>{" "}
        </summary>

        <details>
          <summary className="titulo">
            <p> CONTATO</p> <MdOutlineKeyboardArrowDown />{" "}
          </summary>

          <div className="infor">
            <MyLink href="/faleconosco">Fale Conosco</MyLink>
            <MyLink href="/trabalheconosco">Trabahe Conosco</MyLink>
          </div>
        </details>
      </ul>
    </Styled.Menu>
  );
};
