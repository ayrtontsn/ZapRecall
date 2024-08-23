import React from 'react'
import styled from 'styled-components';
import Answer from './answer.jsx';

export default function Flashcard(card, setCarta, index, setCor, setImagem,Question, Cor, Imagem) {
    return (
        <ContainerZap>
            <p>{card.question}</p>
            <img onClick={() => setCarta(Answer(card, setCarta, index, setCor, setImagem,Question, Cor, Imagem))} src="src/assets/seta_virar.png" alt="virar" />
        </ContainerZap>
    )
}

const ContainerZap = styled.div`
    width: 100%;
    height: 130px;
    
    display: flex;

    background: #FfffD4;
    border-radius: 5px;
    padding: 23px 10px;
    margin: 25px 0;

    position: relative;

    p {
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;

    }
    img {
        display: flex;
        align-items: end;
        justify-content: end;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    div{
        display: flex;
        width: 95%;
        justify-content: space-around;
        margin: 10px 10px;
        position: absolute;
        bottom: 5%;
        right: 0px;   
    }
`;