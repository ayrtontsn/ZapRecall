import React from 'react'
import styled from 'styled-components';
import Flashcard from './flashcard.jsx';

export default function Zap({index, card}) {
    const [Cor, setCor] = React.useState("");
    const [Imagem, setImagem] = React.useState("src/assets/seta_play.png");
    const [Carta, setCarta] = React.useState(() => (
    <Container>
        <Texto collor={Cor} >Pergunta {index + 1}</Texto>
        <img
        onClick={() => Cor==="" ? setCarta(Flashcard(card, index, setCarta)) : ""}
        src={Imagem}
        alt="play" />
    </Container>));     
    
    return (
        <>
            {Carta}
        </>)
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

    color: ${props => props.collor};
`