import React from 'react'
import styled from 'styled-components';
import Flashcard from './flashcard.jsx';

export default function Zap({index, card, setConcluida, concluida}) {
    const cor = "";
    const imagem = "src/assets/seta_play.png";
    const [carta, setCarta] = React.useState("");
    !carta && setCarta(Question(index, card,setCarta,cor ,imagem, concluida, setConcluida))

    return (
        <>
            {carta}
        </>)
}

export function Question(index, card, setCarta, cor ,imagem, concluida, setConcluida){
    return (
        <Container>
            <Texto $collor={cor} >Pergunta {index + 1}</Texto>
            <img
            onClick={() => (
                !cor && setCarta(Flashcard(index, card, setCarta, concluida, setConcluida)))}
            src={imagem}
            alt="play" />
        </Container>)
}

const Container = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: #Ffffff;
    border-radius: 5px;
    padding: 23px 10px;
    margin: 25px 0;


`;

const Texto = styled.p`
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;

    color: ${props => props.$collor};
    text-decoration: ${props => props.$collor && "line-through"};
`