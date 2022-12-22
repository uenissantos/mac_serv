import React from "react";
import * as Styled from "./styles";
import { Image } from "../../components/Image";
import pageNotFound from "../../assets/pageNotFound.png";

export const PageNotFound = () => {
  return (
    <Styled.PageNotFound>
      <Image src={pageNotFound} alt="pageNotFound"></Image>
    </Styled.PageNotFound>
  );
};
