import React from "react";
import * as Styled from "./styles";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text/Text";
import { MyLink } from "../../components/Link";
import logo2 from "../../assets/logo2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button } from "../../components/Buttom/Button";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { SlUser, SlDocs, SlLocationPin, SlDoc } from "react-icons/sl";
import { MdDirectionsCarFilled } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

export const Principal = () => {
  return (
    <Styled.Principal>
      <div className="carousel">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <Image src="https://www.primefacility.com.br/site/img/revolution/asseio-e-conservacao-patrimonial.jpg" />
            <div className="tituloCarousel">
              <h2> Asseio e Conservação Patrimonial</h2>
              <p>
                {" "}
                Os servilos de asseios, conservação e limpeza são decisivos na
                hora de explora a boa imagem de uma empresa
              </p>
              <Button> SAIBA MAIS</Button>
            </div>
          </div>
          <div>
            <Image src="https://www.primefacility.com.br/site/img/revolution/servicos-de-manutencao.jpg" />

            <div className="tituloCarousel">
              <h2>Serviços de manutenção</h2>
              <p>
                {" "}
                MacServ possui setor especifico para area de manutenção, com
                pessoal qualificado de acordo com as normas regulamentadoras
              </p>
              <Button> SAIBA MAIS</Button>
            </div>
          </div>
          <div>
            <Image src="https://www.primefacility.com.br/site/img/revolution/seguranca-eletronica.jpg" />

            <div className="tituloCarousel">
              <h2> Segurança eletrônica</h2>

              <p>
                {" "}
                MacServ disponibiliza uma moderna soluçao em monitoramento de
                imagens, manutenção preventiva e corretiva{" "}
              </p>
              <Button> SAIBA MAIS</Button>
            </div>
          </div>
        </Carousel>
      </div>

      <Image className="logo" src={logo2} />
      <div className="titleLogo">
        <Text>
          Administrada por seus fundadores, a MacServ é conduzida por uma gestão
          profissional e participativa que envolve todos os níveis hierárquicos
          alicerçada nos pilares da confiança e do respeito.
        </Text>
      </div>

      <div className="apresentacao">
        <div>
          <Image src="https://www.primefacility.com.br/site/img/about_us.jpg" />
        </div>
        <div>
          <Text>
            Administrada por seus fundadores, a MacServ é conduzida por uma
            gestão profissional e participativa que envolve todos os níveis
            hierárquicos alicerçada nos pilares da confiança e do respeito.
          </Text>

          <Text>
            Surgimos no mercado para avivar a relação entre clientes,
            fornecedores, funcionários oferecendo serviços de terceirização e
            apoio de mão de obra para vários seguimentos, desde serviços gerais
            passando por auxilio em setores administrativos chegando até o
            suporte técnico.
          </Text>

          <Text>
            A MacServ é uma empresa que adota uma postura ética e transparente
            com intuito de agregar valores à todos com quem ela se envolve,
            dedicada a se aprimorar a cada dia na prática de serviços de alta
            performance e qualidade.
          </Text>
        </div>
      </div>

      <div className="check">
        <div className="itemsIcon">
          <h2 href="">
            <AiOutlineCheckCircle />
          </h2>

          <Text>
            Supervisão para cada área de atuação, Portaria, Limpeza, Faciliteis{" "}
          </Text>
        </div>

        <div className="itemsIcon">
          <h2 href="">
            <SlUser />
          </h2>
          <Text>Atendimento Personalizado</Text>
        </div>

        <div className="itemsIcon">
          <h2 href="">
            <MdDirectionsCarFilled />
          </h2>

          <Text>Frota propria e caracterizada</Text>
        </div>

        <div className="itemsIcon">
          <h2 href="">
            <SlDoc />
          </h2>

          <Text>Treinamento Periódico Portaria e Limpeza</Text>
        </div>

        <div className="itemsIcon">
          <h2 href="">
            <SlDocs />
          </h2>

          <Text>Análise de risco, Cronograma de serviços, Check-list</Text>
        </div>

        <div className="itemsIcon">
          <h2 href="">
            <SlLocationPin />
          </h2>

          <Text>Localização Estratégica</Text>
        </div>
      </div>

      <div className="enviarEmail">
        <Text as="h2"> Fale diretamente com </Text>
        <Text as="h2"> nossa equipe </Text>
        <Text as="h2"> comercial</Text>
        <Button>
          <MyLink src="">
            {" "}
            ENVIAR E-MAIL <RiArrowRightSLine />{" "}
          </MyLink>{" "}
        </Button>
      </div>
    </Styled.Principal>
  );
};
