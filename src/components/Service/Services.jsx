import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaJsSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
         Meus <span className="green">Serviços</span>
        </h4>
        <h1>O que eu faço?</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaJsSquare}
            title={'JavaScript' }
            disc={'JavaScript é uma linguagem de programação muito popular e versátil, usada em muitos tipos diferentes de projetos.'}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaHtml5}
            title={"HTML5"}
            disc={`HTML5 é a versão mais recente do HTML, que é uma linguagem de marcação usada para criar páginas web. Com HTML5,é possivel criar páginas web mais modernas e interativas do que nunca.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaCss3}
            title={"CSS"}
            disc={`CSS é uma linguagem de estilo usada para definir a aparência e o layout de páginas web. Com CSS, é possível definir as cores, fontes, espaçamento, posicionamento e outros elementos visuais de uma página.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
