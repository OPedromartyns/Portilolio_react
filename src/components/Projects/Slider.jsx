import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://github.com/OPedromartyns/lucas_barber/blob/main/img%20do%20projeto.png?raw=true",
        disc : "Este é um portfolio com a coleção dos melhores trabalhos de um barbeiro.A página da web começa com a seção do cabeçalho, que contém o nome, imagem e introdução do barbeiro. A seção principal segue, que contém informações sobre o barbeiro, incluindo suas habilidades, experiência e serviços."
    },
    {
        img : "https://github.com/OPedromartyns/Relogio_digital/blob/main/img%20do%20projeto.png?raw=true",
        disc : "A página HTML exibe um relógio digital que mostra as horas, minutos e segundos atualizados em tempo real."
    },
    {
        img : "https://github.com/OPedromartyns/Netflix-clone/blob/main/img%20do%20projeto.png?raw=true",
        disc : "O site clone do front-end da Netflix é uma réplica da plataforma de streaming mais popular do mundo, desenvolvida exclusivamente com tecnologias de front-end como HTML, CSS e JavaScript."
    },
    {
        img : "https://github.com/OPedromartyns/Site_efeito_paralax/blob/main/img%20do%20projeto.png?raw=true",
        disc : "Um site em parallax é um tipo de site que usa efeitos de rolagem para criar a ilusão de profundidade e movimento, permitindo que os elementos da página pareçam estar se movendo em velocidades diferentes à medida que o usuário rola a página para baixo ou para cima."
    },
    {
        img : "https://github.com/OPedromartyns/formulario_de_login/raw/main/imagem%20ilustativa.png?raw=true",
        disc : "formulário de login simples em HTML e CSS. Ele contém um campo de entrada de texto para o nome de usuário, um campo de entrada de senha e um botão de envio."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #31f731;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`