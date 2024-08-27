import CARDS from "./mock.js"
import styled from "styled-components"

export default function Rodape({concluida}){
    const total = CARDS.length
    console.log(`no footer: ${concluida}`)
    return(
        <Footer>
            {concluida}/{total} CONCLUÍDOS
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #Ffffff;
    padding: 24px 0px;

    position: fixed;
    width: 100%;
    bottom: 0;

    font-family: "Recursive", sans-serif;
`