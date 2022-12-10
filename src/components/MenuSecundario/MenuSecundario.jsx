import React from "react";
import P from "prop-types";
import * as Styled from "./styles";
import { MyLink } from "../Link";

export const MenuSecundario = ({ menu, title }) => {
  return (
    <Styled.MenuSecundario>
      <div className="menu">
        <header className="title">
          <h1>{title}</h1>
        </header>

        {menu.map((link, i) => (
          <section className="menuSecundario" key={i}>
            <MyLink classe={link.classe} newTab={link.newTab} href={link.href}>
              {link.children}
            </MyLink>
          </section>
        ))}
      </div>
    </Styled.MenuSecundario>
  );
};

MenuSecundario.propTypes = {
  menu: P.array.isRequired,
  title: P.string,
};
