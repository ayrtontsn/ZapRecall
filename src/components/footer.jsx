import styled from "styled-components"

export default function Rodape(){
    return(
        <Footer>
            0/4 CONCLUÍDOS
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