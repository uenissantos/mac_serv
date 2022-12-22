import React from "react";
import * as Styled from "./styles";

import { Input } from "../../components/Input";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
export const Orcamento = () => {
  const sendEmail = () => {
    var submitButton = document.getElementById("submit_form");
    var form = document.getElementById("email_form");
    form.addEventListener("submit", function (e) {
      setTimeout(function () {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
      }, 1);
    });
  };

  const menu = [
    {
      children: "Home  / ",
      href: "/",
      newTab: false,
    },

    { children: "Sobre  / ", href: "/sobre", newTab: false },

    {
      children: "Orcamento",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  return (
    <Styled.Orcamento>
      <article className="wrapper">
        <MenuSecundario menu={menu} title="ORÇAMENTO" />
        <form
          action="https://postmail.invotes.com/send"
          method="post"
          id="email_form"
          className="form"
        >
          <Input type="text" name="subject" placeholder="Empresa" />

          <Input type="text" name="reply_to" placeholder=" E-mail" />

          <Input
            type="text"
            name="extra_phone_number"
            placeholder="Numero de telefone"
          />

          {/*         <input type="text" name="text" placeholder="empresa" />
           */}
          <textarea
            name="text"
            placeholder="Nome completo e solicitação "
          ></textarea>

          <Input
            type="hidden"
            name="access_token"
            value="9klay5wvm2ogkdqlh60jnnkk"
          />

          <Input
            type="hidden"
            name="success_url"
            value=".?message=Email+Successfully+Sent%21&isError=0"
          />
          <Input
            type="hidden"
            name="error_url"
            value=".?message=Email+could+not+be+sent.&isError=1"
          />

          <Input
            id="submit_form"
            type="submit"
            value="Enviar mensagem"
            onClick={sendEmail}
          />
        </form>
      </article>
    </Styled.Orcamento>
  );
};
