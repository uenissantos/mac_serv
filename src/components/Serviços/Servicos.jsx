import React from "react";
import { Text } from "../../components/Text/Text";
import { MyLink } from "../../components/Link";
import { Image } from "../../components/Image";
import * as Styled from "./styles";

export const Servico = ({ description = [], icons = [] }) => {
  return (
    <Styled.Servico>
      {description.map((value, i) => (
        <article key={i} className="image">
          <Image src={value.img} alt="" />

          <div className="infor">
            <Text>{value.infor}</Text>
            <Text> {value.infor1}</Text>
            <Text> {value.infor2}</Text>
          </div>
        </article>
      ))}

      <div className="wrapper">
        {icons.map((link, i) => (
          <section className="icons" key={i}>
            <div className="itemIcon">
              <MyLink classe={link.classe}>{link.children}</MyLink>
              <Text> {link.title}</Text>
            </div>
          </section>
        ))}
      </div>
    </Styled.Servico>
  );
};
