import React from 'react'
import styled from 'styled-components';

export default function Card({ index, card }) {

    const [Cor, setCor] = React.useState("");
    const [Imagem, setImagem] = React.useState("src/assets/seta_play.png");
    const [Bol, setBol] = React.useState(true);
    const [Carta, setCarta] = React.useState(flashcard(index, Cor, Bol, Imagem));

    function flashcard(index, cor, Bol, img) {
        return (
            <Container>
                <Texto cor={cor} >Pergunta {index + 1}</Texto>
                <img
                onClick={() => Bol ? setCarta(Zap(card)) : ""}
                src={img}
                alt="play" />
            </Container>
        )
    }

    function Zap(card) {
        return (
            <ContainerZap>
                <p>{card.question}</p>
                <img onClick={() => setCarta(Recall(card))} src="src/assets/seta_virar.png" alt="virar" />
            </ContainerZap>
        )
    }

    function Recall(card) {
        return (
            <ContainerZap>
                <p>{card.answer}</p>
                <div>
                    <Botao
                    onClick={() => (
                        setCarta(flashcard(index, setCor("#FF3030"), setBol(false), setImagem("src/assets/icone_erro.png")))                        
                    )}
                    cor={"#FF3030"}
                    >Não lembrei</Botao>
                    <Botao
                    onClick={() => (
                        setCarta(flashcard(index, setCor("#FF922E"), setBol(false), setImagem("src/assets/icone_quase.png")))
                    )}
                    cor={"#FF922E"} >Quase não lembrei</Botao>
                    <Botao
                    onClick={() => (
                        setCarta(flashcard(index, setCor("#2FBE34"), setBol(false),setImagem("src/assets/icone_certo.png")))                       
                    )}
                    cor={"#2FBE34"} >ZAP!</Botao>
                </div>
            </ContainerZap>
        )
    }

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

    color: ${props => props.cor ? props.cor: ""};
    text-decoration: ${props => props.cor ? "line-through": ""};
`

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





const Botao = styled.button`
    width: 30%;
    height: 35px;
    justify-content: space-between;

    background-color: ${props => props.cor};
    border-radius: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    text-align: center;
    color:white;

`;