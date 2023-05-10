import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Projetos<span className="green"> recentes </span></h1>
            <p>Um projeto bem executado é como uma obra de arte: requer habilidade, criatividade e atenção aos detalhes.
            não só impressiona visualmente, mas também é capaz de transmitir emoções e despertar sensações únicas em cada pessoa que o contempla. </p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 2.2rem;
    }

    p{
        width: 50rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.2rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``