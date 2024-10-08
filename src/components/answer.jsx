import styled from 'styled-components';
import {Question} from './zap.jsx';


export default function Answer(index, card, setCarta, setConcluida) {
    const collors = [
        { cor: "#FF3030", imagem: "public/assets/icone_erro.png", frase: "Não lembrei" },
        { cor: "#FF922E", imagem: "public/assets/icone_quase.png", frase: "Quase não lembrei" },
        { cor: "#2FBE34", imagem: "public/assets/icone_certo.png", frase: "ZAP!" }
    ]

    function Botao() {

        return(
        collors.map((item,ind) => (
                <Botaocss key={ind} $cor={item.cor} onClick={() => (
                    mudarconcluida(index, card, setCarta, item.cor ,item.imagem, setConcluida)                
                    )}>
                    {item.frase}
                </Botaocss>
    )))
    }

    return (
        <ContainerZap>
            <p>{card.answer}</p>
            <div>
                {Botao()}
            </div>
        </ContainerZap>
    )
}

function mudarconcluida(index, card, setCarta, cor, imagem, setConcluida) {
    
    setConcluida(antes => {
        const conc = antes + 1;
        return conc;
    });
    setCarta(Question(index, card, setCarta, cor, imagem));
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

const Botaocss = styled.button`
    width: 30%;
    height: 35px;
    justify-content: space-between;

    background-color: ${props => props.$cor};
    border-radius: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    text-align: center;
    color:white;

`;