import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { FaGithub } from 'react-icons/fa';
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
           Olá <span className="green">Eu sou</span>
          </h4>
          <h1 className="green">Pedro Martyns</h1>
          <h3>Desenvolvedor Front end</h3>
          <p>
          Com experiência em projetos web responsivos e interativos. Meu portfólio apresenta projetos, desde sites de comércio eletrônico a aplicativos de gerenciamento de tarefas. Utilizo HTML, CSS e JavaScript para criar interfaces atraentes e funcionais. Sinta-se à vontade para explorar meu portfólio e entrar em contato comigo para mais informações.
          </p> <a href="#footer">
          <button>Vamos conversar</button></a>
          <Social>
            <p>Confira o meu</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/opedromartyns/" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/OPedromartyns" target="_blank">
                  <FaGithub/>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/opedro-martins/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
      <Profile>
  <img
    src="img/bg_1.png"
    alt="profile"
    style={{ width: '490px', height: '460px' }}
  />
</Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 700;
  }
  h1 {
    font-size: 2.8rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 800;
  }

  button {
    padding: 1.05rem 3rem; 
    margin-top: 3rem;
    cursor: pointer;
    background-color: #31f731;
    border: none;
    color: #2b263a;
    font-weight: 1000;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 3.45rem;
      height: 3rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #31f731;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #2b263a;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 30px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-20px);
  }
`;
