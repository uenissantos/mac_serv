import React from "react";

import * as Styled from "./styles";

import logo2 from "../../assets/logo2.png";
import solucao from "../../assets/solucao.png";
import seguranca from "../../assets/seguranca.png";
import manutencao from "../../assets/manutencao.png";
import maodeobra from "../../assets/maodeobra.png";

import { Text } from "../../components/Text/Text";
import { MyLink } from "../../components/Link";
import { Button } from "../../components/Buttom/Button";
import { Image } from "../../components/Image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { SlUser, SlDocs, SlLocationPin, SlDoc } from "react-icons/sl";
import { MdDirectionsCarFilled } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

export const Principal = () => {
  return (
    <Styled.Principal>
      <div className="carousel">
        <Carousel
          autoPlay={false}
          infiniteLoop={true}
          autoFocus={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <Image src={maodeobra} alt="conservação patrimonial" />
            <div className="tituloCarousel"></div>

            <div className="itenTitle  slideTitle">
              <h2> Asseio e Conservação Patrimonial</h2>
              <p>
                Os serviços de asseios, conservação e limpeza são decisivos na
                hora de explora a boa imagem de uma empresa
              </p>
              <Button>
                <MyLink href="/maoDeObra">SAIBA MAIS</MyLink>
              </Button>
            </div>
          </div>

          <div>
            <Image src={manutencao} alt="manutençao " />

            <div className="tituloCarousel"></div>
            <div className="itenTitle ">
              <h2>Serviços de manutenção</h2>
              <p>
                MacServ possui setor especifico para area de manutenção, com
                pessoal qualificado de acordo com as normas regulamentadoras
              </p>
              <Button>
                <MyLink href="/manutencaopredial">SAIBA MAIS</MyLink>
              </Button>
            </div>
          </div>

          <div>
            <Image src={seguranca} alt="segurança eletronica" />
            <div className="tituloCarousel"></div>

            <div className="itenTitle animated bounceInUp">
              <h2> Segurança eletrônica</h2>

              <p>
                MacServ disponibiliza uma moderna soluçao em monitoramento de
                imagens, manutenção preventiva e corretiva{" "}
              </p>
              <Button>
                <MyLink href="/seguranca">SAIBA MAIS</MyLink>
              </Button>
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
          <Image src={solucao} />
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
        <Text as="h2"> Fale diretamente com nossa equipe comercial</Text>
        <Text as="h2"> </Text>
        <Text as="h2"> </Text>
        <Button>
          <MyLink src="">
            ENVIAR E-MAIL <RiArrowRightSLine />
          </MyLink>
        </Button>
      </div>
    </Styled.Principal>
  );
};
